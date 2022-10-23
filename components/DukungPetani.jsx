import React from "react";

const DukungPetani = () => {
  return (
    <div className="mt-[100px] ">
      <div className="text-center font-bold text-4xl mb-[78px]">
        Dukung petani Bersama <span className="text-orange-600">Crowde</span>
      </div>
      <div className="flex  justify-center space-x-32 ">
        <div className="flex flex-col items-center">
          <img src="icon1.png" alt="" />
          <p className="font-bold leading-[31px] text-2xl max-w-[260px] text-center">
            {" "}
            Memberikan Pinjaman Permodalan
          </p>
          <p className="max-w-[334px] mt-4 text-center">
            Crowde membantu sirkulasi pinjaman untuk mencapai imbal hasil yang
            optimal dengan meyediakan skema dan platform peminjaman yang aman
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="icon2.png" alt="" />
          <p className="font-bold leading-[31px] text-2xl max-w-[260px] text-center">
            {" "}
            Mengajukan Proyek Permodalan
          </p>
          <p className="max-w-[334px] mt-4 text-center">
            Kami mendukungmu sebagai petani dengan menyediakan bahan baku
            pertanian dan menghubungkanmu dengan calon pembeli
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="icon3.png" alt="" />
          <p className="font-bold leading-[31px] text-2xl max-w-[260px] text-center">
            Menjadi Pembeli maupun Pemasok
          </p>
          <p className="max-w-[334px] mt-4">
            Crowde juga menyediakan ekosistem untuk kamu membeli hasil pertanian
            dari petani binaan kami, maupun memasok hasil pertanianmu
          </p>
        </div>
      </div>
    </div>
  );
};

export default DukungPetani;
