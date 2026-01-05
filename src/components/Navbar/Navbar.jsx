import React from 'react'
import { HiShoppingBag } from 'react-icons/hi';
import { IoHeartSharp, IoSearch } from "react-icons/io5";
import { TbMenu2 } from 'react-icons/tb';

const Navbar = () => {
  return (
    <header className='bg-white fixed top-0 left-0 right-0 '>
        <nav className='max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center '>
            {/* Logo */}
            <a href='#' className='text-3xl font-bold'>
                Gr<span className='text-orange-500 uppercase'>o</span>cify
            </a>

            {/* Desktop menu */}
            <ul className='md:flex items-center gap-x-15 hidden'>
                <li><a href='#'className='font-semibold tracking-wider text-orange-500'>Home</a></li>
                <li><a href='#'className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About us</a></li>
                <li><a href='#'className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a></li>
                <li><a href='#'className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact us</a></li>
            </ul>

            {/* Nav actions */}
            <div className='flex items-center gap-x-5'>
                {/* Input field */}
                <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden'>
                    <input type='text' name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none '

                        
                    />
                    <button className='bg-gradient-to-b from-orange-400 to-orange-500  text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
                        <IoSearch/>
                    </button>
                </div>
                <a href='#' className='text-zinc-800 text-2xl '>
                    <IoHeartSharp />
                </a>
                <a href='#' className='text-zinc-800 text-2xl'>
                    <HiShoppingBag />
                </a>
                <a href='#' className='text-zinc-800 text-3xl md:hidden'>
                    <TbMenu2 />
                </a>
            </div>


        </nav>
    </header>
  )
}

export default Navbar
