
function ProductReefer() {
    const products = [
        ['/attachment/reefer.png', 'Reefer Unit', 'built with high-performance XPS Styrofoam insulation, offering excellent thermal protection, strength, and low water absorption. The eco-friendly HCFC material ensures sustainability. Reefer systems maintain temperatures from +30°C to -25°C, making them ideal for transporting a wide range of temperature-sensitive goods.'],
        ['/attachment/reefer.png', 'Portable Aircon Unit DL-1800', "This rooftop-mounted air conditioner operates whether the engine is on or off, consuming no fuel and delivering a high-quality air environment. It's ideal for trucks, tractors, RVs, cranes, and construction equipment, and is also perfectly suited for mobile van clinics."],
        ['/attachment/reefer.png', 'Portable Aircon Unit DL-2600F', "wall-mounted parking cooler, designed primarily to cool the truck cabin during the driver's overnight rest periods, as well as during loading and unloading operations."],
        ['/attachment/reefer.png', 'Portable Aircon Unit DL-2600FT', 'This rooftop air conditioner delivers high cooling performance, with excellent anti-vibration and impact resistance, making it suitable for a wide range of vehicles and lifting equipment.'],
        ['/attachment/campingset.png', 'Camping Set', 'Stay cool and comfortable outdoors with the Camping Set featuring a 24V portable air conditioner, 768W power station, versatile adapter, spacious 3-person tent, and comfortable mattresses—perfect for hassle-free camping.'],
        ['/attachment/reefer.png', 'Container Generator Set', 'Details of Gen Set'],
        ['/attachment/reefer.png', 'We also sell parts', 'Details of Gen Set']
    ]

    return (
        <>
            <section className="flex flex-col w-full h-auto">
                {/* <div className="absolute w-full h-[200px] flex top-0 z-0 pt-[72px] opacity-50">
          <img src="/attachment/pic4.jpg" alt="" className="absolute object-fill h-full object-center w-full mask-t-from-50%" />
        </div> */}

                <div className="flex h-[100px] w-full z-10 top-0 left-0 flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-900 to-indigo-300">
                    <div>
                        <span className="flex w-full h-full items-center justify-center font-bold text-2xl lg:text-5xl text-blue-300 uppercase text-stroke tracking-wide">
                            REEFER UNIT
                        </span>
                    </div>

                    <div className="flex flex-row w-full items-center justify-center text-sm lg:text-md tracking-wide gap-2">
                        <a href="/">
                            <span className="flex h-full items-center justify-center font-bold text-yellow-200 uppercase text-stroke">
                                Home
                            </span>
                        </a>
                        <span className="flex h-full items-center justify-center font-bold text-yellow-200 uppercase text-stroke">
                            {' / '}
                        </span>
                        <a href="/Products">
                            <span className="flex h-full items-center justify-center font-bold text-yellow-200 uppercase text-stroke">
                                Product
                            </span>
                        </a>
                        <span className="flex h-full items-center justify-center font-bold text-white uppercase text-stroke">
                            {' / '}
                        </span>
                        <span className="flex h-full items-center justify-center font-bold text-white uppercase text-stroke">
                            Reefer Unit
                        </span>

                    </div>
                </div>

                <div className="outline">
                    <span className="flex w-full h-full items-center justify-center font-bold text-2xl lg:text-5xl text-blue-300 uppercase text-stroke tracking-wide">
                        Details
                    </span>
                </div>

                <div>
                    <span className="flex w-full h-full items-center justify-center font-bold text-2xl lg:text-5xl text-blue-300 uppercase text-stroke tracking-wide">
                        parts of reefer
                    </span>
                </div>

                <div className="flex h-[500px] w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-8">
                    <div className="outline flex w-full">
                        <span>
                            Reefer Box
                        </span>
                    </div>



                    <div className="outline flex w-full">Condenser</div>
                    <div className="outline flex w-full">Evaporator</div>
                    <div className="outline flex w-full">Compresor</div>
                    <div className="outline flex w-full">Expansion Valve</div>
                </div>


            </section>
        </>
    );
}

export default ProductReefer;
