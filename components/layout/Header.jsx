import React from "react";

const Header = () => {
  return (
    <div>
      <div className="w-full  mt-6 sm:mt-[53px] pl-12 pr-20">
        <div className="flex h-[78px] ">
          {/* logo */}
          <div>
            <img src="logo.png" alt="" className="h-[78px] w-[278px] " />
          </div>
          {/* menu */}
          <div className="flex justify-between flex-1 h-full items-center ">
            {/* left menu desktop */}
            <div className=" space-x-5 font-inter cursor-pointer hidden sm:flex">
              <p>Pemodal Institusi</p>
              <p>Menjadi Partner</p>
              <p>Tentang Kami</p>
              <p>Kontak Kami</p>
            </div>
            {/* right menu desktop login and sign up */}
            <div className="space-x-6">
              <a className="inline-block  bg-orange-600 px-4 py-[7px] text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-orange-500 rounded-lg">
                Login
              </a>
              <a
                className="inline-block rounded border border-current px-4 py-[7px] text-sm font-medium text-orange-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-orange-500"
                href="/download"
              >
                SignUp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
