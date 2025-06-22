"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { revalidatePathAction } from "@/actions/revalidate";

interface RevalidateButtonProps {
    path: string;
    className?: string;
    size?: "sm" | "default" | "lg";
    variant?: "default" | "outline" | "ghost" | "secondary";
    secretKey?: string; // Allow passing secret key as prop for flexibility
}

export default function RevalidateButton({
    path,
    className,
    size = "sm",
    variant = "outline",
    secretKey,
}: RevalidateButtonProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [lastRevalidated, setLastRevalidated] = useState<string | null>(null);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [message, setMessage] = useState<string>("");

    const handleRevalidate = async () => {
        setIsLoading(true);
        setStatus("idle");
        setMessage("");

        try {
            // Prompt for secret key if not provided
            const secret = secretKey || prompt("Enter revalidation secret key:");

            if (!secret) {
                setStatus("error");
                setMessage("Secret key is required");
                return;
            }

            const result = await revalidatePathAction(path, secret);

            if (result.success) {
                setLastRevalidated(new Date().toLocaleTimeString());
                setStatus("success");
                setMessage(result.message);
            } else {
                setStatus("error");
                setMessage(result.message);
            }
        } catch (error) {
            setStatus("error");
            setMessage("Revalidation failed");
            console.error("Revalidation error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const getStatusColor = () => {
        switch (status) {
            case "success":
                return "text-green-600";
            case "error":
                return "text-red-600";
            default:
                return "text-muted-foreground";
        }
    };

    const getStatusMessage = () => {
        switch (status) {
            case "success":
                return `✓ ${lastRevalidated}`;
            case "error":
                return `✗ ${message}`;
            default:
                return lastRevalidated ? `Last updated: ${lastRevalidated}` : null;
        }
    };

    return (
        <div className="flex flex-col items-end gap-1">
            <Button
                onClick={handleRevalidate}
                disabled={isLoading}
                size={size}
                variant={variant}
                className={cn("gap-2", className)}
                title={`Revalidate ${path}`}
            >
                <RefreshCw
                    className={cn("h-4 w-4", isLoading && "animate-spin")}
                />
                {isLoading ? "Revalidating..." : "Revalidate"}
            </Button>
            {getStatusMessage() && (
                <span className={cn("text-xs", getStatusColor())}>
                    {getStatusMessage()}
                </span>
            )}
        </div>
    );
} 