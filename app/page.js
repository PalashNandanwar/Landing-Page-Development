// import Image from "next/image";
// import { Input } from "@/components/ui/input"
import Footer from "./Footer";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";
import Part5 from "./Part5";
import Part6 from "./Part6";
import Part7 from "./Part7";
import Part8 from "./Part8";

export default function Home() {
  return (
    <>
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Part6 />
      <Part7 />
      {/* <div className="relative w-full mt-20 px-14 py-20  bg-[#f2f4f7] flex gap-4">
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
      </div> */}

      {/* <div className="relative w-full mt-10 px-14 py-20">
        <h1 className="text-5xl uppercase font-extrabold">faq</h1>


        <div >
          <Accordion type="single" collapsible className=" mt-10 border-t-2 py-10 grid grid-cols-2 gap-20" >
            <AccordionItem value="item-1">
              <AccordionTrigger>What is the cost of Mobile Application ?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum delectus voluptatibus rem odit culpa, placeat rerum quia tempore repellendus eligendi quam? Sunt alias numquam impedit quae quisquam, nostrum ullam velit.
                Quidem recusandae fugiat pariatur placeat voluptatibus, dolore, hic necessitatibus consequatur aliquid, molestias vel tenetur odio fuga labore dolores provident quia! Praesentium nam ex voluptatem omnis dolore unde ducimus autem iste!
                Consequuntur ullam, est repudiandae iusto architecto facilis! Nostrum recusandae corporis maxime ducimus cumque numquam eligendi at praesentium repellat facere, odit sint dolorum tenetur amet natus possimus quas, cum quam aperiam.
                Minus, ipsam temporibus.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How long will development take ?</AccordionTrigger>
              <AccordionContent>
                Development terms directly depends on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer<br />
                <p className="mt-5">
                  Average development time from start to finish application:<br />
                  Medium projects upto <span className="font-bold"> 3 months </span><br />
                  Large projects upto <span className="font-bold"> 4 to 6 months </span><br />
                  To get a more accurate estimate of the project completion time, It is necessary to determine the main task of the pplication, think over the logic and functionality
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Do you provide a grauntee for the mobile application ?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum delectus voluptatibus rem odit culpa, placeat rerum quia tempore repellendus eligendi quam? Sunt alias numquam impedit quae quisquam, nostrum ullam velit.
                Quidem recusandae fugiat pariatur placeat voluptatibus, dolore, hic necessitatibus consequatur aliquid, molestias vel tenetur odio fuga labore dolores provident quia! Praesentium nam ex voluptatem omnis dolore unde ducimus autem iste!
                Consequuntur ullam, est repudiandae iusto architecto facilis! Nostrum recusandae corporis maxime ducimus cumque numquam eligendi at praesentium repellat facere, odit sint dolorum tenetur amet natus possimus quas, cum quam aperiam.
                Minus, ipsam temporibus.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>I will not tell my idea, Do you guaruntee confidentially ?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum delectus voluptatibus rem odit culpa, placeat rerum quia tempore repellendus eligendi quam? Sunt alias numquam impedit quae quisquam, nostrum ullam velit.
                Quidem recusandae fugiat pariatur placeat voluptatibus, dolore, hic necessitatibus consequatur aliquid, molestias vel tenetur odio fuga labore dolores provident quia! Praesentium nam ex voluptatem omnis dolore unde ducimus autem iste!
                Consequuntur ullam, est repudiandae iusto architecto facilis! Nostrum recusandae corporis maxime ducimus cumque numquam eligendi at praesentium repellat facere, odit sint dolorum tenetur amet natus possimus quas, cum quam aperiam.
                Minus, ipsam temporibus.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>


      </div> */}
      <Part8 />

      {/* <div className="relative w-full mt-10 px-14 py-20 " >
        <div className="w-full bg-[#111111] text-white flex justify-center items-center flex-col rounded-2xl">
          <div className="pt-10">
            <Image src={img} />
          </div>
          <div className="flex justify-center items-center gap-44 py-24">
            <div className="flex justify-center items-center flex-col">
              <span className="flex justify-center items-center gap-5"> <span><FiSmartphone /></span> Contact nums.</span>
              <span className="font-bold">+91 0000000000</span>
            </div>
            <div className="flex justify-center items-center flex-col">
              <span className="flex justify-center items-center gap-5"> <span><AiOutlineMail /></span> Gmail</span>
              <span className="font-bold">demo@gmail.com</span>
            </div>
            <div className="flex justify-center items-center flex-col">
              <span className="flex justify-center items-center gap-5"> <span><IoLocationSharp /></span> Addres</span>
              <span className="font-bold">Mumbai , India</span>
            </div>
            <div className="flex justify-center items-center flex-col">
              <span className="flex justify-center items-center gap-5"> <span><LuStickyNote /></span> Leave a request</span>
              <span className="font-bold">Leave a request</span>
            </div>
          </div>

          <div className="py-10">
            <p>We workout throughout the world</p>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
}
