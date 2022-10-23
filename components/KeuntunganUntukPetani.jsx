import React from "react";
import StepKeuntunganUntukPetani from "./StepKeuntunganUntukPetani";

const KeuntunganUntukPetani = () => {
  return (
    <div className="mx-32 mt-20">
      <h1 className="font-bold text-3xl ">Keuntungan untuk petani</h1>
      <p className="mb-6 mt-4">
        Nikmati berbagai penawaran menguntungkan yang kami sediakan
      </p>
      <div className="flex">
        <div className="flex">
          <StepKeuntunganUntukPetani />
        </div>
        <div className="flex">kanan</div>
      </div>
    </div>
  );
};

export default KeuntunganUntukPetani;
