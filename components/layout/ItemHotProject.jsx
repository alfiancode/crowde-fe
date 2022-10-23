import React from "react";

const ItemHotProject = () => {
  return (
    <div className="relative w-[400px] h-[550px] bg-white rounded-[60px] flex flex-col items-center mr-16">
      <div className="flex">
        <img src="hotproject.png" alt="" className="mt-6" />
      </div>
      <div className="flex w-full">
        <div className=" flex flex-col ml-6 mt-8 space-y-3">
          <div className="flex">
            <p className="bg-gray-200 rounded-xl py-1 px-4 font-bold leading-6">
              Sayuran
            </p>
          </div>

          <p className="font-bold leading-6 ">CV. Maju Bersama</p>
          <p className="font-bold leading-6">Total Pendanaan Rp150.000.000</p>
        </div>
      </div>
      <a className="inline-block mt-16  bg-orange-600 px-4 py-[7px] text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-orange-500 rounded-lg">
        Mulai Investasi
      </a>
      <div className="absolute w-[116px] h-[116px] bg-teal-500 -right-[58px] -top-[58px] rounded-full flex items-center justify-center  font-bold !z-50 ">
        Coming Soon
      </div>
    </div>
  );
};

export default ItemHotProject;
