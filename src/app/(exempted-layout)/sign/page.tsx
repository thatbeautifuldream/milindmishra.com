import { Metadata } from 'next'
import SignPageClient from './page.client'

export const metadata: Metadata = {
    title: 'Sign | Milind Mishra',
    description: 'Sign of Milind Mishra',
}

export default function SignPage() {
    return (
        <SignPageClient />
    )
}

