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

    return (
        <>
                <div className="flex flex-col items-center w-full justify-start">
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

                <div className='flex items-center justify-end col-span-3'>
                    <PopoverGroup className="hidden lg:flex lg:gap-x-3 items-center">
                        <a href="/" className="text-sm/6 font-semibold text-white">
                            HOME
                        </a>
                        <a href="/" className="text-sm/6 font-semibold text-white">
                            PRODUCTS
                        </a>
                        <a href="/" className="text-sm/6 font-semibold text-white">
                            SERVICES
                        </a>
                        <a href="/" className="text-sm/6 font-semibold text-white">
                            NEWS & EVENTS
                        </a>
                        <a href="/" className="text-sm/6 font-semibold text-white">
                            ABOUT US
                        </a>
                        <a href="/" className="text-sm/6 font-semibold text-white">
                            CONTACT US
                        </a>
                        <a href="/" className="text-sm/6 font-semibold text-white">
                            BOOK A SERVICE
                        </a>
                    </PopoverGroup>
                </div>


                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300 text-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 bg-red-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">

                                    <a href="/" className="text-sm/6 font-semibold text-white underline">
                                        HOME
                                    </a>
                                    <a href="/Products" className="text-sm/6 font-semibold text-white underline">
                                        PRODUCTS
                                    </a>
                                    <a href="/" className="text-sm/6 font-semibold text-white underline">
                                        SERVICES
                                    </a>
                                    <a href="/" className="text-sm/6 font-semibold text-white underline">
                                        NEWS & EVENTS
                                    </a>
                                    <a href="/" className="text-sm/6 font-semibold text-white underline">
                                        ABOUT US
                                    </a>
                                    <a href="/" className="text-sm/6 font-semibold text-white underline">
                                        CONTACT US
                                    </a>
                                    <a href="/" className="text-sm/6 font-semibold text-white underline">
                                        BOOK A SERVICE
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
           </> 
    )
}
