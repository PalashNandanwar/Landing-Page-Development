"use client";
import React from 'react'
// import { Input } from "@material-tailwind/react";
import { Input } from "@/components/ui/input"

const Card = () => {
    return (
        <div className="border w-full p-5 md:p-10">
            <p className='text-[20px] md:text-[25px] font-bold text-center md:text-left'>
                Leave your Contact and we will call you back within 30 minutes
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 items-end gap-4 mt-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 col-span-1 md:col-span-2 gap-6'>
                    <div>
                        <label className='text-slate-400'> Full Name: </label>
                        <Input value="My Name" className="mt-3 border-none border-b-2 border-gray-300 focus:border-b-2 focus:border-gray-500 focus:outline-none" />
                    </div>
                    <div>
                        <label className='text-slate-400'> Phone number: </label>
                        <Input value="+91 0000000000" className="mt-3 border-none border-b-2 border-gray-300 focus:border-b-2 focus:border-gray-500 focus:outline-none" />
                    </div>
                    <div>
                        <label className='text-slate-400'> Business Name: </label>
                        <Input value="ABC Technologies PVT LTD" className="mt-3 border-none border-b-2 border-gray-300 focus:border-b-2 focus:border-gray-500 focus:outline-none" />
                    </div>
                    <div>
                        <label className='text-slate-400'> Business Mail: </label>
                        <Input value="demoaccount@gmail.com" className="mt-3 border-none border-b-2 border-gray-300 focus:border-b-2 focus:border-gray-500 focus:outline-none" type="email" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center md:justify-start">
                <button className='align-baseline mt-8 px-6 py-3 md:p-5 text-lg md:text-xl font-semibold h-12 md:h-16 rounded-lg bg-[#80a948]'>
                    Get Consultation
                </button>
            </div>
        </div>
    )
}

export default Card;
