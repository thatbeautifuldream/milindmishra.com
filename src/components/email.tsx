import { bricolageGrotesque } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export function Email({ email }: { email: string }) {
    return (
        <div className="flex flex-col items-center ~py-8/16 group">
            <h3
                onClick={() => {
                    navigator.clipboard.writeText(email);
                    toast.success("Email copied to clipboard", {
                        description: "You can now paste it in your email client",
                    });
                }}
                className={cn("~text-2xl/4xl text-white hover:text-green-400 transition-colors duration-300 underline font-bold cursor-pointer", bricolageGrotesque.className)}
            >
                {email}
            </h3>
            <span className="mt-2 text-xs font-mono text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                click to copy
            </span>
        </div>
    )
}