'use client'
import Link from 'next/link';
import React, { useContext, useState } from 'react'// form page
import { FiUser } from "react-icons/fi";
import { getDatabase, set, ref } from "firebase/database";
import { app } from '../Firebaseconfig/Firebaseconfig';
import Swal from 'sweetalert2'
// import { HeaderContext } from '../context/ContextManege';
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
export default function page() {
  let [uhid,setuhid]=useState(0)
  const dataBase = getDatabase(app);
  let saveFromData = (e) => {
    e.preventDefault();

    //check last token
    const lastdata = localStorage.getItem('last-patient');

    const currentDate = new Date();
    // console.log('first', );
    let newToken;
    if(lastdata){
      const {date, token} = JSON.parse(lastdata);
      // console.log(date, date == new Date(), lastdata);

      newToken = (date == currentDate.getDate()) ? token + 1 : 1;
    }

    if(!lastdata) newToken = 1;
    // return;

   
    let patient_name = e.target.patient_name.value;
    let guardian_name = e.target.guardian_name.value
    let phone_number=e.target.phone_number.value
    let address=e.target.address.value
    let gender=e.target.gender.value
    // let currentDate = new Date()
    let age=e.target.age.value
    let obj = {
      guardian_name,
      patient_name,
      phone_number,
      address,
      age,
      gender,
      uhid:uhid,
      date: currentDate.getDate() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getFullYear(),
      expireDate: (currentDate.getDate()+7) + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getFullYear()
    }
    let patienId = Date.now()
    set(ref(dataBase, 'patient/' + patienId), obj);
    e.target.reset();
    //update last token number in local storage
    //gh pages
    localStorage.setItem('last-patient', JSON.stringify({date: currentDate.getDate(), token: newToken}));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Your token  no ${newToken}`,
      showConfirmButton: false,
      timer: 3000
    });
    // console.log(obj)
    setTimeout(() => {
      window.location.href = '/Doctorpaper';
    }, 3000);
  }
  // let [header, setheader] = useContext(HeaderContext)
  return (

    <>
      <section className=' m-auto bg-white  '>
        <h1 className='text-center text-4xl p-5 text-[black]'>USER NAME</h1>


        <form className="container mx-auto px-2 py-1 text-black" onSubmit={saveFromData}>
       
          {/* Dr Name */}
        <div className="grid md:grid-cols-2 md:gap-6 mb-6">
        <div className='border-b-2 border-[#a09d9d] '> 
          <select className='w-[100%] text-[#a09d9d] h-[60px]'>
            <option>Dr Name</option>
            <option>Mrs NeeshuKumar</option>
            <option>Mrs Ravi Rajput</option>
          </select>
       </div>
        <div className='border-b-2 border-[#a09d9d] '>
        <select className='w-[100%] text-[15px] text-[#a09d9d] h-[60px]'>
            <option>Department</option>
            <option>Mrs NeeshuKumar</option>
            <option>Mrs Ravi Rajput</option>
          </select>

        </div>
        </div>
 {/* patient name */}
          <div className="grid md:grid-cols-2 md:gap-6">           
            <div className="relative z-0 w-full mb-5 group ">
              <input type="text" name="patient_name" id="patient_name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Patient Name</label>
            </div>
            {/* guardian name */}
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="guardian_name" id="guardian_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Guardian Name</label>
            </div>
          </div>
          {/* phone number`` */}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input type="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone_number" id="phone_number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="address" id="address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address </label>
            </div>
          </div>
          {/* age / sex */}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input type="date" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="age" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="gender" id="sex" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender </label>
            </div>
          </div>
          {/* amount token */}

          <button type="submit" onClick={()=>setuhid(uhid+1)} className=" bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white" ><div>book your Appoenment</div></button>


        </form>

      </section>
    </>
  )
}
//     <Link href='/Doctorpaper'></Link>