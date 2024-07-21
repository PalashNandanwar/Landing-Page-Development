import React from 'react'
import Image from "next/image";
import img8 from "../public/IMG_6115-1.png"

const Part7 = () => {
    return (
        <div className="relative w-full mt-10 sm:mt-20 px-4 sm:px-8 lg:px-14 py-10 sm:py-20 bg-[#f2f4f7] flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
                <h1 className="text-3xl sm:text-4xl font-bold"> Our Team </h1>
                <p className="mt-5 text-base sm:text-lg">Thousand is a full-cycle digital production company with its own product analytics, design, web, and mobile development.</p>
                <div className="py-10 flex justify-between">
                    <div className="flex flex-col gap-3 sm:gap-5">
                        <h1 className="text-3xl sm:text-4xl font-bold">28</h1>
                        <span className="text-sm sm:text-base"> team members </span>
                    </div>
                    <div className="flex flex-col gap-3 sm:gap-5">
                        <h1 className="text-3xl sm:text-4xl font-bold">+100</h1>
                        <span className="text-sm sm:text-base"> projects </span>
                    </div>
                    <div className="flex flex-col gap-3 sm:gap-5">
                        <h1 className="text-3xl sm:text-4xl font-bold">7 years</h1>
                        <span className="text-sm sm:text-base">in IT sphere</span>
                    </div>
                </div>
                <p className="mt-5 text-base sm:text-lg">All the necessary specialists - from a designer to a tester - are on staff. We hire the best specialists in the market. It's expensive but worth it.</p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <Image src={img8} alt="Team Image" className="max-w-full h-auto" />
            </div>
        </div>
    )
}

export default Part7
