import React from 'react'
import { AnimationPageClient } from './page-client'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Animations | Milind Mishra",
    description: "Animations by Milind Mishra",
}

export default function AnimationPage() {
    return (
        <AnimationPageClient />
    )
}
