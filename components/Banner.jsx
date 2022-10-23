import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
const Banner = () => {
  return (
    <div>
      <div className="flex pl-12 items-center mt-[100px]  ">
        {/*  left flex*/}
        <div className="flex flex-col max-w-[497px] space-y-8 mr-12">
          <p className="text-neutral-600 text-[40px] font-bold max-w-[394px]">
            Butuh <span className="text-orange-600 ">Modal</span> Usaha? Ini
            Jawabannya!
          </p>
          <p className="max-w-[336px] text-lg">
            Di sini kamu bisa memperoleh modal usaha ramah petani hingga Rp100
            juta dengan cara yang mudah serta bisa diakses dari mana saja dan
            kapan pun.
          </p>
          {/* 4 item text with icon */}
          <div className="w-[479px]  ">
            <div className="flex ">
              <GoPrimitiveDot className="mt-[5px] text-orange-600 mr-1 w-[25px]" />
              <p className="text-lg ">
                Mendapat modal berupa sarana produksi berkualitas tinggi dan
                pembiayaan tenaga kerja.
              </p>
            </div>
            <div className="flex  ">
              <GoPrimitiveDot className="mt-[5px] text-orange-600 mr-1 " />
              <p className="text-lg">
                Dibimbing langsung oleh ahlinya saat berbudidaya.
              </p>
            </div>
            <div className="flex  ">
              <GoPrimitiveDot className="mt-[5px] text-orange-600 mr-1" />
              <p className="text-lg">Pengembalian modal berupa hasil panen.</p>
            </div>
            <div className="flex  ">
              <GoPrimitiveDot className="mt-[5px] text-orange-600 mr-1" />
              <p className="text-lg">Akses pasar dengan harga terbaik.</p>
            </div>
          </div>
          {/* button */}
          <div className="flex space-x-4">
            <a className="inline-block  bg-orange-600 px-4 py-[7px] text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-orange-500 rounded-lg">
              Mulai Investasi
            </a>
            <a className="inline-block rounded-lg border border-current px-4 py-[7px] text-sm font-medium text-orange-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-orange-500">
              Ajukan Pinjaman
            </a>
          </div>
        </div>
        <div className="flex flex-1 justify-end mr-24 ">
          <img src="petani.png" alt="" className="h-[520px] w-[778px]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
