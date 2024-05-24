import { formatMoney } from "@/lib/utils";
import { Book } from "@prisma/client";
import {
    Building2,
    CircleDollarSign,
    BookOpenCheck,
    Languages,
    Code,
    Layers,
    MessageCircleHeart,
} from "lucide-react";
import Image from "next/image";
import Markdown from "./Markdown";
import FavoriteButton from "./ui/FavoriteButton";
import CheckoutButton from "./ui/CheckoutButton";

interface BookPageProps {
    book: Book;
}

const BookPage = ({ book }: BookPageProps) => {
    const {
        title,
        author,
        category,
        description,
        bookCoverImg,
        price,
        publisher,
        isbn,
        language,
        pages,
        rating,
    } = book;

    return (
        <div className="my-10 flex flex-col items-center gap-5 px-3 h-[600px] rounded-xl bg-gray-200">
            <div className="space-y-8 p-8">
                <div className="flex items-center gap-16">
                    <div className="w-[250px] h-[350px]">
                        {bookCoverImg && (
                            <Image
                                src={bookCoverImg}
                                alt={`${title} cover`}
                                width={250}
                                height={400}
                                className="rounded-xl object-cover min-h-[350px]"
                                priority
                            />
                        )}
                    </div>
                    <div className="">
                        <div className="my-8">
                            <h1 className="text-xl font-bold">{title}</h1>
                            <p className="font-semibold">{author}</p>
                        </div>
                        <div className="text-muted-foreground space-y-[5px]">
                            <p className="flex items-center gap-1.5">
                                <Building2 size={16} className="shrink-0" />
                                {category || "--"}
                            </p>
                            <p className="flex items-center gap-1.5">
                                <CircleDollarSign size={16} className="shrink-0" />
                                {formatMoney(price) || "--"}
                            </p>
                            <p className="flex items-center gap-1.5">
                                <BookOpenCheck size={16} className="shrink-0" />
                                {publisher || "--"}
                            </p>
                            <p className="flex items-center gap-1.5">
                                <Code size={16} className="shrink-0" />
                                {isbn || "--"}
                            </p>
                            <p className="flex items-center gap-1.5">
                                <Languages size={16} className="shrink-0" />
                                {language || "--"}
                            </p>
                            <p className="flex items-center gap-1.5">
                                <Layers size={16} className="shrink-0" />
                                {pages || "--"}
                            </p>
                            <p className="flex items-center gap-1.5">
                                <MessageCircleHeart size={16} className="shrink-0" />
                                {rating || "--"}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-[20px] max-w-[900px] max-h-[180px] overflow-y-hidden ">
                    {description && <Markdown>{description}</Markdown>}
                </div>
                <div className="invisible opacity-0 absolute group-hover:flex group-hover:space-x-4 group-hover:top-[0%] group-hover:visible group-hover:opacity-100
                        justify-center items-center inset-0 top-[100%] transition-[top] duration-300 backdrop-blur-sm p-6 z-20">
                    <CheckoutButton book={book} />
                    <FavoriteButton book={book} />
                </div>
            </div>
        </div>
    );
};

export default BookPage;
