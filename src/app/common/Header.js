'use client'
import React from 'react'

export default function Header() {
  return (
   <>
   <header className=' bg-[#dd6262] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 '>
    <ul className='container m-auto flex justify-between items-center py-2'>
        <li className='flex items-center gap-2'>
            <img src='https://clipart-library.com/image_gallery/n1163695.jpg' className='h-[50px] rounded-lg'/>
            <p className='uppercase'>bmd</p>
        </li>
        <li>
            <input type='text' />
        </li>
        <li>
            <button>Sign In</button>
        </li>
    </ul>
   </header>
   </>
  )
}
