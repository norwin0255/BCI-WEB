'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pages = [
        ['Home','/'],
        ['Products','/Products'],
        ['Services','/Services'],
        ['News & Events', '/NewsEvents'],
        ['About Us', '/AboutUs'],
        ['Contact Us', '/ContactUs'],
        ['Book A service', '/Appointment']
    ];

    return (
        <>
            <header className="fixed h-[72px] z-40 w-full bg-blue-500 text-white">

                <div className='w-full h-full lg:px-4 md:px-2 py-4 grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
                    {/* <Navbar /> */}
                    <div className="flex mx-auto items-center justify-start">
                        <a href="/" className="flex items-center">
                            <img
                                alt=""
                                src="/attachment/logo.png"
                                className="h-10 w-auto"
                            />
                            <span className="text-2xl whitespace-nowrap ml-2 font-bold text-white">BESTCHILL INC.</span>
                        </a>
                    </div>

                    <div className="flex lg:hidden items-center w-full justify-end col-span-2">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="items-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6 h-6 w-6 text-white" />
                        </button>
                    </div>

                    <div className="flex w-full h-full 
                    col-start-2 col-end-5 
                   justify-end items-center ">
                        <PopoverGroup className="hidden lg:flex lg:gap-x-3 items-center">
                            {pages.map((pages, index) => (
                                <a href={pages[1]} key={index} className="text-sm/6 uppercase font-semibold text-white">
                                    {pages[0]}
                                </a>
                            ))}
                        </PopoverGroup>
                    </div>
                </div>
            </header>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed z-50 w-full p-6 
                inset-y-0 right-0 overflow-y-auto 
                bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300 
                text-white                 
                sm:max-w-sm sm:ring-1 sm:ring-gray-900/10
                grid grid-rows-8">

                    <div className="flex items-top justify-between">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 bg-red-700 h-[50px] w-[50px]">
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>

                    {pages.map((pages, index) => (
                        <div className='flex items-center justify-center outline outline-1 outline-white'>
                            <a href={pages[1]} key={index} className="text-xl font-semibold text-white">
                                {pages[0]}
                            </a>
                        </div>
                    ))}
                </DialogPanel>
            </Dialog>
        </>
    )
}
