
import Component from '../components/BookAService';

function BookAServicePage() {
    return (
        <>
            <section className="flex flex-col w-full h-auto bg-white min-h-[calc(100vh-72px)] outline">
                <div className="flex flex-col h-[20%] w-full z-10 top-0 left-0 bg-white items-center justify-center outline outline-1 outline-yellow-500 uppercase">
                    <h1 className="text-4xl font-bold text-blue-800">Book a Service</h1>

                    <div className="flex flex-row w-full items-center justify-center text-sm lg:text-md tracking-wide gap-2 text-gray-500 font-bold">
                        <a href="/">
                            Home
                        </a>
                        <span className="flex h-full items-center justify-center uppercase text-stroke">
                            {' / '}
                        </span>

                        <span className="">
                            Book a Service
                        </span>
                    </div>
                </div>
                <div className="flex flex-col h-full w-full items-center justify-top">

                    <div className="px-8 bg-blue-300 outline outline-2 outline-yellow-500 w-full">
                        <Component />
                    </div>
                </div>

            </section>
        </>
    )
}

export default BookAServicePage;