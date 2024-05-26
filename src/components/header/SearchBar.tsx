"use client"
import { Search } from "lucide-react"
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";


const SearchBar = () => {
    const router = useRouter();

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        const query = (event.target as HTMLFormElement).search.value.trim();

        if (query) {
            router.push(`/books/?q=${encodeURIComponent(query)}`);
        }
    };
    return (

        <form onSubmit={handleSearch} className=" text-gray-600 focus-within:text-gray-400">
            <div className="relative flex justify-center items-center">
                <span className="absolute right-[12%] md:right-[24%] flex items-center">
                    <button type="submit"  className="p-1 focus:outline-none focus:shadow-outline">
                        <Search  />
                    </button>
                </span>
                
                <Input
                    type="search"
                    name="search"
                    className="md:w-[60%] w-full mr-[20px] py-[6px] md:py-[12px] px-6 text-sm text-black bg-[#F6F6F6] rounded-full focus:outline-none focus:bg-slate-200 focus:text-black"
                    placeholder="Search Books"
                    autoComplete="off"
                    
                />
            </div>

        </form>)

}

export default SearchBar