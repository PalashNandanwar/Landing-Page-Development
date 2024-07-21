import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

const Part5 = () => {
    return (
        <div className="w-full flex  bg-gradient-to-r from-yellow-400 to-green-400 px-16 py-24 text-white gap-20">
            <div className="w-1/2  ">
                <h1 className="w-2/3 text-5xl font-bold">Let's discuss Your project</h1>
                <p className="py-10 w-3/4">Let's figure out how to create an effective application, it's cost and terms of its development</p>
            </div>
            <div className='w-1/2 '>
                <div className='w-full grid grid-cols-2 col-span-2 gap-6 flex items-center justify-end'>
                    <div>
                        <label className=' text-white'> Full Name :- </label>
                        <Input value="My Name" className="text-black mt-3 border-none border-b-2 border-gray-300 focus:border-b-2 focus:border-gray-500 focus:outline-none" />
                    </div>
                    <div>
                        <label className=' text-white'> Phone number :- </label>
                        <Input value="+91 0000000000" className="text-black mt-3 border-none border-b-2 border-gray-300 focus:border-b-2 focus:border-gray-500 focus:outline-none" />
                    </div>
                    <div>
                        <label className=' text-white'> Bussiness Name :- </label>
                        <Input value="ABC Technolodgies PVT LTD" className="text-black mt-3 border-none border-b-2 border-gray-300 focus:border-b-2 focus:border-gray-500 focus:outline-none" />
                    </div>
                    <div>
                        <label className=' text-white'> Bussiness Mail :- </label>
                        <Input value="demoaccount.gmail.com" className=" text-black mt-3 border-none border-b-2 border-gray-300 focus:border-b-2 focus:border-gray-500 focus:outline-none" type="email" />
                    </div>
                    <div className=" align-baseline">
                        <Button className=' bg-yellow-300' >Discuss the project</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Part5