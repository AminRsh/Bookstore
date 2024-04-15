import JobListItem from "@/components/BookListItem";
import H1 from "@/components/ui/h1";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function AdminPage() {
    const unapprovedBooks = await prisma.book.findMany({
        where: { approved: false },
    });

    return (
        <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
            <H1 className="text-center">Admin Dashboard</H1>
            <section className="flex flex-col gap-3">
                <h2 className="text-lg font-bold">Unapproved jobs:</h2>
                {unapprovedBooks.map((book) => (
                    <Link key={book.id} href={`/admin/jobooks/${book.slug}`} className="block">
                        <JobListItem book={book} />
                    </Link>
                ))}
                {unapprovedBooks.length === 0 && (
                    <p className="text-muted-foreground">No unapproved jobs</p>
                )}
            </section>
        </main>
    );
}
