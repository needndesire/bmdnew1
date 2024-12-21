'use client'

import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '../Firebaseconfig/Firebaseconfig';
export default function page() {
    let [patiantData,setPatiantData]=useState({})


    let getPatiant=()=>{
        const db = getDatabase(app);
        const patientData = ref(db, 'patient/' );
        onValue(patientData, (data) => {
           let alldata=(data.val())
           let patientDataArray=[]
        for (let key in alldata){
            patientDataArray.push(alldata[key])
        }
       let patientDataArrayLastElement=patientDataArray[patientDataArray.length-1]
 
    // console.log('patient data =>',patientDataArrayLastElement)
    setPatiantData(patientDataArrayLastElement)
    // console.log(patiantData)
        //    let {address, age,date,patient_name}=patiantData 
    
          });

    }

    useEffect(()=>{
        getPatiant();
       
    },[])

    useEffect(() => {
      
        console.log(patiantData); 
        let {address,expireDate,age,date,patient_name}=patiantData
        console.log(patient_name)
    }, [patiantData]); 

  return (
    <>
     <section>
                <div className='container m-auto py-0 bg-white text-black'>
                    <div className='py-[2px] flex gap-[15%] justify-center items-center border-b-[3px] border-[#949090]'>
                        <figure className='rounded-lg  '><img src='https://static.vecteezy.com/system/resources/thumbnails/000/219/529/small/medical-background.jpg ' className=' rounded-lg h-[30px] md:h-[40px] print:h-[80px] lg:h-[80px] border-black' /></figure>
                        <h1 className='text-center lg:text-[30px] text-[15px] font-bold '>
                            Vital Hospital  Chandpur
                        </h1>
                    </div>
                    <div className='text-center font-[700] text-[15px] py-3'>
                        OPD Prescription
                    </div>
                    {/* Department */}
                    <div className=' py-1 px-2 grid grid-cols-[50%_auto] gap-[1%] border-b-[2px] border-[#949090]'>
                        <div className='grid grid-cols-[30%_auto] '>
                            <p className='text-[14px] font-[700] '>
                                Department
                            </p>
                            <p className=' text-[12px] text-[#949090] font-[500] '>
                                <span >: ORTHOPADIC/SURGICAL DEPARTMent</span>
                            </p>
                        </div>
                        <div className='grid grid-cols-[30%_auto]'>
                            <p className='text-[14px] font-[700]'>
                                Doctor Name
                            </p>
                            <p className=' text-[13px]  text-[black] font-[700]  '>
                                <span >: Dr. Neeshu kumar</span>
                            </p>
                        </div>
                      
                    </div>
                    {/* uhid */}
                    <div className=' px-2 grid grid-cols-[50%_auto] gap-[1%] '>
                        <div className='grid grid-cols-[30%_auto]'>
                            <p className='text-[14px] font-[700]'>
                               UHID
                            </p>
                            <p className=' text-[12px] text-[#949090] font-[500]  '>
                                <span >: {patiantData.uhid}</span>
                            </p>
                        </div>
                        <div className='grid grid-cols-[30%_auto]'>
                            <p className='text-[14px] font-[700]'>
                                OPD NO
                            </p>
                            <p className=' text-[13px] text-[#949090]  font-[700] '>
                                <span >: 357</span>
                            </p>
                        </div>
                      
                    </div>
                    
                   
                    {/* patient name */}
                    <div className='  px-2 grid grid-cols-[50%_auto] gap-[1%] '>
                        <div className='grid grid-cols-[30%_auto]'>
                            <p className='text-[14px] font-[700]'>
                               Patiant Name
                            </p>
                            <p className=' text-[12px] text-[#949090] font-[500] '>
                                <span >: {patiantData.patient_name}</span>
                            </p>
                        </div>
                        <div className='grid grid-cols-[30%_auto]'>
                            <p className='text-[14px] font-[700]'>
                                Date/Time
                            </p>
                            <p className=' text-[13px]  text-[#949090]  font-[700] '>
                                <span >: {patiantData.date} / 12:30</span>
                            </p>
                        </div>
                      
                    </div>
                     {/* guardian  name */}
                     <div className='  px-2 grid grid-cols-[50%_auto] gap-[1%] '>
                        <div className='grid grid-cols-[30%_auto]'>
                            <p className='text-[14px] font-[700]'>
                              Guardian Name
                            </p>
                            <p className=' text-[12px] text-[#949090] font-[500] '>
                                <span >: {patiantData.guardian_name}</span>
                            </p>
                        </div>
                        <div className='grid grid-cols-[30%_auto]'>
                            <p className='text-[14px] font-[700]'>
                                Age/Sex
                            </p>
                            <p className=' text-[13px]  text-[#949090]  font-[700] '>
                                <span >: 40 Year  / Male</span>
                            </p>
                        </div>
                      
                    </div>
                    {/* address */}
                    <div className='  px-2 grid grid-cols-[50%_auto] gap-[1%] '>
                        <div className='grid grid-cols-[30%_auto]'>
                            <p className='text-[14px] font-[700]'>
                             
                          address
                            </p>
                            <p className=' text-[12px] text-[#949090] font-[500] '>
                                <span >: { patiantData.address}</span>
                            </p>
                        </div>
                        <div className='grid grid-cols-[30%_auto]'>
                            <p className='text-[14px] font-[700]'>
                                Valid Upto
                            </p>
                            <p className=' text-[13px]  text-[#949090]  font-[700] '>
                                <span >: {patiantData.expireDate} (7 days )</span>
                            </p>
                        </div>
                      
                    </div>
                    {/* Mob.No */}
                    <div className='  px-2 grid grid-cols-[50%_auto] gap-[1%] '>
                        <div className='grid grid-cols-[30%_auto]'>
                            <p className='text-[14px] font-[700]'>
                              Mob. No
                            </p>
                            <p className=' text-[12px] text-[#949090] font-[500] '>
                                <span >: 8445951045</span>
                            </p>
                        </div>
                        <div className='grid grid-cols-[30%_auto]'>
                            <p className='text-[14px] font-[700]'>
                                Token No
                            </p>
                            <p className=' text-[13px]  text-[#949090]  font-[700] '>
                                <span >: 25 </span>
                            </p>
                        </div>                      
                    </div>
                    {/* amount */}
                    <div className=' px-2 grid grid-cols-[50%_auto] gap-[1%] '>
                        <div className='grid grid-cols-[30%_auto]'>
                            <p className='text-[14px] font-[700]'>
                               Amount
                            </p>
                            <p className=' text-[12px] text-[#949090] font-[500] '>
                                <span >: 25</span>
                            </p>
                        </div>
                        <div className='grid grid-cols-[30%_auto]'>
                            <p className='text-[14px] font-[700]'>
                                Receipt
                            </p>
                            <p className=' text-[13px]  text-[#949090]  font-[700] '>
                                <span >:02 </span>
                            </p>
                        </div>
                      
                    </div>
               
                    <div className='border-t-[2px] border-[#949090] mt-2'>
                        <ul className='grid grid-cols-[18%_auto]'>
                            <li className='border-e-[2px] border-[#949090]'>
                                <p className='px-2 py-1 text-xl font-[700] border-b-[2px] border-[#949090]'>
                                    Vitals
                                </p>
                                <p className='px-2 py-0 text-[16px] font-[600] '>
                                    Temp
                                </p>
                                <p className='px-2 py-0 text-[16px] font-[600] '>
                                    BP
                                </p>
                                <p className='px-2 py-0 text-[16px] font-[600] '>
                                    Wt
                                </p>
                                <p className='px-2 py-0 text-[16px] font-[600] '>
                                    Ht
                                </p>
                                <p className='px-2 py-0 text-[16px] font-[600] '>
                                    SPO2
                                </p>
                                <p className='px-2 py-0 text-[16px] font-[600] '>
                                    PR
                                </p>
                                <p className='px-2 py-1 text-[16px] font-[700] mt-3 border-y-[2px] border-[#949090]'>
                                    Drug Allergy
                                </p>
                                <p className='px-2 py-1 text-[16px] font-[700] mt-[100px] border-y-[2px] border-[#949090]'>
                                    Investigation
                                </p>
                                <p className='px-2 pt12 text-[16px] font-[600] '>
                                    RBS
                                </p>
                                <p className='px-2 py-1 text-[16px] font-[700] mt-[100px] border-y-[2px] border-[#949090]'>
                                    Diet Advice
                                </p>
                            </li>
                            <li>
                                <p className='px-6 pt-4 text-[16px] font-[600] '>
                                    RBS :
                                </p>
                                <p className='px-6 mt-[80px] text-[16px] font-[600] '>
                                    Chief Complaints :
                                </p>
                                <p className='px-6 mt-[80px] text-[16px] font-[600] '>
                                    Provisional Diagnosis :
                                </p>
                                <p className='px-6 mt-[30px] text-[16px] font-[600] '>
                                    Advice :
                                </p>
                                <p className='px-6 mt-[200px] text-[16px] font-[600] '>
                                    Note :
                                </p>
                                <p className='px-6 mt-[5px] text-[12px] font-[600] '>
                                    1 - This letter is notvalid for Medico Legal Pirpose.
                                </p>
                                <p className='px-6 mt-[5px] text-[12px] font-[600] '>
                                    2 - Prescription tobeThis letter is notvalid for Medico <br />Legal Pirpose tobeThis letter is notvalid.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-center items-center gap-[5%] border-t-[2px] border-[#949090] text-[10px] py-2'
                    >
                        <p> Chandpur road Bijnor, up-246726</p>
                        <p> Chandpur road Bijnor, up-246726</p>
                        <p> Chandpur road Bijnor, up-246726</p>
                    </div>
                </div>
            </section>
    </>
  )
}
