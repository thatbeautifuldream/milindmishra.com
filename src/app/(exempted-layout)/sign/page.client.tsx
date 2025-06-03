"use client"

import { Sign } from '@/components/sign'
import React, { useState } from 'react'

export default function SignPageClient() {
    const [stroke, setStroke] = useState(false)
    return (
        <div className="flex flex-col items-center justify-center h-screen" onClick={() => setStroke(s => !s)}>
            <Sign color="white" stroke={stroke} className="size-96" />
        </div>
    )
}

