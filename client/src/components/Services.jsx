export default function Services() {
  const services = [
    "PREVENTIVE MAINTENANCE SERVICE",
    "REFRIGERATION SYSTEM REPAIR",
    "BODY AND COLLISION REPAIR",
  ];

  return (


    <>
      <div className="absolute h-[500px] w-full left-0 z-0">
        <img
          src={"attachment/services.jpg"}
          alt=""
          className="object-cover md:w-full h-full">
        </img>
      </div>

      <div className="lg:w-1/2 flex flex-col w-full opacity-80 outline outline-1 outline-blue-800 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white relative z-10 rounded-r-xl">
        <div className="w-full flex h-[20%] items-center justify-center">
          <h1 className="text-3xl font-bold uppercase tracking-wide underline">
            OUR SERVICES
          </h1>
        </div>
        {services.map((item, index) => {
          return (

            <div key={index} className="w-full flex flex-row h-[20%] p-2">
              <div className="flex w-[40%] h-full items-center justify-center">
                <img src="attachment/logo.png" alt="" className="object-fill h-full flex mx-auto" />
              </div>
              <div className="flex text-xl w-full h-full items-center justify-between">
                {item}
              </div>
            </div>

          );
        })}
      </div>
    </>
  );
}
