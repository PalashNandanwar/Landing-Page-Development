import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Part8 = () => {
    return (
        <div className="relative w-full mt-10 px-4 sm:px-8 lg:px-14 py-10 sm:py-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl uppercase font-extrabold text-center lg:text-left">faq</h1>

            <div>
                <Accordion type="single" collapsible className="mt-10 border-t-2 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is the cost of Mobile Application?</AccordionTrigger>
                        <AccordionContent>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum delectus voluptatibus rem odit culpa, placeat rerum quia tempore repellendus eligendi quam? Sunt alias numquam impedit quae quisquam, nostrum ullam velit.
                            Quidem recusandae fugiat pariatur placeat voluptatibus, dolore, hic necessitatibus consequatur aliquid, molestias vel tenetur odio fuga labore dolores provident quia! Praesentium nam ex voluptatem omnis dolore unde ducimus autem iste!
                            Consequuntur ullam, est repudiandae iusto architecto facilis! Nostrum recusandae corporis maxime ducimus cumque numquam eligendi at praesentium repellat facere, odit sint dolorum tenetur amet natus possimus quas, cum quam aperiam.
                            Minus, ipsam temporibus.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>How long will development take?</AccordionTrigger>
                        <AccordionContent>
                            Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.<br />
                            <p className="mt-5">
                                Average development time from start to finish application:<br />
                                Medium projects up to <span className="font-bold"> 3 months </span><br />
                                Large projects up to <span className="font-bold"> 4 to 6 months </span><br />
                                To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over the logic and functionality.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>Do you provide a guarantee for the mobile application?</AccordionTrigger>
                        <AccordionContent>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum delectus voluptatibus rem odit culpa, placeat rerum quia tempore repellendus eligendi quam? Sunt alias numquam impedit quae quisquam, nostrum ullam velit.
                            Quidem recusandae fugiat pariatur placeat voluptatibus, dolore, hic necessitatibus consequatur aliquid, molestias vel tenetur odio fuga labore dolores provident quia! Praesentium nam ex voluptatem omnis dolore unde ducimus autem iste!
                            Consequuntur ullam, est repudiandae iusto architecto facilis! Nostrum recusandae corporis maxime ducimus cumque numquam eligendi at praesentium repellat facere, odit sint dolorum tenetur amet natus possimus quas, cum quam aperiam.
                            Minus, ipsam temporibus.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>Can you guarantee confidentiality?</AccordionTrigger>
                        <AccordionContent>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum delectus voluptatibus rem odit culpa, placeat rerum quia tempore repellendus eligendi quam? Sunt alias numquam impedit quae quisquam, nostrum ullam velit.
                            Quidem recusandae fugiat pariatur placeat voluptatibus, dolore, hic necessitatibus consequatur aliquid, molestias vel tenetur odio fuga labore dolores provident quia! Praesentium nam ex voluptatem omnis dolore unde ducimus autem iste!
                            Consequuntur ullam, est repudiandae iusto architecto facilis! Nostrum recusandae corporis maxime ducimus cumque numquam eligendi at praesentium repellat facere, odit sint dolorum tenetur amet natus possimus quas, cum quam aperiam.
                            Minus, ipsam temporibus.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default Part8
