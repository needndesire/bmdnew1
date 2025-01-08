import React from 'react'
import { RiDeleteBackFill } from "react-icons/ri";

export default function HaveDoctorPaper({ sethaveDoctorPaper }) {
    
    return (
        <>
            <section className={`bg-[rgba(0,0,0,.7)]  h-[100vh] w-full fixed z-10 left-0 top-0 text-[#f7f7f4] `}>
                <div className='bg-[green] py-2 flex '>
                    <RiDeleteBackFill className='ms-[15px]  text-2xl ' onClick={()=> sethaveDoctorPaper(false)} />
                       <p className='ms-[20%]'> Select Your Paitiant Name</p>
                </div>
                <ul className='px-5 py-2'>
                    <li>
                        HALDAUR
                    </li>
                </ul>
            </section>

        </>
    )
}
