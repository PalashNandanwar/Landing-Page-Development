import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

const Part5 = () => {
    return (
        <div className="w-full flex flex-col md:flex-row bg-gradient-to-r from-yellow-400 to-green-400 px-4 md:px-16 py-12 md:py-24 text-white gap-10 md:gap-20">
            <div className="w-full md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-bold">Let's discuss Your project</h1>
                <p className="py-5 md:py-10 text-lg md:text-base">Let's figure out how to create an effective application, its cost, and terms of its development</p>
            </div>
            <div className="w-full md:w-1/2">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className='text-white'>Full Name</label>
                        <Input className="mt-3 text-black border-none border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none" />
                    </div>
                    <div>
                        <label className='text-white'>Phone number</label>
                        <Input className="mt-3 text-black border-none border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none" />
                    </div>
                    <div>
                        <label className='text-white'>Business Name</label>
                        <Input className="mt-3 text-black border-none border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none" />
                    </div>
                    <div>
                        <label className='text-white'>Business Mail</label>
                        <Input type="email" className="mt-3 text-black border-none border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none" />
                    </div>
                    <div className="md:col-span-2">
                        <Button className="w-full md:w-auto bg-yellow-300 mt-6">Discuss the project</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Part5
