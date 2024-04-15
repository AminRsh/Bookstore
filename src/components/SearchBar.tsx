import { Search } from "lucide-react"


const SearchBar = () => {
    return (

        <div className=" text-gray-600 focus-within:text-gray-400">
            <div className="relative flex justify-center items-center">
                <span className="absolute right-[12%] md:right-[24%] flex items-center">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                        <Search  />
                    </button>
                </span>
                
                <input
                    type="search"
                    name="search"
                    className="md:w-[60%] w-full mr-[20px] py-[6px] md:py-[12px] px-6 text-sm text-white bg-[#F6F6F6] rounded-full focus:outline-none focus:bg-[#bdb9b9] focus:text-white"
                    placeholder="Search Books"
                    autoComplete="off"
                />
            </div>

        </div>)

}

export default SearchBar