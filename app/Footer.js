import React from 'react'
import Image from 'next/image'
import img from "../public/logo-bg.png"
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { LuStickyNote } from "react-icons/lu";

const Footer = () => {
    return (
        <div className="relative w-full mt-10 px-14 py-20 " >
            <div className="w-full bg-[#111111] text-white flex justify-center items-center flex-col rounded-2xl">
                <div className="pt-10">
                    <Image src={img} />
                </div>
                <div className="flex justify-center items-center gap-44 py-24">
                    <div className="flex justify-center items-center flex-col">
                        <span className="flex justify-center items-center gap-5"> <span><FiSmartphone /></span> Contact nums.</span>
                        <span className="font-bold">+91 0000000000</span>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <span className="flex justify-center items-center gap-5"> <span><AiOutlineMail /></span> Gmail</span>
                        <span className="font-bold">demo@gmail.com</span>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <span className="flex justify-center items-center gap-5"> <span><IoLocationSharp /></span> Addres</span>
                        <span className="font-bold">Mumbai , India</span>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <span className="flex justify-center items-center gap-5"> <span><LuStickyNote /></span> Leave a request</span>
                        <span className="font-bold">Leave a request</span>
                    </div>
                </div>

                <div className="py-10">
                    <p>We workout throughout the world</p>
                </div>
            </div>
        </div>
    )
}

export default Footer