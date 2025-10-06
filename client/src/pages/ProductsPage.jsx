
function ProductPage() {
  const products = [
    ['/attachment/reefer.png', 'Reefer Unit', '/Products/Reefer', 'built with high-performance XPS Styrofoam insulation, offering excellent thermal protection, strength, and low water absorption. The eco-friendly HCFC material ensures sustainability. Reefer systems maintain temperatures from +30°C to -25°C, making them ideal for transporting a wide range of temperature-sensitive goods.'],
    ['/attachment/reefer.png', 'Portable Aircon Unit DL-1800', '/Products/Reefer', "This rooftop-mounted air conditioner operates whether the engine is on or off, consuming no fuel and delivering a high-quality air environment. It's ideal for trucks, tractors, RVs, cranes, and construction equipment, and is also perfectly suited for mobile van clinics."],
    ['/attachment/reefer.png', 'Portable Aircon Unit DL-2600F', '/Products/Reefer', "wall-mounted parking cooler, designed primarily to cool the truck cabin during the driver's overnight rest periods, as well as during loading and unloading operations."],
    ['/attachment/reefer.png', 'Portable Aircon Unit DL-2600FT', '/Products/Reefer', 'This rooftop air conditioner delivers high cooling performance, with excellent anti-vibration and impact resistance, making it suitable for a wide range of vehicles and lifting equipment.'],
    ['/attachment/campingset.png', 'Camping Set', '/Products/Reefer', 'Stay cool and comfortable outdoors with the Camping Set featuring a 24V portable air conditioner, 768W power station, versatile adapter, spacious 3-person tent, and comfortable mattresses—perfect for hassle-free camping.'],
    ['/attachment/reefer.png', 'Container Generator Set', '/Products/Reefer', 'Details of Gen Set'],
    ['/attachment/reefer.png', 'We also sell parts', '/Products/Reefer', 'Details of Gen Set']
  ]

  return (
    <>

      <section className="flex flex-col w-full h-auto bg-blue-300">
        {/* <div className="absolute w-full h-[200px] flex top-0 z-0 pt-[72px] opacity-50">
          <img src="/attachment/pic4.jpg" alt="" className="absolute object-fill h-full object-center w-full mask-t-from-50%" />
        </div> */}

        <div className="flex flex-col h-[100px] w-full z-10 top-0 left-0 bg-white items-center justify-center outline outline-1 outline-yellow-500 uppercase">
          <h1 className="text-4xl font-bold text-blue-800">Products</h1>

          <div className="flex flex-row w-full items-center justify-center text-sm lg:text-md tracking-wide gap-2 text-gray-500 font-bold">
            <a href="/">
                Home
            </a>
            <span className="flex h-full items-center justify-center uppercase text-stroke">
              {' / '}
            </span>

            <span className="">
              Products
            </span>
          </div>
        </div>




        {/* <div className="flex h-[100px] w-full z-10 top-0 left-0 flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-900 to-indigo-300">
          <div>
            <span className="flex w-full h-full items-center justify-center font-bold text-2xl lg:text-5xl text-blue-300 uppercase text-stroke tracking-wide">
              OUR PRODUCTS
            </span>
          </div>

          <div className="flex flex-row w-full items-center justify-center text-sm lg:text-md tracking-wide gap-2">
            <a href="/">
              <span className="flex h-full items-center justify-center font-bold text-white uppercase text-stroke">
                Home
              </span>
            </a>
            <span className="flex h-full items-center justify-center font-bold text-white uppercase text-stroke">
              {' / '}
            </span>

            <span className="flex h-full items-center justify-center font-bold text-white uppercase text-stroke">
              Product
            </span>

          </div>
        </div> */}

        <div className="w-full h-full flex flex-col gap-10 ">
          {products.map((products, index) =>

            index % 2 === 0 ? (
              <>
                <div key={index} className="w-full flex flex-col-reverse lg:flex-row outline outline-1 outline-yellow-500">
                  <div className="relative flex flex-col w-full h-full items-center justify-center bg-blue-300">
                    <img
                      src={'/attachment/pic3.jpg'}
                      alt=""
                      className="w-full h-full object-cover opacity-75"
                    />
                    {/* Overlay container */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white p-8">
                      <div className="w-full flex justify-center">
                        <span className="text-xl lg:text-3xl font-bold uppercase tracking-wide">
                          {products[1]}
                        </span>
                      </div>
                      <div className="w-full flex justify-center">
                        <span className="text-sm lg:text-lg text-justify uppercase tracking-wide">
                          {products[3]}
                        </span>
                      </div>
                      <div className="w-full flex justify-center items-end h-[20%]">
                        <a href={products[2]} className="flex items-end justify-center items-end w-full">
                          <span className="uppercase flex items-center outline outline-2 outline-yellow-500 p-3 hover:bg-yellow-500">
                            Know more
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full h-full items-center justify-center bg-white">
                    <img
                      src={products[0]}
                      alt=""
                      className="object-fill w-full h-full scale-75"
                    />
                  </div>
                </div>

              </>
            ) :
              (
                <>
                  <div key={index} className="w-full flex flex-col lg:flex-row outline outline-1 outline-yellow-500">
                    <div className="flex w-full h-auto items-center justify-center bg-white">
                      <img
                        src={products[0]}
                        alt=""
                        className="object-fill w-full h-full scale-75
                    "
                      />
                    </div>
                    <div className="relative flex flex-col w-full h-full items-center justify-center">
                      <img
                        src={'/attachment/pic3.jpg'}
                        alt=""
                        className="w-full h-full object-cover opacity-75"
                      />
                      {/* Overlay container */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white p-8">
                        <div className="w-full flex justify-center">
                          <span className="text-xl lg:text-3xl font-bold uppercase tracking-wide">
                            {products[1]}
                          </span>
                        </div>
                        <div className="w-full flex justify-center">
                          <span className="text-sm lg:text-lg text-justify uppercase tracking-wide">
                            {products[3]}
                          </span>
                        </div>
                        <div className="w-full flex justify-center items-end h-[20%]">
                          <a href={products[2]} className="flex items-end justify-center items-end w-full  ">
                            <span className="uppercase flex items-center outline outline-2 outline-yellow-500 p-3 hover:bg-yellow-500">
                              Know more
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </>
              )
          )}

          <div />
        </div>

      </section>
    </>
  );
}

export default ProductPage;
