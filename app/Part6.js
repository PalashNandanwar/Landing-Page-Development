import React from 'react'
import img1 from "../public/application.svg"
import img2 from "../public/coding-language.svg"
import img3 from "../public/graphic-design.svg"
import img4 from "../public/hosting 1.svg"
import img5 from "../public/planing.svg"
import img6 from "../public/security.svg"
import img8 from "../public/hope-gif1.png"
import Image from "next/image";

const Part6 = () => {
  return (
    <div className="relative w-full h-auto px-4 sm:px-8 lg:px-14 py-12">
      <h1 className="mt-12 sm:mt-24 text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        Application Development Stages
      </h1>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 sm:mt-20">
        <div className="grid gap-4">
          <div className="shadow-2xl p-6 md:p-7">
            <div className="flex items-center gap-6 md:gap-12">
              <Image src={img5} alt="Analysis" />
              <h1 className="text-xl md:text-2xl font-semibold"> Analysis </h1>
            </div>
            <p className="mt-4 md:mt-5">We craft precise technical specs, aligning with your business, technology, and user requirements.</p>
          </div>

          <div className="shadow-2xl p-6 md:p-7">
            <div className="flex items-center gap-6 md:gap-12">
              <Image src={img3} alt="Design" />
              <h1 className="text-xl md:text-2xl font-semibold"> Design </h1>
            </div>
            <p className="mt-4 md:mt-5">We adapt the customer&apos;s corporate identity to the platform guidelines. We draw convenient and understandable interfaces.</p>
          </div>

          <div className="shadow-2xl p-6 md:p-7">
            <div className="flex items-center gap-6 md:gap-12">
              <Image src={img2} alt="Development" />
              <h1 className="text-lg md:text-xl font-semibold"> Development </h1>
            </div>
            <p className="mt-4 md:mt-5">We create an extensible architecture, write clean and stable code. We integrate with customer technologies.</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Image className="w-[100%] lg:w-[120%]" src={img8} alt="Development Stages" />
        </div>
        <div className="grid gap-4">
          <div className="shadow-2xl p-6 md:p-7">
            <div className="flex items-center gap-6 md:gap-12">
              <Image src={img6} alt="Testing" />
              <h1 className="text-lg md:text-xl font-semibold"> Testing </h1>
            </div>
            <p className="mt-4 md:mt-5">We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions.</p>
          </div>

          <div className="shadow-2xl p-6 md:p-7">
            <div className="flex items-center gap-6 md:gap-12">
              <Image src={img4} alt="Launching" />
              <h1 className="text-lg md:text-xl font-semibold"> Launching </h1>
            </div>
            <p className="mt-4 md:mt-5">We design the application page and publish it in the App Store and Google Play Store.</p>
          </div>

          <div className="shadow-2xl p-6 md:p-7">
            <div className="flex items-center gap-6 md:gap-12">
              <Image src={img1} alt="Support" />
              <h1 className="text-lg md:text-xl font-semibold"> Support </h1>
            </div>
            <p className="mt-4 md:mt-5">We monitor the stability of the application, update it for new devices and versions of iOS and Android.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Part6
