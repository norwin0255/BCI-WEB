import React from "react";

function AboutUsPage() {
  return (
    <>
      <section className="flex flex-col w-full h-auto bg-white min-h-[calc(100vh-72px)]">
        <div className="p-4 md:px-12">

          <div className="flex flex-col w-full h-full p-8">
            <h1 className="text-3xl font-bold text-blue-800 w-full justify-center flex mb-6">ABOUT US</h1>

            <div>
              <span className="flex lg:text-lg md:text-md text-sm black text-center w-full justify-center">
                Bestchill Inc., established in 2018 and located at W6 Maclane Storage Facilities, Ilaya St., Niog II, Cavite, provides innovative cooling products—including reefer vans for transporting fresh and frozen goods, portable parking coolers introduced in 2019 for truck driver comfort, and, since 2022, air-conditioned camping tents for outdoor enthusiasts—while also offering dedicated after-sales service to ensure customer satisfaction, always keeping in mind that client satisfaction is our top priority.
              </span>
            </div>
          </div>

          <div className="flex flex-col w-full h-full p-8">
            <h1 className="text-3xl font-bold text-blue-800 w-full justify-center flex mb-6">VISION</h1>

            <div>
              <span className="flex lg:text-lg md:text-md text-sm black text-center w-full justify-center">
                To be recognized as one of the leading suppliers of efficient and high quality parking cooler, air conditioner and reefer units in the country.
              </span>
            </div>
          </div>

          <div className="flex flex-col w-full h-full p-8">
            <h1 className="text-3xl font-bold text-blue-800 w-full justify-center flex mb-6">MISSION</h1>

            <div>
              <span className="lg:text-lg md:text-md text-sm black text-center flex">
                To provide highest quality of cooling systems and help our customers to
                save money by using our efficient products such as parking cooler air
                conditioner and reefer units.
              </span>
            </div>
          </div>

        </div>


      </section>



    </>
  );
}

export default AboutUsPage;
