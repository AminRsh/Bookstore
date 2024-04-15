import { Book } from "@prisma/client";
import Image from "next/image";
import bookLogoPlaceholder from "@/assets/Unsplash.svg";
import { BookOpenCheck, Clock, Languages, Layers3, Receipt } from "lucide-react";
import { formatMoney, relativeDate } from "@/lib/utils";
import Badge from "./Badge";

interface BookListItemProps {
    book: Book
}

export default function BookListItem({ book: {
    title, bookCoverImg, publisher, author, category, language, price, createdAt
} }: BookListItemProps) {
    return <article className="flex gap-8 border rounded-lg p-5 hover:bg-muted/60 transform transition duration-500 hover:scale-105 hover:z-50">
        <div className="w-[120px] h-[170px]">
            <Image
                src={bookCoverImg || bookLogoPlaceholder}
                alt={`${title} logo`}
                width={120}
                height={170}
                className="rounded-lg object-cover h-full transform transition duration-500 hover:brightness-125 hover:scale-110"
            />
        </div>

        <div className="flex-grow space-y-3">
            <div className="">
                <h2 className="text-xl font-medium">{title}</h2>
                <p className="text-muted-foreground">{author}</p>
            </div>
            <div className="text-muted-foreground">
                <p className="flex items-center gap-1.5 sm:hidden">
                    <Layers3 size={16} className="shrink-0" />
                    {category || "Unknown"}
                </p>
                <p className="flex items-center gap-1.5">
                    <BookOpenCheck size={16} className="shrink-0" />
                    {publisher || "Unknown"}
                </p>
                <p className="flex items-center gap-1.5">
                    <Languages size={16} className="shrink-0" />
                    {language || "English"}
                </p>
                <p className="flex items-center gap-1.5">
                    <Receipt size={16} className="shrink-0" />
                    {formatMoney(price) || "--"}
                </p>
                <p className="flex items-center gap-1.5 sm:hidden">
                    <Clock size={16} className="shrink-0" />
                    {relativeDate(createdAt)}
                </p>
            </div>
        </div>
        <div className="hidden sm:flex flex-col shrink-0 items-end justify-between">
            <Badge>{category}</Badge>
            <span className="flex items-center gap-1.5 text-muted-foreground">
                <Clock size={16} />
                {relativeDate(createdAt)}
            </span>
        </div>
    </article>
}