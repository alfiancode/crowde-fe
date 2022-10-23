import React from "react";

const CaraMengajukanProyek = () => {
  return (
    <div className="mx-[258px] mt-[135px]">
      <div className="flex">
        <div className="flex mr-24">
          <img src="video.png" alt="" />
        </div>
        <div className="flex-1 mt-8">
          <p className="font-bold text-4xl mb-7">
            Cara <span className="text-orange-600">Mengajukan Proyek</span>
          </p>
          <p className="text-lg mb-7">
            Berikut adalah langkah-langkah untuk mengajukan proyek ke CROWDE
          </p>
          <p className="text-lg">
            Simak video di samping untuk detail langkah-langkah cara mengajukan
            pinjaman di crowde
          </p>
          <a className="inline-block  bg-orange-600 px-4 py-[9px] text-lg font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-orange-500 rounded-lg mt-12">
            Mulai Investasi
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaraMengajukanProyek;