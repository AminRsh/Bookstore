"use client"

import { useRouter } from 'next/router';

export default function ErrorPage() {
    const router = useRouter();

    return (
        <div>
            <h2>Oops Something went wrong.</h2>
            <p>We are sorry, but something went wrong on our end. Please try again later.</p>
            <button onClick={() => router.push('/')}>Go Home</button>
        </div>
    );
}
