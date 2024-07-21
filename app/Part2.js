import React from 'react'
import Image from "next/image";
import Header from "./Header";
import back from "../public/background.png"
import Card from "./Card";

const Part2 = () => {
    return (
        <div className="relative w-full h-[100%] px-16 bg-[#F2F4F7]">
            <div className="relative z-10">
                <Header />
                <div className="w-full flex justify-between">
                    <div className=" w-[50%]">
                        <h1 className="text-5xl font-bold">
                            <span className=" text-[#ffba00] ">User-Centric Excellence</span> : Our App Development services Tackles Your Pain Points
                        </h1>
                        <p className=" mt-10 mb-10 text-[21.5px]">
                            Experience a Seamless Digital Journey with <span className=" text-[#80a948]">Desum - </span> where every Line of Code resolves your challenges and <span className=" text-[#ffba00] ">Elevate your app experience </span> to unparalleled heights
                        </p>
                        <div className="mb-24">
                            <Card />
                        </div>
                    </div>
                </div>
            </div>

            <div id="Group 1" className="absolute right-0 top-0 w-[650px] h-full z-0">
                <Image src={back} layout="fill" objectFit="cover" alt="Background Image" />
            </div>
        </div>
    )
}

export default Part2