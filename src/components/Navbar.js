import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

const Navbar = () => {
    return (
        <div>
            <nav className="w-full mx-auto px-4 flex justify-end bg-gray-200 py-6 border-b-[1px] border-gray-300">
                <Link to={'/'}><button className='bg-slate-500 px-5 py-3 rounded-md mr-16 flex gap-3 text-white'>
                    <BsArrowLeft className='mt-1' />
                    Back To Home
                </button></Link>
            </nav>
        </div>
    );
};

export default Navbar;