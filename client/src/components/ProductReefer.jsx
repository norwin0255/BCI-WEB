
export default function ProductsReefer() {
    const reefer = [
    ['/attachment/reeferbox.png', 'Reefer Box', 'Details of Reefer Box'],
    ['/attachment/reeferaircon.png', 'Air condition', 'Details of Air condition'],
    ['/attachment/curtains.png', 'curtain', 'Details of curtain']
  ]

  const rowCount = reefer.length;
// bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 
    return (
        <>
        

          <div className="w-full h-[10%] flex items-center justify-center">
            <h1 className="text-3xl font-bold uppercase tracking-wide">
              Reefer system
            </h1>
          </div>

          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex w-full">
              <div className="flex mx-auto items-center">
                <img className="lg:scale-75 flex"
                  src="/attachment/Reefer.png" alt="" />
              </div>
            </div>
            <div className="flex w-full p-5 flex-col gap-3">
              {reefer.map((reefer, index) => (
                  <div key={index} className="flex flex-row gap-4" style={{ height: `${100 / rowCount}%` }}>
                    <div className="w-[30%] flex">
                      <img
                        src={reefer[0]}
                        alt=""
                        className="object-fill"
                      />
                    </div>
                    <div className="w-full flex flex-col">
                      <h2 className="text-lg font-bold uppercase tracking-wide">
                        {'>'} {reefer[1]}
                      </h2>
                      <h2 className="text-md uppercase tracking-wide">
                        {reefer[2]}
                      </h2>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        
        </>
    );
}