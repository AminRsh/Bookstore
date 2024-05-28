const Page = () => {
    return (
        <div className="w-full md:w-[85%] mx-auto py-[60px] px-[50px] bg-slate-200 rounded-lg border-gray-500 my-[80px]">
            <p className="text-sm sm:text-lg mb-8">
                Our bookstore, Backstage Treasures, aims to offer a comprehensive online
                platform for users to explore, purchase, and manage their reading
                preferences. Here is a breakdown of the key functionalities and features
                based on the information provided:
            </p>

            <div className="flex flex-col items-center">
                <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-8">
                    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                        <div className="p-6">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                User Registration and Account Management
                            </h5>
                            <ul className="list-disc pl-[35px] mt-6">
                                <li className="font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    {" "}
                                    User Accounts: Users can register and create personal accounts
                                    to track their activities within the bookstore
                                </li>
                                <li className="font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    {" "}
                                    User Accounts: Users can register and create personal accounts
                                    to track their activities within the bookstore
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                        <div className="p-6">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Book Catalog and Search Functionality
                            </h5>
                            <ul className="list-disc pl-[35px] mt-6">
                                <li className="font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    Diverse Categories: The bookstore offers a wide range of books
                                    across various genres such as story, drama, romance, history,
                                    adventures, and more.
                                </li>
                                <li className="font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    {" "}
                                    Search Options: Users can search for books by author, category,
                                    and publisher, enhancing the ease of finding specific titles or
                                    exploring new interests.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                        <div className="p-6">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Additional Features
                            </h5>
                            <ul className="list-disc pl-[35px] mt-6">
                                <li className="font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    Reviews and Ratings: Users have the opportunity to leave reviews
                                    and rate books, contributing to a community-driven
                                    recommendation system
                                </li>
                                <li className="font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    Payment Processing: Secure payment processing ensures a smooth
                                    transaction experience for users completing their purchases.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                        <div className="p-6">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Purchase and Checkout Process
                            </h5>
                            <ul className="list-disc pl-[35px] mt-6">
                                <li className="font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    Ordering and Checkout: Users can place orders for books and
                                    proceed through a checkout process to complete their purchases.
                                </li>
                                <li className="font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    Order History: Each user&apos;s account maintains a record of
                                    past orders, providing a convenient way to revisit previous
                                    purchases.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                        <div className="p-6">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Technical Implementation
                            </h5>
                            <ul className="list-disc pl-[35px] mt-6">
                                <li className="font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    The bookstore could be developed as a web application, leveraging technologies suitable for handling e-commerce functionalities, user authentication, and database management for storing book details, user profiles, and transaction records.
                                </li>
                                <li className="font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    Special Focus Areas: The bookstore emphasizes resources in higher education, management, and engineering, catering to a niche audience seeking specialized knowledge.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Page;
