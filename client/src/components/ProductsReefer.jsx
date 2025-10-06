
import React, { useState, useEffect } from "react";

export default function ProductsReefer() {
// bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 
    return (
        <div className="flex
        h-full
        text-black 
        grid grid-rows-auto">
            <div className="w-full flex flex-col mx-auto items-center col-span-2 outline outline-1 outline-black-500">
                <h1 className="text-3xl font-bold uppercase tracking-wide">
                    Reefer system
                </h1>
            </div>
            <div className="w-full flex flex-col mx-auto items-center col-span-2 outline outline-1 outline-black-500">
                <div className="flex lg:flex-rows flex-col mx-auto items-center
            w-full h-full 
            grid grid-cols-1 lg:grid-cols-2
            outline outline-1 outline-red-500">

                    <div className="
                w-full h-full
                items-center 
                flex mx-auto 
                col-span-1
                outline outline-1 outline-black-500">

                        <div className="flex flex-col h-full items-center justify-center mx-auto">
                            <img
                                src="/attachment/Reefer.png"
                                alt=""
                                className="object-cover md:w-full h-full perspective-dramatic"
                            />
                        </div>
                    </div>

                    <div className="
                w-full h-full md:w-1/2
                mt-5 p-2 
                col-span-1
                ">
                        <div className="grid grid-cols-4">


                            <div className="w-full items-center col-span-1 col-start-1">
                                <div className="flex flex-col items-center justify-center">
                                    <img
                                        src="/attachment/reeferbox.png"
                                        alt=""
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="ml-2 w-full items-left col-span-3 col-start-2">
                                <h2 className="text-lg font-bold uppercase tracking-wide">
                                    {'>'} Reefer Box
                                </h2>
                                <h3 className="text-base font-bold uppercase tracking-wide">
                                    2x2x8 insulated chuchu
                                </h3>
                            </div>


                            <div className="w-full items-center col-span-1 col-start-1">
                                <div className="flex flex-col items-center justify-center">
                                    <img
                                        src="/attachment/reeferaircon.png"
                                        alt=""
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="ml-2 w-full items-left col-span-3 col-start-2">
                                <h2 className="text-lg font-bold uppercase tracking-wide">
                                    {'>'} Air condition
                                </h2>
                                <h3 className="text-base font-bold uppercase tracking-wide">
                                    2x2x8 insulated chuchu
                                </h3>
                            </div>

                            <div className="w-full items-center col-span-1 col-start-1">
                                <div className="flex flex-col items-center justify-center">
                                    <img
                                        src="/attachment/curtains.png"
                                        alt=""
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="ml-2 w-full items-left col-span-3 col-start-2">
                                <h1 className="text-lg font-bold uppercase tracking-wide">
                                    {'>'} curtain
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}