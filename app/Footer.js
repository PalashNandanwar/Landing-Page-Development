import React from 'react'
import Image from 'next/image'
import img from "../public/logo-bg.png"
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { LuStickyNote } from "react-icons/lu";

const Footer = () => {
    return (
        <div className="relative w-full mt-10 px-5 md:px-14 py-10 md:py-20">
            <div className="w-full bg-[#111111] text-white flex justify-center items-center flex-col rounded-2xl">
                <div className="pt-10">
                    <Image src={img} alt="Logo" />
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 lg:gap-44 py-10 md:py-24">
                    <div className="flex justify-center items-center flex-col text-center">
                        <span className="flex justify-center items-center gap-2 md:gap-5">
                            <FiSmartphone /> Contact nums.
                        </span>
                        <span className="font-bold">+91 0000000000</span>
                    </div>
                    <div className="flex justify-center items-center flex-col text-center">
                        <span className="flex justify-center items-center gap-2 md:gap-5">
                            <AiOutlineMail /> Gmail
                        </span>
                        <span className="font-bold">demo@gmail.com</span>
                    </div>
                    <div className="flex justify-center items-center flex-col text-center">
                        <span className="flex justify-center items-center gap-2 md:gap-5">
                            <IoLocationSharp /> Address
                        </span>
                        <span className="font-bold">Mumbai, India</span>
                    </div>
                    <div className="flex justify-center items-center flex-col text-center">
                        <span className="flex justify-center items-center gap-2 md:gap-5">
                            <LuStickyNote /> Leave a request
                        </span>
                        <span className="font-bold">Leave a request</span>
                    </div>
                </div>
                <div className="py-5 md:py-10">
                    <p className="text-center">We work out throughout the world</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
