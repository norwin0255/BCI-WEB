import React from "react";

function ServicesPage() {
  const services = [
    ['/attachment/pic4.jpg', 'PREVENTIVE MAINTENANCE SERVICES', 'Periodic maintenance procedures to anticipate and prevent major problems through in-depth analysis and tune-up of the equipment.'],
    ['/attachment/pic2.jpg', 'REFRIGERATION AND AC UNIT REPAIR', 'Professional maintenance and repair to recondition and restore the overall performance of the refrigeration unit.'],
    ['/attachment/pic3.jpg', 'BODY AND COLLISION REPAIR', 'Restoration of the damaged bodies from accidents and misuse, and rehabilitation of its structural integrity.']
  ]

  return (
    <>
      <section className="flex flex-col w-full h-auto bg-blue-300 min-h-[calc(100vh-72px)]">

        <div className="flex flex-col h-[20%] w-full z-10 top-0 left-0 bg-white items-center justify-center outline outline-1 outline-yellow-500 uppercase">
          <h1 className="text-4xl font-bold text-blue-800">Services</h1>

          <div className="flex flex-row w-full items-center justify-center text-sm lg:text-md tracking-wide gap-2 text-gray-500 font-bold">
            <a href="/">
              Home
            </a>
            <span className="flex h-full items-center justify-center uppercase text-stroke">
              {' / '}
            </span>

            <span className="">
              Services
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12 py-4 h-full">

          {services.map((services, index) =>
            <div key={index} className="p-6 border rounded shadow hover:shadow-md transition h-full flex flex-col bg-white">
              <div className="h-[50%] relative">
                <img
                  src={services[0]}
                  alt=""
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex h-full w-full items-end justify-end p-4">
                  <a href={'/'} className="flex items-end justify-end items-end w-full">
                    <span className="uppercase flex items-center outline outline-2 outline-yellow-500 p-3 bg-blue-900 hover:bg-yellow-500 font-bold text-white">
                      Book A Service
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

export default ServicesPage;
