import { BookFilterValues } from "@/lib/validation";
import BookListItem from "./BookListItem"
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Search } from 'lucide-react';


interface BookResultProps {
    filterValues: BookFilterValues
    page?: number
}

const BookResults = async ({ filterValues, page = 1 }: BookResultProps) => {

    const { q, author, category, publisher } = filterValues

    const booksPerPage = 6
    const skip = (page - 1) * booksPerPage

    const searchString = q?.split(" ").filter(word => word.length > 0).join(" & ")

    const searchFilter: Prisma.BookWhereInput = searchString ? {
        OR: [
            { title: { search: searchString }, },
            { author: { search: searchString }, },
            { category: { search: searchString }, },
            { publisher: { search: searchString }, },
        ]
    } : {}

    const where: Prisma.BookWhereInput = {
        AND: [
            searchFilter,
            author ? { author } : {},
            category ? { category } : {},
            publisher ? { publisher } : {},
            { approved: true }
        ]
    }

    const booksPromise = prisma.book.findMany({
        where,
        orderBy: { createdAt: "desc" },
        take: booksPerPage,
        skip
    })

    const countPromise = prisma.book.count({ where })

    const [books, totalResults] = await Promise.all([booksPromise, countPromise])
    
    return (
        <div className="space-y-4 grow">
            {
                books.map(book => (
                    <Link key={book.id} href={`/books/${book.slug}`} className="block">
                        <BookListItem book={book} />
                    </Link>
                ))
            }
            {
                books.length === 0 && (
                    <p className="m-auto text-center">
                        No books found. Try adjusting your search filters.
                    </p>
                )
            }
            {
                books.length > 0 && (
                    <Pagination
                        currentPage={page}
                        totalPages={Math.ceil(totalResults / booksPerPage)}
                        filterValues={filterValues}
                    />
                )
            }
        </div>
    )
}

export default BookResults

interface PaginationProps {
    currentPage: number,
    totalPages: number,
    filterValues: BookFilterValues
}

function Pagination(
    { currentPage, totalPages, filterValues: { q, author, category, publisher } }: PaginationProps) {
    function generatePageLink(page: number) {
        const searchParams = new URLSearchParams({
            ...(q && { q }),
            ...(author && { author }),
            ...(category && { category }),
            ...(publisher && { publisher }),
            page: page.toString(),
        })
        return `/?${searchParams.toString()}`
    }
    return <div className="flex justify-between">
        <Link
            href={generatePageLink(currentPage - 1)}
            className={cn(
                "flex items-center gap-2 font-semibold",
                currentPage <= 1 && "invisible"
            )}>
            <ArrowLeft size={16} />
            Previous Page
        </Link>
        <span className="font-semibold">
            Page {currentPage} of {totalPages}
        </span>
        <Link
            href={generatePageLink(currentPage + 1)}
            className={cn(
                "flex items-center gap-2 font-semibold",
                currentPage >= totalPages && "invisible"
            )}>
            Next Page
            <ArrowRight size={16} />
        </Link>
    </div>
}