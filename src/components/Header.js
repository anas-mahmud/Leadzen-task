import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <section className="bg-zinc-200 text-gray-900">
                <div className="container flex flex-col justify-center py-5 px-28 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Effective User
                            <span className="text-amber-400"> Information</span> Management
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Websites collect user information such as name, email, address, and phone number through forms. This data is used for account creation, purchases and marketing.</p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link className="px-8 py-3 text-lg font-semibold rounded bg-amber-400 text-gray-900">Suspendisse</Link>
                            <Link className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Malesuada</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://img.freepik.com/free-vector/people-search-concept-illustration_114360-2656.jpg?w=2000" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;