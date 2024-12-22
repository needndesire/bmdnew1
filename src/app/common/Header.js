'use client'
import React, { useState } from 'react'
import { RiMenuFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';

export default function Header() {
    let [menu, setmenu] = useState(false)
    let [search, setsearch] = useState(false)
    console.log('search Value',search)
    return (
        <>
            <section className={`h-[100vh] w-[100%] bg-[rgba(0,0,0,.5)] fixed z-[9999] ${menu ? `translate-x-[0%]` : `translate-x-[-100%]`}`}>
                <p className='absolute text-2xl border rounded-lg px-2 right-0 m-5' onClick={() => setmenu(!menu)}>&times;</p>
                <div className=' grid grid-cols-[50%_auto] border'>
                    <div>

                    </div>
                    <div className='pt-[50px] flex flex-col gap-1 px-5 h-[100vh] bg-[white]'>
                        <div className='text-[#474646] p-2'><button>Sign In</button></div>
                        <div className='rounded-md p-2 bg-[black] text-white'>  <button>Login In</button></div>
                    </div>
                </div>
            </section>
            <header className='font-sans border-b-[1px] sticky top-0  shadow-lg bg-[#fdfcfc]'>
                <ul className='container m-auto flex justify-between items-center py-2 px-1'>
                    <Link href='/'><li className='flex items-center gap-1 cursor-pointer'>
                        <img src='https://clipart-library.com/image_gallery/n1163695.jpg' className='h-[50px] rounded-lg' />
                        <p className='uppercase font-[700] text-[#666464]'>book my doctor</p>
                    </li>
                    </Link>
                    <li className='md:hidden'>

                    </li>
                    <li className=' w-[50%] h-[40px] hidden md:block relative'>
                        <input type='text' className='border rounded-md w-[100%] h-[100%] placeholder:ps-2' placeholder='Search...' />
                        <CiSearch className='absolute top-3 left-[90%]' />
                    </li>
                    <li className='md:flex  justify-center items-center gap-4 text-[16px] hidden '>
                        <div className='text-[#474646]'><button>Sign In</button></div>
                        <div className='rounded-md p-2 bg-[black] text-white'>  <button>Login In</button></div>

                    </li>
                    <li className='md:hidden flex gap-[50px] text-[black]'>
                        <CiSearch className={`${search? `hidden`:`flex` }`} onClick={() => setsearch(!search)} />

                        <RiMenuFill  onClick={() => setmenu(!menu)} />

                    </li>



                </ul>
                <div className={`h-[50px] gap-1 justify-center items-center ${search ? `flex` : `hidden`}`}>
                    <div className=' w-[80%] h-[40px] relative'>
                        <input type='text' className='border rounded-md w-[100%] h-[100%] placeholder:ps-2' placeholder='Search...' />
                        <CiSearch className='absolute top-3 left-[90%]'  />

                    </div>
                    {/* bg and text color not taking */}
                    <p className=' bg-[#d42828] text-4xl text-center w-[20%]' onClick={()=>setsearch(!search)}>&times;</p>
                </div>
            </header>
        </>
    )
}
