import React from "react";

const CeritaCrowde = () => {
  return (
    <div>
      <div className="  text-center">
        <h1 className="font-bold text-6xl">Cerita Crowde</h1>

        <p className="max-w-screen-sm mx-auto">
          Kami mengumpulkan cerita dari mitra kami untuk membagikan pengalaman
          mereka bermodal maupun menerima pinjaman melalui platform kami.
        </p>
      </div>
      {/* testi */}
      <div className="hidden md:flex">
        <img src="testi.png" alt="" className="mx-auto  mt-8" />
      </div>
      {/* mitra */}
      <div className="hidden md:flex">
        {" "}
        <img src="mitra.png" alt="" className="mx-auto mt-10" />
      </div>
    </div>
  );
};

export default CeritaCrowde;
