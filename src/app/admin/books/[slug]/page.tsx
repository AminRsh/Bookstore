import BookPage from '@/components/BookPage';
import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import AdminSidebar from './AdminSidebar';

interface PageProps {
    params: { slug: string }
}

export default async function Page({params: {slug}}: PageProps) {
    const book = await prisma.book.findUnique({
        where: { slug }
    })

    if(!book) notFound()

    return <main className="flex m-auto max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-center">
        <BookPage book={book} />
        <AdminSidebar book={book}/>
    </main>
}