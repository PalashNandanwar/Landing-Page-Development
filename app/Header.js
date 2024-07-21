import React from 'react'
import Image from 'next/image'
import img from "../public/logo.png"
// import { Mail, Smartphone } from 'lucide'
import { FiSmartphone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

const Header = () => {
    return (
        <>
            <div className='py-14'>
                <div className='w-full h-auto bg-[#ffffff] rounded-lg flex flex-col md:flex-row justify-between items-center lg:py-5 px-5 md:px-10'>
                    <div className='w-full md:w-1/2 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0'>
                        <div className='mb-4 md:mb-0'>
                            <Image src={img} alt="Logo" />
                        </div>
                        <div className='flex flex-wrap justify-center items-center gap-3 md:gap-5'>
                            <span className='text-[16px] capitalize'>services</span>
                            <span className='text-[16px] capitalize'>media</span>
                            <span className='text-[16px] capitalize'>cases</span>
                            <span className='text-[16px] uppercase'>faq</span>
                            <span className='text-[16px] capitalize'>contacts</span>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-3 md:gap-5 mt-4 md:mt-0'>
                        <span className='flex gap-3 justify-center items-center text-[#80a948]'>
                            <FiSmartphone /> +91 0000000000
                        </span>
                        <span className='flex gap-3 justify-center items-center text-[#80a948]'>
                            <CiMail /> demo@gmail.com
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
