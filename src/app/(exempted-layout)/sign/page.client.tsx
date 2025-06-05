"use client"

import { Sign } from '@/components/sign'
import { useRouter } from 'nextjs-toploader/app'
import React, { useState, useEffect } from 'react'

export default function SignPageClient() {
    const router = useRouter()
    const [stroke, setStroke] = useState<boolean>(false)
    const [clickCount, setClickCount] = useState<number>(0)

    useEffect(() => {
        if (clickCount >= 5) {
            router.push('/')
            setClickCount(0)
        }
    }, [clickCount, router])

    return (
        <div 
            className="flex flex-col items-center justify-center h-screen" 
            onClick={() => {
                setStroke(s => !s)
                setClickCount(prev => prev + 1)
            }}
        >
            <Sign color="white" stroke={stroke} className="size-96" />
        </div>
    )
}

