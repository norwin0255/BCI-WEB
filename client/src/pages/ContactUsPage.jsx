import ContactUsInput from "../components/ContactUsInput";


function ContactUs() {
    return (
        <>
            <section className="flex flex-col w-full h-auto bg-white min-h-[calc(100vh-72px)]">
                <div className="py-8 gap-4 h-full w-full flex flex-col lg:flex-row">
                    <div className="flex flex-col h-full w-full items-center justify-center ">

                        <span className=" px-8 pt-8 font-bold text-xl justify-start flex w-full">
                            Need Assistance?
                        </span>

                        <span className="px-8 py-4 font-semibold text-md justify-start flex w-full">
                            If you have any questions about our products or services, feel free to call our hotline numbers, use the form on this page, or reach out to us on our social media platforms.
                        </span>

                        <div className="flex px-8 pb-4 justify-start w-full">
                            <span className="font-bold text-md flex lg:w-[25%] w-[40%] h-full items-center">
                                {'Headquarters'}
                                <span className="flex justify-end w-full pr-1">
                                    {':'}
                                </span>
                            </span>
                            <span className="font-semibold text-sm flex h-full w-[75%] items-center">
                                W6 Maclane Storage Facilities, Ilaya St., Niog II, Cavite, Philippines
                            </span>
                        </div>

                        <div className="flex flex-row px-8 pb-4 justify-start w-full">
                            <span className="font-bold text-md flex lg:w-[25%] w-[40%] h-full items-center">
                                {'Liason Office'}
                                <span className="flex justify-end w-full pr-1">
                                    {':'}
                                </span>
                            </span>
                            <span className="font-semibold text-sm flex items-center w-[75%]">
                                10TH Flr. Sky I Tower Building #68 Dasmariñas St., Binondo, Manila, Philippines
                            </span>
                        </div>

                        <div className="flex flex-row px-8 pb-4 justify-start w-full">
                            <span className="font-bold text-md flex w-[25%]">
                                {'Phone'}
                                <span className="flex justify-end w-full pr-1">
                                    {':'}
                                </span>
                            </span>
                            <span className="font-semibold text-md flex items-center w-[75%]">
                                (02) 8245-62-26
                            </span>
                        </div>

                        <div className="flex flex-row px-8 pb-4 justify-start w-full">
                            <span className="font-bold text-md flex w-[25%]">
                                {'Email'}
                                <span className="flex justify-end w-full pr-1">
                                    {':'}
                                </span>
                            </span>
                            <span className="font-semibold text-md flex items-center w-[75%]">
                                marketing@bestchill.com.ph
                            </span>
                        </div>

                        <div className="flex flex-row px-8 pb-4 justify-start w-full">
                            <span className="font-bold text-md flex w-[25%]">
                                {'Facebook'}
                                <span className="flex justify-end w-full pr-1">
                                    {':'}
                                </span>
                            </span>
                            <a href="https://www.facebook.com/bestchillincorporated" className="font-semibold text-md flex items-center w-[75%]">
                                facebook.com/bestchillincorporated
                            </a>
                        </div>
                        <div className="flex flex-row px-8 pb-4 justify-start w-full">
                            <span className="font-bold text-md flex w-[25%]">
                                {'Instagram'}
                                <span className="flex justify-end w-full pr-1">
                                    {':'}
                                </span>
                            </span>
                            <a href="https://www.instagram.com/bestchill.inc/" className="font-semibold text-md flex items-center w-[75%]">
                                instagram.com/bestchill.inc
                            </a>
                        </div>

                        <div className="w-full p-8">
                            <iframe
                                className="h-[450px] w-full items-center justify-center"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.761752974193!2d120.96056907510307!3d14.440889186026766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d273166beee7%3A0xb74cc77c93a8bcf!2sMaclane%20Storage%20Facilities!5e0!3m2!1sen!2sph!4v1758604071637!5m2!1sen!2sph"
                                loading="lazy">

                            </iframe>
                        </div>
                    </div>

                    <div className="flex flex-col h-full w-full lg:px-8 items-center justify-top">
                        <div className="px-8 pt-8 bg-blue-300 outline outline-2 outline-yellow-500 w-full">
                            <span className="font-bold text-2xl text-white justify-center flex w-full uppercase stroke stroke-1 stroke-black">
                                Connect with us
                            </span>
                            <span className="text-md font-bold items-center justify-center w-full flex">
                                For more questions or Feedback:
                            </span>

                            <ContactUsInput />

                        </div>
                    </div>


                </div>
            </section>
        </>

    );
}

export default ContactUs;
