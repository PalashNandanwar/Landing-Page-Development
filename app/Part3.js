import React from 'react'
import img1 from "../public/image 10.png"
// import img2 from "../public/coding-language.svg"
// import img3 from "../public/graphic-design.svg"
// import img4 from "../public/hosting 1.svg"
// import img5 from "../public/planing.svg"
// import img6 from "../public/security.svg"
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const Part3 = () => {
    return (
        <div className="relative w-full h-full px-5 md:px-14 py-12">
            <div className="border-t-2 border-b-2 py-10 md:py-20 px-2 md:px-5 flex flex-wrap justify-around items-center gap-10">
                {[...Array(6)].map((_, index) => (
                    <span key={index} className='flex flex-col justify-center items-center'>
                        <Image src={img1} alt={`Image ${index + 1}`} />
                    </span>
                ))}
            </div>

            <div className="px-2 md:px-5 py-10 flex flex-col md:flex-row justify-between gap-10 md:gap-5">
                <div className="w-full md:w-[40%]">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10">
                        Full development cycle
                    </h1>
                    <span>We use proven technologies </span>

                    <div className="mt-6 md:mt-10">
                        <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-5">Web</h1>
                        <p className="text-[13px] md:text-[15px]">PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js / Next / MySQL / Laravel / GO lang / django / Python</p>
                    </div>
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-5">Mobile</h1>
                        <p className="text-[13px] md:text-[15px]">Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation </p>
                    </div>
                </div>
                <div className="w-full md:w-[37%] flex flex-col gap-4 md:gap-[25px]">
                    {[
                        "iOS development",
                        "Android development",
                        "Web development",
                        "UI/UX development",
                        "Testing",
                        "Launch",
                        "IT Consulting"
                    ].map((text, index) => (
                        <span key={index} className="flex flex-row items-center gap-3 md:gap-5 cursor-pointer hover:font-bold">
                            {text} <IoIosArrowForward />
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Part3;
