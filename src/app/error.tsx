"use client"
import H1 from '@/components/ui/h1';

interface ErrorProps {
    statusCode: number;
    error: Error; 
}


const Error = ({ statusCode, error }: ErrorProps) => {
    console.log(error);
    
    return (
        <main className="m-auto my-10 max-w-5xl space-y-5 px-3 text-center">
            <H1>Error</H1>
            <p className="">An {statusCode} error occured</p>
        </main>
    )
}

export default Error
