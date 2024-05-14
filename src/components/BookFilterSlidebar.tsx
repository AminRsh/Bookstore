import { bookCategories } from "@/lib/bookCategories";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Select from "./ui/select";
import prisma from "@/lib/prisma";
import { BookFilterValues, bookFilterSchema } from "@/lib/validation";
import { redirect } from "next/navigation";
import FormSubmitButton from "./FormSubmitButton";
import { Button } from "./ui/button";
import Link from "next/link";

async function filterBooks(formData: FormData) {
    "use server";

    const values = Object.fromEntries(formData.entries())


    const { q, category, author, publisher } = bookFilterSchema.parse(values)

    const searhParams = new URLSearchParams({
        ...(q && { q: q.trim() }),
        ...(publisher && { publisher: publisher.trim() }),
        ...(category && { category }),
        ...(author && { author }),
    })
    redirect(`books/?${searhParams.toString()}`)
}

interface BookFilterSidebarProps {
    defaultValues: BookFilterValues
}

const BookFilterSlidebar = async ({ defaultValues }: BookFilterSidebarProps) => {

    const distinctAuthor = (await prisma.book.findMany({
        where: { approved: true },
        select: { author: true },
        distinct: ["author"]
    }).then(authors =>
        authors.map(({ author }) => author).filter(Boolean)
    )) as string[]

        ;
    return (
        <aside className="md:w-[260px] p-4 sticky top-0 h-fit bg-background border rounded-lg z-10">
            <form action={filterBooks} key={JSON.stringify(defaultValues)}>
                <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="q">Search</Label>
                        <Input id="q" name="q" placeholder="Title, etc." defaultValue={defaultValues.q} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="publisher">Publisher</Label>
                        <Input id="publisher" name="publisher" placeholder="Publisher" defaultValue={defaultValues.publisher} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="category">Category</Label>
                        <Select id="category" name="category" defaultValue={defaultValues.category || ""}>
                            <option value="">All categories</option>
                            {
                                bookCategories.map(category => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))
                            }
                        </Select>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Label htmlFor="author">Author</Label>
                        <Select id="author" name="author" defaultValue={defaultValues.author || ""}>
                            <option value="">All Authors</option>
                            {
                                distinctAuthor.map(author => (
                                    <option key={author} value={author}>
                                        {author}
                                    </option>
                                ))
                            }
                        </Select>
                        <FormSubmitButton className="w-full">
                            Filter Books
                        </FormSubmitButton>
                        <Button asChild className="w-full bg-green-600 hover:bg-green-900" >
                            <Link href="/books/new">
                                Create New Book
                            </Link>
                        </Button>
                    </div>
                </div>


            </form>
        </aside>
    )
}

export default BookFilterSlidebar