// import Profile from '@/assets/profile.png';
import PercentageToStars from "@/components/PercentageToStars"
import Image from 'next/image';



export default function CardReview(review: string, createdAt: Date, imgSrc: string) {
    return <div
        className="swiper-slide group bg-white border border-solid h-auto border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide-active:border-indigo-600">
        <div
            className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
            <PercentageToStars
                rating={parseInt("25")}
            />
        </div>
        <p
            className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800">
            {review}
        </p>
        <div className="flex items-center gap-5">
            <Image src={imgSrc} alt="avatar" />
            <div className="grid gap-1">
                <h5
                    className="text-gray-900 font-medium transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                    createdAt</h5>
                <span className="text-sm leading-6 text-gray-500">CEO </span>
            </div>
        </div>
    </div>
}