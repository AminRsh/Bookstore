
import Image from 'next/image'
import { Card,} from './ui/card'
import books from "@/lib/book-database"
import PercentageToStars from './PercentageToStars';
import coverImg from "@/assets/Unsplash.svg"


interface bookProps {
    id: number,
    Image: string,
    Image_URL: string,
    Title: string,
    Author: string,
    Rating: string,
    Category: string
}


const BookCard = () => {
    const shuffledBooks = books.sort(() => Math.random() - 0.5);
    const randomBooks = shuffledBooks.slice(0, 20);
    
    return (
        <>
            {
                randomBooks.map((book: bookProps) => {
                    return (
                        <Card className="xl:max-w-[400px] py-4 px-8 shadow-lg group transform transition duration-500 hover:scale-[1.2] hover:z-50" key={book.id}>
                            <div className="flex justify-start items-center space-x-8">
                                <div className="hidden sm:block w-[85px] h-[125px]">
                                    <Image 
                                    src={book.Image_URL || coverImg} 
                                    alt={book.Title} 
                                    width={85} 
                                    height={125}
                                    className="object-cover h-full transform transition duration-500 hover:brightness-125 hover:scale-110"
                                    />
                                </div>
                                <div className="flex flex-col items-start space-y-[5px] sm:max-w-[140px]">
                                    <h2 className="text-md font-semibold max-w-[180px] truncate">{book.Title}</h2>
                                    <span className="text-xs text-gray-500">Author: <span className="text-black">{book.Author}</span></span>
                                    <span className="text-xs text-gray-500">Price: <span className="text-black">{book.Rating} $</span></span>
                                    <span className="">
                                        <PercentageToStars
                                            rating={parseInt(book.Rating)} // Use Rating instead of Price
                                        />
                                    </span>
                                </div>
                            </div>
                        </Card>
                    );
                })
            }
        </>
    );
};


export default BookCard