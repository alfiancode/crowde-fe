import React from "react";

const ItemHotProject = ({ addcss, item }) => {
  return (
    <div
      className={`relative shadow-xl  w-[300px] sm:w-[400px] h-[550px] bg-white rounded-3xl flex flex-col items-center  ${addcss} `}
    >
      <div className="flex">
        <img
          src={item?.thumbnail}
          alt=""
          className="mt-8 w-full h-[200px]  rounded-lg shadow-xl"
        />
      </div>
      <div className="flex w-full">
        <div className=" flex flex-col ml-6 mt-8 space-y-3">
          <div className="flex">
            <p className="bg-gray-200 rounded-xl py-1 px-4 font-bold leading-6">
              {item?.category}
            </p>
          </div>

          <p className="font-bold leading-6 ">{item?.title}</p>
          <p className="font-bold leading-6">{item?.description}</p>
        </div>
      </div>
      <a className="inline-block mt-16  bg-orange-600 px-4 py-[7px] text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-orange-500 rounded-lg">
        Mulai Investasi
      </a>
      <div className=" hidden md:flex absolute w-[116px] h-[116px] bg-teal-500 -right-[58px] -top-[58px] rounded-full  items-center justify-center  font-bold  ">
        Coming Soon
      </div>
    </div>
  );
};

export default ItemHotProject;
