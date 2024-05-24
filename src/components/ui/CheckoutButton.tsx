"use client"
import { Book } from "@prisma/client";
import { Button } from "./button"
import { useUser } from "@clerk/clerk-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import Checkout from "./Checkout";

interface CheckoutButtonProps {
    book: Book;
}

const CheckoutButton = ({ book }: CheckoutButtonProps) => {

    const { user } = useUser()
    const userId = user?.publicMetadata.userId as string
    console.log(userId)

    return <>
        <SignedOut>
            <Button
                asChild
                variant="secondary"
                className="bg-transparent text-black rounded-none border-2 border-black w-60 "
                size="lg">
                <Link href="/sign-in">
                    Order Now
                </Link>
            </Button>
        </SignedOut>
        <SignedIn>
            <Checkout book={book} userId={userId} />
        </SignedIn>
    </>


}

export default CheckoutButton