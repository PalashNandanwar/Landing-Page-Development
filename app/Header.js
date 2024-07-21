import React from 'react'
import Image from 'next/image'
import img from "../public/logo.png"
// import { Mail, Smartphone } from 'lucide'
import { FiSmartphone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";


const Header = () => {
    return (
        <>
            <div className=' py-10'>
                <div className=' w-full h-[92px] bg-[#ffffff]  rounded-lg flex justify-between items-center'>
                    <div className=' w-1/2 flex justify-between items-center'>
                        <div>
                            <Image src={img} />
                        </div>
                        <div className='flex justify-center items-center gap-5'>
                            <span className=' text-[16px] capitalize'>services</span>
                            <span className=' text-[16px] capitalize'>media</span>
                            <span className=' text-[16px] capitalize'>cases</span>
                            <span className=' text-[16px] uppercase'>faq</span>
                            <span className=' text-[16px] capitalize'>contacts</span>
                        </div>
                    </div>
                    <div className=' flex justify-center items-center px-10 gap-5'>
                        <span className=' flex gap-3 justify-center items-center text-[#80a948]'>
                            <FiSmartphone /> +91 0000000000
                        </span>
                        <span className=' flex gap-3 justify-center items-center text-[#80a948]'>
                            <CiMail /> demo@gmail.com
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header