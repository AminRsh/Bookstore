"use client"
import { useState, useEffect } from 'react';
import { SignIn } from '@clerk/nextjs';

export default function Page() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center my-16">
            {isClient && <SignIn />}
        </div>
    );
}
