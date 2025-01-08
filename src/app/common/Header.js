'use client'
import React, { useState } from 'react'
import { RiMenuFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import Model from '../Model/Model';
import { AiOutlineTeam } from "react-icons/ai";
import SelectCity from './SelectCity';
export default function Header() {
    let [menu, setmenu] = useState(false)
    let [search, setsearch] = useState(false)
    let [selectCity,setselectCity]=useState(false)

    let [showmodel, setshowModel] = useState(false)
    // console.log('search Value',search)
    return (
        <>
            {showmodel && <Model setshowModel={setshowModel} />}
            {/* start side menu */}
            <section className={`h-[100vh] w-[100%] bg-[rgba(0,0,0,.5)] fixed z-[9999] ${menu ? `translate-x-[0%]` : `translate-x-[-100%]`}`}>
                <p className='absolute text-2xl border-2 border-[black] text-black rounded-lg px-2 right-0 m-5' onClick={() => setmenu(!menu)}>&times;</p>
                <div className=' grid grid-cols-[50%_auto] border'>
                    <div>

                    </div>
                    <div className='pt-[50px] flex flex-col gap-1 px-5 h-[100vh] rounded-lg shadow-xl bg-[#b1aeae]'>
                        <div className='text-[#474646] p-2'><button>Sign In</button></div>
                        <div className='rounded-md p-2 bg-[black] text-white' onClick={() => { setshowModel(true), setmenu(!menu) }}>  <button>Login In</button></div>
                    </div>
                </div>
            </section>
            {/* End side menu */}


            {/* Start header heare  */}


            <header className='font-sans border-b-[1px] sticky top-0  shadow-lg bg-[#fdfcfc]'>
                <ul className='container m-auto flex justify-between items-center py-2 px-1'>
                    <Link href='/'>
                        <li className='flex items-center gap-1 cursor-pointer'>
                            <img src='https://clipart-library.com/image_gallery/n1163695.jpg' className='h-[50px] rounded-lg' />
                            <p className='uppercase font-[700] text-[#666464]'>book my doctor</p>
                        </li>
                    </Link>
                
                    <li className=' w-[50%] h-[40px] hidden md:block relative'>
                        <input type='text' className='border rounded-md w-[100%] h-[100%] placeholder:ps-2' placeholder='Search hospital...' />
                        <CiSearch className='absolute top-3 left-[90%]' />
                    </li>
                    <li className='md:flex  justify-center items-center gap-4 text-[16px] hidden '>
                    
                        <div className='text-[#474646] border px-2 py-1 rounded-md text-[13px]' ><button>Select City</button></div>
                        <div className='rounded-md px-2 py-1 bg-[black] text-white' onClick={() => { setshowModel(true) }}>  <button>Login In</button></div>
                    </li>

                    {/* mobile view */}

                
                    <li className='md:hidden flex  gap-[8px] text-[black] items-center'>
                        {/* fix item select city side show */}
                        {/* <SelectCity setselectCity={setselectCity}/> */}
                        {selectCity && <SelectCity setselectCity={setselectCity}/>}
                        <button className='border px-[5px] py-[.5px] rounded-[4px] bg-[#f5f3f3] block text-[#5c5c5c] text-[11px]' onClick={()=>setselectCity(true)}>Select City</button>

                        <CiSearch className={`${search ? `hidden` : `flex`}`} onClick={() => setsearch(!search)} />
                        <AiOutlineTeam className=' text-[20px]' />
                        <RiMenuFill onClick={() => setmenu(!menu)} />

                    </li>



                </ul>
                
                <div className={`h-[50px] gap-1 justify-center md:hidden items-center ${search ? `flex` : `hidden`}`}>
                    <div className=' w-[80%] h-[40px] relative'>
                        <input type='text' className='border rounded-md w-[100%] h-[100%] placeholder:ps-2' placeholder='Search...' />
                        <CiSearch className='absolute top-3 left-[90%]' />

                    </div>
                    {/* bg and text color not taking */}
                    <p className='  text-4xl text-center w-[15%] text-[#555050]' onClick={() => setsearch(!search)}>&times;</p>
                </div>
            </header>
        </>
    )
}
