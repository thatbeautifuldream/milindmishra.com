import { cn } from '@/lib/utils'
import { inter } from '@/lib/fonts'
import React from 'react'

function ChatLayout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className={cn(inter.className, "antialiased bg-black text-green-400")}
        >
            {children}
        </div>
    );
}

export default ChatLayout;
