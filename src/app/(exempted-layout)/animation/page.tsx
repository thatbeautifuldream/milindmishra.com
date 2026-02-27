import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Animations | Milind Mishra",
    description: "Animations by Milind Mishra",
}

export default function AnimationPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-white text-xl">Animations are being updated. Check back later!</p>
        </div>
    )
}
