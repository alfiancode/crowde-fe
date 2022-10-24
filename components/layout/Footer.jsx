import React from "react";

const Footer = () => {
  return (
    <div className="flex h-[202px] items-center bg-teal-800 justify-between px-2">
      {/* left */}
      <div className="flex flex-col sm:flex-row  w-full space-x-4 items-center text-white">
        <img src="logo2.png" alt="" />
        <p>Pemodal Institusi</p>
        <p>Menjadi Partner</p>

        <p>Tentang Kami</p>

        <p>Kontak Kami</p>
      </div>
      {/* right */}
      <div className="sm:flex max-w-[450px] text-white mr-3 hidden">
        PT CROWDE MEMBANGUN BANGSA Jalan Tebet Raya Nomor 34 Blok A Persil
        Nomor4, Kel. Tebet Timur Kec. Tebet, Kota Adm. Jakarta Selatan, Prov.
        DKI Jakarta 02121383317
      </div>
    </div>
  );
};

export default Footer;
