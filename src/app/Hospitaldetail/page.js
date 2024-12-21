'use client'
import Link from 'next/link'
import { FaUserMd } from "react-icons/fa";
// import Slider from './Slider';
// import { useContext } from 'react';


export default function page() {
  
    return (
        <>

            <header className='bg-[rgb(35,47,62)] flex justify-center items-center lg:gap-[15%] xl:gap-[20%] md:gap-[10%] gap-[2px] sticky top-[50px] z-0 '>
                <figure className=' m-2 h-[30] lg:h-[60] flex items-center gap-1 text-white'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRUJefeY1mcZ17Uyy9NmcAd5vhuMTCrD7n_Q&s' className=' lg:w-[100] lg:h-[60] h-[40px] block rounded-md' />
                    <p className='w-[180] hidden lg:block '>Neeshu Kumar Rajput</p>
                </figure>
                <nav className=''>
                    <ul className='flex justify-center gap-3 lg:gap-[50px] lg:text-xl md:text-[16px] text-[12px] text-white font-[500] '>

                        <li>Leb Report</li>
                        <li>Appointment</li>
                        <li>Help-8445951045</li>
                    </ul>
                </nav>
            </header>
            {/* hospital slider */}

            <section>
                <div className='text-center text-xl font-bold'>
                
                {/* <Slider/> */}
                </div>
            </section>


            <section className='text-center'>
            <h1 className='text-center bg-[rgb(44,58,77)] lg:text-2xl md:text-xl text-[13px] py-2 text-white '><button className=''>Our Specialists</button></h1>
            <ul className='container m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 p-1'>
               
                <li>
                <div className='h-[200px]  md:h-[250px] text-black border bg-[#f5f3f3] border-[#c7c7f0] rounded-[4px]'>
                <div className='pt-[10px] '><FaUserMd className='text-center text-red-700 m-auto text-5xl'/></div>
                        <h2 className='text-[20px] font-[700] px-1 pt-[15px]'>
                            Dr. Neeshu Kumar 
                        </h2>
                        <p  className='px-1 lg:py-2  text-[12px] lg:text-[15px] md:text-[13px]'>MBBS, MS</p>
                        <p  className='px-1 text-[10px] lg:text-[15px] md:text-[13px]'>General Surgeon</p>
                        <p  className='px-1 py-1 text-[10px] lg:text-[15px] md:text-[13px]'>समस्त रोगों के 
                            विशेषज्ञ
                        </p>

                      
                        <Link href='/form'>
                         <button type='submit' className=' border block lg:mt-[10px] m-auto text-[12px] lg:text-[14px]  bg-[#2c4cdb] text-white rounded-md lg:h-[30px] sm:h-[35px] h-[35px]  w-[95%] sm:w-[65%]   '>Take Your Appointment</button></Link>
                      
                     
                    </div>
                </li>
                
                <li>
                <div className='h-[200px]  md:h-[250px] text-black border bg-[#f5f3f3] border-[#c7c7f0] rounded-[4px]'>
                <div className='pt-[10px] '><FaUserMd className='text-center text-red-700 m-auto text-5xl'/></div>
                        <h2 className='text-[20px] font-[700] px-1 pt-[15px]'>
                            Dr. Neeshu Kumar 
                        </h2>
                        <p  className='px-1 lg:py-2  text-[12px] lg:text-[15px] md:text-[13px]'>MBBS, MS</p>
                        <p  className='px-1 text-[10px] lg:text-[15px] md:text-[13px]'>General Surgeon</p>
                        <p  className='px-1 py-1 text-[10px] lg:text-[15px] md:text-[13px]'>समस्त रोगों के 
                            विशेषज्ञ
                        </p>

                      
                        <Link href='/form'>
                         <button type='submit' className=' border block lg:mt-[10px] m-auto text-[12px] lg:text-[14px]  bg-[#2c4cdb] text-white rounded-md lg:h-[30px] sm:h-[35px] h-[35px]  w-[95%] sm:w-[65%]   '>Take Your Appointment</button></Link>
                      
                     
                    </div>
                </li>
                
                <li>
                <div className='h-[200px]  md:h-[250px] text-black border bg-[#f5f3f3] border-[#c7c7f0] rounded-[4px]'>
                <div className='pt-[10px] '><FaUserMd className='text-center text-red-700 m-auto text-5xl'/></div>
                        <h2 className='text-[20px] font-[700] px-1 pt-[15px]'>
                            Dr. Neeshu Kumar 
                        </h2>
                        <p  className='px-1 lg:py-2  text-[12px] lg:text-[15px] md:text-[13px]'>MBBS, MS</p>
                        <p  className='px-1 text-[10px] lg:text-[15px] md:text-[13px]'>General Surgeon</p>
                        <p  className='px-1 py-1 text-[10px] lg:text-[15px] md:text-[13px]'>समस्त रोगों के 
                            विशेषज्ञ
                        </p>

                      
                        <Link href='/form'>
                         <button type='submit' className=' border block lg:mt-[10px] m-auto text-[12px] lg:text-[14px]  bg-[#2c4cdb] text-white rounded-md lg:h-[30px] sm:h-[35px] h-[35px]  w-[95%] sm:w-[65%]   '>Take Your Appointment</button></Link>
                      
                     
                    </div>
                </li>
                
                <li>
                <div className='h-[200px]  md:h-[250px] text-black border bg-[#f5f3f3] border-[#c7c7f0] rounded-[4px]'>
                <div className='pt-[10px] '><FaUserMd className='text-center text-red-700 m-auto text-5xl'/></div>
                        <h2 className='text-[20px] font-[700] px-1 pt-[15px]'>
                            Dr. Neeshu Kumar 
                        </h2>
                        <p  className='px-1 lg:py-2  text-[12px] lg:text-[15px] md:text-[13px]'>MBBS, MS</p>
                        <p  className='px-1 text-[10px] lg:text-[15px] md:text-[13px]'>General Surgeon</p>
                        <p  className='px-1 py-1 text-[10px] lg:text-[15px] md:text-[13px]'>समस्त रोगों के 
                            विशेषज्ञ
                        </p>

                      
                        <Link href='/form'>
                         <button type='submit' className=' border block lg:mt-[10px] m-auto text-[12px] lg:text-[14px]  bg-[#2c4cdb] text-white rounded-md lg:h-[30px] sm:h-[35px] h-[35px]  w-[95%] sm:w-[65%]   '>Take Your Appointment</button></Link>
                      
                     
                    </div>
                </li>
                
                <li>
                <div className='h-[200px]  md:h-[250px] text-black border bg-[#f5f3f3] border-[#c7c7f0] rounded-[4px]'>
                <div className='pt-[10px] '><FaUserMd className='text-center text-red-700 m-auto text-5xl'/></div>
                        <h2 className='text-[20px] font-[700] px-1 pt-[15px]'>
                            Dr. Neeshu Kumar 
                        </h2>
                        <p  className='px-1 lg:py-2  text-[12px] lg:text-[15px] md:text-[13px]'>MBBS, MS</p>
                        <p  className='px-1 text-[10px] lg:text-[15px] md:text-[13px]'>General Surgeon</p>
                        <p  className='px-1 py-1 text-[10px] lg:text-[15px] md:text-[13px]'>समस्त रोगों के 
                            विशेषज्ञ
                        </p>

                      
                        <Link href='/form'>
                         <button type='submit' className=' border block lg:mt-[10px] m-auto text-[12px] lg:text-[14px]  bg-[#2c4cdb] text-white rounded-md lg:h-[30px] sm:h-[35px] h-[35px]  w-[95%] sm:w-[65%]   '>Take Your Appointment</button></Link>
                      
                     
                    </div>
                </li>
                
                <li>
                <div className='h-[200px]  md:h-[250px] text-black border bg-[#f5f3f3] border-[#c7c7f0] rounded-[4px]'>
                <div className='pt-[10px] '><FaUserMd className='text-center text-red-700 m-auto text-5xl'/></div>
                        <h2 className='text-[20px] font-[700] px-1 pt-[15px]'>
                            Dr. Neeshu Kumar 
                        </h2>
                        <p  className='px-1 lg:py-2  text-[12px] lg:text-[15px] md:text-[13px]'>MBBS, MS</p>
                        <p  className='px-1 text-[10px] lg:text-[15px] md:text-[13px]'>General Surgeon</p>
                        <p  className='px-1 py-1 text-[10px] lg:text-[15px] md:text-[13px]'>समस्त रोगों के 
                            विशेषज्ञ
                        </p>

                      
                        <Link href='/form'>
                         <button type='submit' className=' border block lg:mt-[10px] m-auto text-[12px] lg:text-[14px]  bg-[#2c4cdb] text-white rounded-md lg:h-[30px] sm:h-[35px] h-[35px]  w-[95%] sm:w-[65%]   '>Take Your Appointment</button></Link>
                      
                     
                    </div>
                </li>
                
                <li>
                <div className='h-[200px]  md:h-[250px] text-black border bg-[#f5f3f3] border-[#c7c7f0] rounded-[4px]'>
                <div className='pt-[10px] '><FaUserMd className='text-center text-red-700 m-auto text-5xl'/></div>
                        <h2 className='text-[20px] font-[700] px-1 pt-[15px]'>
                            Dr. Neeshu Kumar 
                        </h2>
                        <p  className='px-1 lg:py-2  text-[12px] lg:text-[15px] md:text-[13px]'>MBBS, MS</p>
                        <p  className='px-1 text-[10px] lg:text-[15px] md:text-[13px]'>General Surgeon</p>
                        <p  className='px-1 py-1 text-[10px] lg:text-[15px] md:text-[13px]'>समस्त रोगों के 
                            विशेषज्ञ
                        </p>

                      
                        <Link href='/form'>
                         <button type='submit' className=' border block lg:mt-[10px] m-auto text-[12px] lg:text-[14px]  bg-[#2c4cdb] text-white rounded-md lg:h-[30px] sm:h-[35px] h-[35px]  w-[95%] sm:w-[65%]   '>Take Your Appointment</button></Link>
                      
                     
                    </div>
                </li>
                
                <li>
                <div className='h-[200px]  md:h-[250px] text-black border bg-[#f5f3f3] border-[#c7c7f0] rounded-[4px]'>
                <div className='pt-[10px] '><FaUserMd className='text-center text-red-700 m-auto text-5xl'/></div>
                        <h2 className='text-[20px] font-[700] px-1 pt-[15px]'>
                            Dr. Neeshu Kumar 
                        </h2>
                        <p  className='px-1 lg:py-2  text-[12px] lg:text-[15px] md:text-[13px]'>MBBS, MS</p>
                        <p  className='px-1 text-[10px] lg:text-[15px] md:text-[13px]'>General Surgeon</p>
                        <p  className='px-1 py-1 text-[10px] lg:text-[15px] md:text-[13px]'>समस्त रोगों के 
                            विशेषज्ञ
                        </p>

                      
                        <Link href='/form'>
                         <button type='submit' className=' border block lg:mt-[10px] m-auto text-[12px] lg:text-[14px]  bg-[#2c4cdb] text-white rounded-md lg:h-[30px] sm:h-[35px] h-[35px]  w-[95%] sm:w-[65%]   '>Take Your Appointment</button></Link>
                      
                     
                    </div>
                </li>
                
                <li>
                <div className='h-[200px]  md:h-[250px] text-black border bg-[#f5f3f3] border-[#c7c7f0] rounded-[4px]'>
                <div className='pt-[10px] '><FaUserMd className='text-center text-red-700 m-auto text-5xl'/></div>
                        <h2 className='text-[20px] font-[700] px-1 pt-[15px]'>
                            Dr. Neeshu Kumar 
                        </h2>
                        <p  className='px-1 lg:py-2  text-[12px] lg:text-[15px] md:text-[13px]'>MBBS, MS</p>
                        <p  className='px-1 text-[10px] lg:text-[15px] md:text-[13px]'>General Surgeon</p>
                        <p  className='px-1 py-1 text-[10px] lg:text-[15px] md:text-[13px]'>समस्त रोगों के 
                            विशेषज्ञ
                        </p>

                      
                        <Link href='/form'>
                         <button type='submit' className=' border block lg:mt-[10px] m-auto text-[12px] lg:text-[14px]  bg-[#2c4cdb] text-white rounded-md lg:h-[30px] sm:h-[35px] h-[35px]  w-[95%] sm:w-[65%]   '>Take Your Appointment</button></Link>
                      
                     
                    </div>
                </li>
                
                <li>
                <div className='h-[200px]  md:h-[250px] text-black border bg-[#f5f3f3] border-[#c7c7f0] rounded-[4px]'>
                <div className='pt-[10px] '><FaUserMd className='text-center text-red-700 m-auto text-5xl'/></div>
                        <h2 className='text-[20px] font-[700] px-1 pt-[15px]'>
                            Dr. Neeshu Kumar 
                        </h2>
                        <p  className='px-1 lg:py-2  text-[12px] lg:text-[15px] md:text-[13px]'>MBBS, MS</p>
                        <p  className='px-1 text-[10px] lg:text-[15px] md:text-[13px]'>General Surgeon</p>
                        <p  className='px-1 py-1 text-[10px] lg:text-[15px] md:text-[13px]'>समस्त रोगों के 
                            विशेषज्ञ
                        </p>

                      
                        <Link href='/form'>
                         <button type='submit' className=' border block lg:mt-[10px] m-auto text-[12px] lg:text-[14px]  bg-[#2c4cdb] text-white rounded-md lg:h-[30px] sm:h-[35px] h-[35px]  w-[95%] sm:w-[65%]   '>Take Your Appointment</button></Link>
                      
                     
                    </div>
                </li>
                
            </ul>
            </section>
            <section className='text-center'>
                about hospital
            </section>
            <section>

            </section>
            <Link href='form'><button>APPOEMENT </button></Link>
        </>
    )
}
