"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { Thread } from "@/components/assistant-ui/thread";
import { ThreadList } from "@/components/assistant-ui/thread-list";
import { useState } from "react";
import {
  Menu,
  X,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Assistant() {
  const runtime = useChatRuntime({
    api: "/api/chat",
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className="relative h-dvh flex">
        {/* Mobile menu button - only visible on very small screens */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-background sm:hidden"
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Sidebar */}
        <div
          className={`fixed sm:static inset-y-0 left-0 flex transform transition-all duration-300 ease-in-out z-40
            ${
              isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full sm:translate-x-0"
            }
            ${isSidebarOpen ? "w-64 sm:w-64" : "sm:w-16"}
          `}
        >
          {/* Slim sidebar - always visible on desktop */}
          <div className="hidden sm:flex flex-col items-center w-16 h-full bg-background border-r py-4">
            <button
              className="p-2 rounded-md hover:bg-accent mb-4"
              aria-label="Chat threads"
            >
              <MessageSquare className="h-6 w-6" />
            </button>
          </div>

          {/* Expandable sidebar content */}
          <div
            className={`
            flex-1 bg-background border-r overflow-hidden transition-all duration-300
            ${isSidebarOpen ? "w-64" : "w-0 sm:w-0"}
          `}
          >
            <div className="h-full pt-16 sm:pt-4">
              <div className="flex justify-end px-4 mb-2">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 rounded-md hover:bg-accent"
                  aria-label="Collapse sidebar"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </div>
              <ThreadList />
            </div>
          </div>

          {/* Expand button - only visible on desktop when sidebar is collapsed */}
          {!isSidebarOpen && (
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="hidden sm:flex absolute -right-4 top-1/2 transform -translate-y-1/2 
                        bg-background border rounded-full p-1 hover:bg-accent z-50"
              aria-label="Expand sidebar"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Main content */}
        <div className="flex-1 h-full overflow-hidden">
          <Thread />
        </div>

        {/* Overlay - only on mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </AssistantRuntimeProvider>
  );
}
