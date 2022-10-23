import React from "react";

const StepKeuntunganUntukPetani = () => {
  return (
    <div>
      <section className="">
        <div className="container max-w-4xl  py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                {/* per dot from here    */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-orange-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Dibantu dalam mengawasi proyek
                  </h3>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-orange-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Penyediaan SOP untuk menjaga kelancara proyek
                  </h3>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-orange-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Penyaluran hasil panen akan dibantu dengan rekan CROWDE
                  </h3>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-orange-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Pencairan dana langsung melalui toko tani untuk membeli
                    kebutuhan proyek
                  </h3>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-orange-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    pengambilan pinjaman dapat berupa hasil panen pertanian
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StepKeuntunganUntukPetani;
