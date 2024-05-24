
import { Button } from "./button";
import { Book } from "@prisma/client";
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutOrder } from "@/lib/actions/order.actions";


loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Checkout = ({ book, userId }: { book: Book, userId: string }) => {

    useEffect(() => {

        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
            console.log('Order placed! You will receive an email confirmation.');
        }

        if (query.get('canceled')) {
            console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
    }, []);


    const onCheckout = async () => {

        const order = {
            bookTitle: book.title,
            bookId: book.id.toString(),
            price: book.price.toString(),
            userId: userId 
        }
        await CheckoutOrder(order)
    }
    return (
        <form action={onCheckout}>
            <Button
                variant="secondary"
                className="bg-transparent text-black rounded-none border-2 border-black w-60 "
                size="lg">
                Order Now
            </Button>
        </form>
    )
}

export default Checkout