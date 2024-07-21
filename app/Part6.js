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
    <div className="relative w-full h-[100%] px-14 py-12" >
      <h1 className=" mt-24 text-4xl font-bold">
        Application Development Stages
      </h1>

      <div className=" w-[100%] grid grid-cols-3 mt-20 ">
        <div className="grid gap-4">
          <div className="shadow-2xl p-7 ">
            <div className="flex items-center gap-12">
              <Image src={img5} />
              <h1 className=" text-2xl font-semibold"> Analysis </h1>
            </div>
            <p className="mt-5">We craft precise technical specs, aligning with your business, technology, and user requirement</p>
          </div>

          <div className="shadow-2xl p-7 ">
            <div className="flex items-center gap-12">
              <Image src={img3} />
              <h1 className=" text-2xl font-semibold"> Design </h1>
            </div>
            <p className="mt-5">We adapt the customer's corporation identity to the platform guidelines. We draw convenient and understandable interfaces</p>
          </div>

          <div className="shadow-2xl p-7 ">
            <div className="flex items-center gap-12">
              <Image src={img2} />
              <h1 className=" text-xl font-semibold"> Development </h1>
            </div>
            <p className="mt-5">We create an extensible architect, write clean and stable code. We integrate with customer technologies. </p>
          </div>
        </div>
        <div>
          <Image className=" w-[120%]" src={img8} />
        </div>
        <div className="grid gap-4">
          <div className="shadow-2xl p-7 ">
            <div className="flex items-center gap-12">
              <Image src={img6} />
              <h1 className=" text-xl font-semibold"> Testing </h1>
            </div>
            <p className="mt-5">We carry out functional testing and do bug fixes. We adapt the application to different phone resolution </p>
          </div>

          <div className="shadow-2xl p-7 ">
            <div className="flex items-center gap-12">
              <Image src={img4} />
              <h1 className=" text-xl font-semibold"> Launching </h1>
            </div>
            <p className="mt-5">We design the application page and publish it in the App store and Google paly store. </p>
          </div>

          <div className="shadow-2xl p-7 ">
            <div className="flex items-center gap-12">
              <Image src={img1} />
              <h1 className=" text-xl font-semibold"> Support </h1>
            </div>
            <p className="mt-5">We monitor the stability of the application, update it for new devices and version of iOS and Android. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Part6