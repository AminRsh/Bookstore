"use server"

import { redirect } from 'next/navigation';
import Stripe from 'stripe'
import { handleError } from '../utils';
import prisma from '@/lib/prisma';

interface CheckoutOrderParams {
    bookTitle: string
    bookId: string
    price: string
    userId: string
}

interface CreateOrderParams {
    stripeId: string
    bookId: string
    userId: string
    totalAmount: string
    createdAt: Date
}

interface GetOrdersByUserParams {
    userId: string | null
}

export const CheckoutOrder = async (order: CheckoutOrderParams) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const price = Number(order.price) * 100


    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'cad',
                        unit_amount: price,
                        product_data: {
                            name: order.bookTitle
                        }
                    },
                    quantity: 1,
                },
            ],
            metadata: {
                bookId: order.bookId,
                userId: order.userId
            },
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
        });


        redirect(session.url!)
    } catch (error) {
        throw error
    }
}

export const createOrder = async (order: CreateOrderParams) => {
    try {
        const newOrder = await prisma.order.create({
            data: {
                ...order,
                bookId: Number(order.bookId),
                userId: Number(order.userId),
            }
        })
        // return JSON.parse(JSON.stringify(newOrder))
        return newOrder
    } catch (error) {
        handleError(error)
    }
}




export const getOrdersByUser = async (userId: number) => {
    try {
        const orders = await prisma.order.findMany({
            where: { userId: userId },
            select: {
                createdAt: true,
                stripeId: true,
                totalAmount: true,
                user: {
                    select: {
                        firstName: true,
                        lastName: true,
                    },
                },
                book: {
                    select: {
                        title: true,
                        bookCoverImg: true,
                        price: true
                    },
                },
            },
        });

        return orders;
    } catch (error) {
        handleError(error)
    }
}