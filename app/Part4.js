import React from 'react'
import Image from "next/image";
import img7 from "../public/image 15 (1).png"
import { TiSocialInstagram } from "react-icons/ti";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { CiBank } from "react-icons/ci";
import { MdConstruction } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdRamenDining } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { LuTarget } from "react-icons/lu";
import { PiTelevisionLight } from "react-icons/pi";
import { RiRemoteControl2Line } from "react-icons/ri";
import { RxMagicWand } from "react-icons/rx";
import { IoPlayCircleOutline } from "react-icons/io5";
import { RiAppleLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { FaGooglePlay } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineRealEstateAgent } from "react-icons/md";

const Part4 = () => {
    return (
        <div className="px-4 sm:px-14 py-12 relative w-full h-full bg-[#F2F4F7]">
            <div className="w-full sm:w-1/3">
                <p className="text-2xl sm:text-4xl font-bold">Developed more than <span className="text-[#80a948]"> 100 </span> projects in <span className="text-[#80a948]"> 15 </span> industries</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 py-10 gap-5 sm:gap-0">
                <div className="grid grid-rows-5 gap-5">
                    <span className="flex items-center gap-4"> <span className="text-yellow-500 flex items-center justify-center w-8 h-8 rounded-full bg-[#ffffff] shadow-2xl"><TiSocialInstagram /></span> Social Media</span>
                    <span className="flex items-center gap-4"> <span className="text-yellow-500 flex items-center justify-center w-8 h-8 rounded-full bg-[#ffffff] shadow-2xl"><MdOutlineSportsBasketball /></span> Fitness and Sport </span>
                    <span className="flex items-center gap-4"> <span className="text-yellow-500 flex items-center justify-center w-8 h-8 rounded-full bg-[#ffffff] shadow-2xl"><CiBank /></span> Bank </span>
                    <span className="flex items-center gap-4"> <span className="text-yellow-500 flex items-center justify-center w-8 h-8 rounded-full bg-[#ffffff] shadow-2xl"><MdConstruction /></span> Construction</span>
                    <span className="flex items-center gap-4"> <span className="text-yellow-500 flex items-center justify-center w-8 h-8 rounded-full bg-[#ffffff] shadow-2xl"><FaGamepad /></span> Game Projects </span>
                </div>
                <div className="grid grid-rows-5 gap-5">
                    <span className="flex items-center gap-4"> <span className="text-yellow-500 flex items-center justify-center w-8 h-8 rounded-full bg-[#ffffff] shadow-2xl"><IoBookSharp /></span> Education </span>
                    <span className="flex items-center gap-4"> <span className="text-yellow-500 flex items-center justify-center w-8 h-8 rounded-full bg-[#ffffff] shadow-2xl"><FaCarAlt /></span> Auto, Transport </span>
                    <span className="flex items-center gap-4"> <span className="text-yellow-500 flex items-center justify-center w-8 h-8 rounded-full bg-[#ffffff] shadow-2xl"><FaRegHeart /></span> Medicine, Health </span>
                    <span className="flex items-center gap-4"> <span className="text-yellow-500 flex items-center justify-center w-8 h-8 rounded-full bg-[#ffffff] shadow-2xl"><MdRamenDining /></span> Restaurants, Food Delivery </span>
                    <span className="flex items-center gap-4"> <span className="text-yellow-500 flex items-center justify-center w-8 h-8 rounded-full bg-[#ffffff] shadow-2xl"><IoBagOutline /></span> Marketplace </span>
                </div>
                <div className="grid grid-rows-5 gap-5">
                    <span className="flex items-center gap-4"> <span className="text-yellow-500 flex items-center justify-center w-8 h-8 rounded-full bg-[#ffffff] shadow-2xl"><LuTarget /></span> AR Technology </span>
                    <span className="flex items-center gap-4"> <span className="text-yellow-500 flex items-center justify-center w-8 h-8 rounded-full bg-[#ffffff] shadow-2xl"><PiTelevisionLight /></span> TV, Series </span>
                    <span className="flex items-center gap-4"> <span className="text-yellow-500 flex items-center justify-center w-8 h-8 rounded-full bg-[#ffffff] shadow-2xl"><RiRemoteControl2Line /></span> Start-ups </span>
                    <span className="flex items-center gap-4"> <span className="text-yellow-500 flex items-center justify-center w-8 h-8 rounded-full bg-[#ffffff] shadow-2xl"><RxMagicWand /></span> Religion </span>
                    <span className="flex items-center gap-4"> <span className="text-yellow-500 flex items-center justify-center w-8 h-8 rounded-full bg-[#ffffff] shadow-2xl"><IoPlayCircleOutline /></span> Online Courses </span>
                </div>
            </div>

            <div className="mt-24">
                <h1 className="text-3xl sm:text-5xl font-extrabold">Projects we are proud of</h1>
                <p className="mt-10 w-full sm:w-2/3 text-xl sm:text-2xl font-bold">
                    Our software development company is truly proud of the wonderful clients we have worked with. We enjoy a long-term partnership.
                </p>

                <div className="py-16 px-5 flex flex-wrap gap-12">
                    <span className="relative cursor-pointer border-b-2 border-yellow-500 pb-1">
                        Project 1
                    </span>
                    <span className="relative cursor-pointer hover:border-b-2 hover:border-yellow-500 hover:pb-1">
                        Project 2
                    </span>
                    <span className="relative cursor-pointer hover:border-b-2 hover:border-yellow-500 hover:pb-1">
                        Project 3
                    </span>
                    <span className="relative cursor-pointer hover:border-b-2 hover:border-yellow-500 hover:pb-1">
                        Project 4
                    </span>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl sm:text-5xl font-extrabold">
                            Project 1
                        </h1>
                        <p className="pt-10">Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient channels.</p>
                        <p className="py-8">Business analysis <span className="text-yellow-500">/</span> iOS <span className="text-yellow-500">/</span> Android <span className="text-yellow-500">/</span> QA <span className="text-yellow-500">/</span> UI/UX Design</p>
                        <div className="py-10 px-5 flex flex-col sm:flex-row gap-12 sm:gap-40">
                            <p className="flex gap-3">
                                <span className="text-yellow-500"><CiLocationOn /></span> India
                            </p>
                            <p className="flex gap-3">
                                <span className="text-yellow-500"><MdOutlineRealEstateAgent /></span> Real Estate
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
                            <div>
                                <h1 className="text-3xl sm:text-5xl font-extrabold">400%</h1>
                                <p className="text-lg sm:text-xl">User Growth</p>
                            </div>

                            <div>
                                <h1 className="text-3xl sm:text-5xl font-extrabold">+200,000</h1>
                                <p className="text-lg sm:text-xl">Active Users</p>
                            </div>
                        </div>

                        <div className="pt-16 flex gap-4">
                            <Button className="flex justify-center items-center gap-2 text-base">
                                <RiAppleLine className="text-lg" />
                                <span>App Store</span>
                            </Button>
                            <Button className="flex justify-center items-center gap-2 text-base">
                                <FaGooglePlay className="text-lg" />
                                <span>Google Play</span>
                            </Button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <Image className="w-full lg:w-[80%]" src={img7} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Part4
