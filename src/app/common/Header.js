'use client'
import React from 'react'
import { RiMenuFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
   <>
   <header className='font-sans border-b-[1px] shadow-sm'>
    <ul className='container m-auto flex justify-between items-center py-2 '>
        <li className='flex items-center gap-1 border'>
            <img src='https://clipart-library.com/image_gallery/n1163695.jpg' className='h-[50px] rounded-lg'/>
            <p className='uppercase font-[700] text-[#575454]'>book my doctor</p>
        </li>
        <li className='md:hidden'>
       
        </li>
        <li className='border w-[50%] h-[40px] hidden md:block'>
            <input type='text' className='border rounded-md w-[100%] h-[100%] placeholder:ps-2' placeholder='Search...' />
        </li>
        <li className='md:flex  justify-center items-center gap-4 text-[16px] border hidden '>
            <div className='text-[#474646]'><button>Sign In</button></div>
            <div className='rounded-md p-2 bg-[black] text-white'>  <button>Login In</button></div>
                  
        </li>
        <li className='md:hidden flex gap-[50px]'>
        <CiSearch />

        <RiMenuFill />

        </li>
    </ul>
   </header>
   </>
  )
}
