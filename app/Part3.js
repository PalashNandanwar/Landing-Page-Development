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
        <div className="relative w-full h-[100%] px-14 py-12 ">
            <div className="border-t-2 border-b-2 py-20 px-5 flex justify-between items-center">
                <span className='flex flex-col justify-center items-center'> <Image src={img1} /></span>
                <span className='flex flex-col justify-center items-center'> <Image src={img1} />  </span>
                <span className='flex flex-col justify-center items-center'> <Image src={img1} /></span>
                <span className='flex flex-col justify-center items-center'> <Image src={img1} /></span>
                <span className='flex flex-col justify-center items-center'> <Image src={img1} /></span>
                <span className='flex flex-col justify-center items-center'> <Image src={img1} /></span>
            </div>

            <div className=" px-5 py-10 flex justify-between gap-5">
                <div className=" w-[40%]">
                    <h1 className=" text-3xl font-bold mb-10">
                        Full development cycle
                    </h1>
                    <span>We use proven technologies </span>

                    <div className=" mt-10">
                        <h1 className="text-2xl font-bold mb-5">web</h1>
                        <p className="text-[15px]">PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js / Next / MySQL / Laravel / GO lang / django / Python</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-5">Mobile</h1>
                        <p className="text-[15px]">Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation </p>
                    </div>
                </div>
                <div className="w-[37%] flex flex-col gap-[25px]">
                    <span className="flex flex-row items-center gap-5 cursor-pointer hover:font-bold">
                        iOS development <IoIosArrowForward />
                    </span>
                    <span className="flex flex-row items-center gap-5 cursor-pointer hover:font-bold">
                        Android development <IoIosArrowForward />
                    </span>
                    <span className="flex flex-row items-center gap-5 cursor-pointer hover:font-bold">
                        Web development <IoIosArrowForward />
                    </span>
                    <span className="flex flex-row items-center gap-5 cursor-pointer hover:font-bold">
                        UI/UX development <IoIosArrowForward />
                    </span>
                    <span className="flex flex-row items-center gap-5 cursor-pointer hover:font-bold">
                        Testing <IoIosArrowForward />
                    </span>
                    <span className="flex flex-row items-center gap-5 cursor-pointer hover:font-bold">
                        Launch <IoIosArrowForward />
                    </span>
                    <span className="flex flex-row items-center gap-5 cursor-pointer hover:font-bold">
                        IT Consulting <IoIosArrowForward />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Part3