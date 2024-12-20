"use client"
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { HeaderContext } from '../context/ContextManege';
import { usePathname } from 'next/navigation';
import Sidemenu from '../Menu/Sidemenu';

export default function Header() {
    let [menu,setmenu]=useState(true)
    let [admin,setadmin]=useState(true)
    let [header, setheader] = useContext(HeaderContext)
    const [ifSearch, setIfSearch] = useState('block');
    const pathname = usePathname();

    console.log('first', pathname)
    useEffect(() => {
        if (pathname === '/Hospitaldetail') setIfSearch('hidden');
    }, [pathname]);

    return (
        <>
            <header className='bg-[rgb(19,25,33)] print:hidden shadow-lg py-1 sticky top-0 z-0'>
                <nav className='px-5 container m-auto flex justify-evenly items-center lg:py-1 ' >
                <FiMenu className='lg:hidden text-blue-600 mx-1 text-2xl'onClick={()=>setmenu(!menu)} />
                    <Link href='/'> <figure className='lg:text-2xl md:text-xl  flex items-center text-blue-600 font-[500] cursor-pointer lg:p-1 py-3'>
                       
                        <p>BOOK MY <span className='text-[#f56127]'> DOCTOR</span></p>
                    </figure>
                    </Link>
                    <div className={`relative w-[40%] lg:block hidden`}>
                        <span className={``}> <CiSearch className='absolute top-[0px] left-1 border-r-2 text-[5px] h-[35px] w-[22px] ' /></span>
                        <input type='text' placeholder='Search Hospital ' className={`ps-[35px]  rounded-md h-[40px] w-[100%]`} />
                    </div>


                    <div className='lg:flex gap-4 hidden'>
                        <div className='text-red-600 font-[700] underline'>
                            HOSPITAL USE
                        </div>
                        <div className='text-red-600 font-[700] underline'>
                            HELP
                        </div>
                    </div>
                    <div className='  lg:flex '>
                        <CiUser className='text-2xl text-orange-600 cursor-pointer'  onClick={() => setadmin(!admin)} />
                    </div>
                </nav>
                <div className={`relative w-[80%]  ${header} lg:hidden block m-auto`}>
                    <span className=''> <CiSearch className='absolute top-[0px] left-1 border-r-2 text-[5px] h-[30px] w-[22px] ' /></span>
                    <input type='text' placeholder='Search Hospital ' className='ps-[35px] rounded-md h-[30px] w-[100%]' />
                </div>
            </header>
            {/* side menu */}
            <section>
                <div className={`bg-[rgba(56,56,55,0.9)] w-[100%]  fixed z-20 ${menu ? `translate-x-[-100%]` : `translate-x-[0%]`}`}>
                    <div className='bg-[#fcfdfc] w-[85%]  h-[110vh] lg:mt-[-53px] mt-[-90px] relative '>
                        <p className={`fixed right-5 top-[-80px] text-[70px] font-bold text-[#8f6fdb] cursor-pointer `} onClick={() => setmenu(!menu)}>&times;</p>
                        <p className='bg-[#788b76] text-white font-[500] p-0 h-[100px] text-center text-[30px] leading-[100px]'>Book My Doctor</p>
                        <ul className='text-[#788b76] p-5 flex flex-col gap-3 text-[30px]'>
                            <li>Hospital use</li>
                            <li>about</li>
                            <li>Help</li>

                            <li>xyz</li>
                        </ul>

                    </div>
                </div>
            </section>
           {/* admin user */}
           <section>
                <div className={`border bg-[rgba(56,56,55,0.9)] w-[100%] top-[-50px] h-[110vh] pt-[10%] z-40 fixed  ${admin ? `translate-x-[-100%]` : `translate-x-[0%]`}`}>
                    <div className='bg-[#fcfdfc] w-[50%] rounded-lg m-auto  h-[50vh] lg:mt-[-53px] relative '>
                        <p className={`fixed right-5 top-[-80px] pt-[10%]  text-[70px] font-bold text-[#8f6fdb] cursor-pointer  rounded-lg `}  onClick={() => setadmin(!admin)}>&times;</p>
                        <p className='bg-[#788b76] text-white font-[500] p-0 h-[100px] text-center text-[30px] leading-[100px] rounded-lg'>Login</p>
                        <ul className='text-[#788b76] p-5 flex flex-col gap-3 text-[30px]'>
                            <li>Login with Google</li>

                          
                        </ul>

                    </div>
                </div>
            </section>

        </>
    )
}
