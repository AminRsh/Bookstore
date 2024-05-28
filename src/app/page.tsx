import MainImg from '@/assets/main-page.png'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Image1 from '@/assets/categoryImg1.png';
import Image2 from '@/assets/categoryImg2.png';
import Image3 from '@/assets/categoryImg3.png';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import BookCard from '@/components/BookCard';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="mt-[30px] ">
      <div className="grid md:grid-cols-2 gap-0 pb-4">
        <div
          className="relative flex flex-col justify-center px-[40px] py-12 lg:py-auto space-y-8"
          style={{ backgroundImage: 'linear-gradient(to right, #F8E4C1, #ffffff 20%)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white " style={{ width: '10%', zIndex: -1 }}></div>
          <h1 className="font-bold text-[36px] text-[#393280]">Backstage Treasures</h1>
          <p className="text-[#393280] leading-loose">Uncover Hidden Gems at Backstage Treasures</p>
          <div className="">
            <Button variant="outline" asChild>
              <Link href="/more">
                READ MORE  <MdOutlineArrowRightAlt size={20} />
              </Link>
            </Button>
          </div>
        </div>
        <div className="w-full">
          <Image
            src={MainImg}
            width={713}
            height={657}
            className="bg-cover w-full"
            alt='Main'
          />
        </div>
      </div>
      <div className="mx-8 md:my-[70px] md:mx-[50px]">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="flex flex-col justify-center space-y-2">
            <div className="flex items-center space-x-2 ">
              <hr className="w-[18px] border-red-600" />
              <span className="text-red-600 text-sm ">Categories</span>
            </div>
            <h2 className="text-[#393280] font-bold text-[20] sm:text-[38px]">Explore Our Top Categories</h2>
          </div>
          <div className="mt-[10px]">
            <p className="">Welcome to Backstage Treasures, your gateway to a world of hidden literary gems. Our bookstore offers a curated selection of unique and rare books, catering to avid readers and collectors alike. From timeless classics to contemporary masterpieces, we pride ourselves on providing an exceptional browsing experience. Whether you are hunting for a specific title or discovering something new, Backstage Treasures is the perfect destination. Explore our shelves and uncover the stories that await. Your next literary adventure begins here</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 my-[50px]">
          <div className="flex flex-col text-center space-y-4 items-center justify-center">
            <Image
              src={Image1}
              width={430}
              height={250}
              alt='Higher Education'
              className='rounded-md sm:max-md:w-full hover:opacity-85 max-width: 100%;'
            />
            <h3 className="text-[#393280] font-semibold text-lg">Higher Education</h3>
            <p className="text-[#393280] text-sm">Comprehensive resources for advanced learning, academic success, and career preparation in various disciplines</p>
          </div>
          <div className="flex flex-col text-center space-y-4 items-center justify-center">
            <Image
              src={Image2}
              width={430}
              height={250}
              alt='Managemet Books'
              className='rounded-md sm:max-md:w-full hover:opacity-85 max-width: 100%;'
            />
            <h3 className="text-[#393280] font-semibold text-lg">Managemet Books</h3>
            <p className="text-[#393280] text-sm">Essential guides on leadership, strategy, and organizational skills for effective business management</p>
          </div>
          <div className="flex flex-col text-center space-y-4 items-center justify-center">
            <Image
              src={Image3}
              width={430}
              height={250}
              alt='Engineering Books'
              className='rounded-md sm:max-md:w-full hover:opacity-85 max-width: 100%;'
            />
            <h3 className="text-[#393280] font-semibold text-lg">Engineering Books</h3>
            <p className="text-[#393280] text-sm">Technical manuals and innovative resources for aspiring and professional engineers across all fields</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Button variant="outline" asChild>
            <Link href="/more">
              READ MORE  <MdOutlineArrowRightAlt size={20} />
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid gap-4 2xl:grid-cols-4 xl:mx-16 xl:px-8 xl:grid-cols-3 sm:grid-cols-2 md:mx-4 sm:mx-2 mx-16 my-8">
          <BookCard />
        </div>
      </div>

    </main>
  );
}

