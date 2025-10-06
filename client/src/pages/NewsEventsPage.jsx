import React from "react";

function NewsEvents() {
  const services = [
    ['/attachment/pic1.jpg', 'Event 1', 'description','Jun','12'],
    ['/attachment/pic1.jpg', 'Event 2', 'description','Aug', '10'],
    ['/attachment/pic1.jpg', 'Event 3', 'description','Sept','11'],
  ]

  return (
    <>
      <section className="flex flex-col w-full h-auto bg-blue-300 min-h-[calc(100vh-72px)]">

        <div className="flex flex-col h-[80px] w-full z-10 top-0 left-0 bg-white items-center justify-center outline outline-1 outline-yellow-500 uppercase">
          <h1 className="text-4xl font-bold text-blue-800">News & events</h1>

          <div className="flex flex-row w-full items-center justify-center text-sm lg:text-md tracking-wide gap-2 text-gray-500 font-bold">
            <a href="/">
              Home
            </a>
            <span className="flex h-full items-center justify-center uppercase text-stroke">
              {' / '}
            </span>

            <span className="">
              News & Events
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12 py-4 h-">

          {services.map((services, index) =>
            <div key={index} className="p-6 border rounded shadow hover:shadow-md transition h-auto flex flex-col bg-white">
              <div className="h-[50%] relative">
                <img
                  src={services[0]}
                  alt=""
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex h-full w-full items-end justify-end p-4">
                  <a href={'/'} className="flex items-start justify-top w-full h-full ">
                    <span className="uppercase flex flex-col items-start bg-blue-700/50 hover:bg-yellow-500 outline outline-2 outline-yellow-500 p-3 font-semibold text-white">
                      <h2 className="uppercase flex w-full h-full items-center justify-center text-sm">
                      {services[3]}
                      </h2>
                      <h2 className="uppercase flex w-full h-full items-center justify-center font-bold text-lg">
                      {services[4]}
                      </h2>
                    </span>                    
                  </a>
                </div>
              </div>
              <div className="mt-4 h-[50%]">
                <h2 className="text-lg font-semibold mb-2">{services[1]}</h2>
                <p className="text-gray-700">
                  {services[2]}
                </p>
              </div>
            </div>
          )}
        </div>

      </section>
    </>
  );
}

export default NewsEvents;
