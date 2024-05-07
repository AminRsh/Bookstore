"use client"
import { useState, useEffect } from 'react';
import { Button } from "./button";
import { useParams } from "next/navigation";
import { Book } from "@prisma/client";
import { toast } from "react-toastify";
import { useUser } from '@clerk/clerk-react';
import { useRouter } from 'next/navigation'

interface FavoriteButtonProps {
    book: Book;
}

export default function FavoriteButton({ book } :FavoriteButtonProps)  {

    const { slug } = useParams<{ slug: string }>()
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const { user } = useUser()
    const router = useRouter()

    const handleFavoriteToggle = () => {
        if (user) {
            if (slug && book ) {
                const key = `favoriteBook_${user.id}`

                const favoritesFromStorage = JSON.parse(localStorage.getItem(key) || '[]');
                const isAlreadyFavorite = favoritesFromStorage.some((fav: Book) => fav?.slug === slug);
                let updatedFavorites;
        
                if (isAlreadyFavorite) {
                    updatedFavorites = favoritesFromStorage.filter((fav: Book) => fav?.slug !== slug);
                } else {
                    updatedFavorites = [...favoritesFromStorage, book];
                }
                
                localStorage.setItem(key, JSON.stringify(updatedFavorites));
                setIsFavorite(!isAlreadyFavorite);
        
                toast(`${isAlreadyFavorite ? "Your Favorite Book Removed" : "Your Favorite Book Added"}`, {
                    position: "bottom-right",
                    autoClose: 2900,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } else {
            router.push("/sign-in")
        }
};

    return (
        <>
            <Button
                variant="destructive"
                className="bg-transparent text-black rounded-none border-2 border-black"
                size="lg"
                onClick={handleFavoriteToggle}
            > {isFavorite ? 'Remove from favorite' : 'Add to favorite'}
            </Button>
        </>
    )
}
