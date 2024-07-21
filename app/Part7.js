import React from 'react'
import Image from "next/image";
import img8 from "../public/IMG_6115-1.png"

const Part7 = () => {
    return (
        <div className="relative w-full mt-20 px-14 py-20  bg-[#f2f4f7] flex gap-4">
            <div className=" w-1/2">
                <h1 className=" text-4xl font-bold"> Our Team </h1>
                <p className="mt-5 text-[17px]">Thousand is a full-cycle digital production company with its own product analytics, design, web and mobile development</p>
                <div className="py-10 mr-10 flex justify-between">
                    <div className="flex flex-col gap-5">
                        <h1 className=" text-4xl font-bold">28</h1>
                        <span> team member </span>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className=" text-4xl font-bold">+100</h1>
                        <span> projects </span>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className=" text-4xl font-bold">7 years</h1>
                        <span>in IT sphere</span>
                    </div>
                </div>
                <p className="mt-5 text-[17px]">All the necessary sepcialist - from a designer to a tester - are on a staff. We hire the best specialist int the market. It's expensive but worth it</p>
            </div>
            <div className=" w-1/2">
                <Image src={img8} />
            </div>
        </div>
    )
}

export default Part7