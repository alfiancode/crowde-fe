import React from "react";

const Header = () => {
  return (
    <div>
      <div className="w-full  mt-6 sm:mt-[53px] sm:pl-12 pr-5 md:pr-20 ">
        <div className="flex h-[78px] ">
          {/* logo */}
          <div className="">
            <img
              src="logo.png"
              alt=""
              className=" hidden md:inline-flex md:h-[78px] md:w-[278px] "
            />
          </div>
          {/* menu */}
          <div className="flex justify-between flex-1 h-full items-center ">
            {/* left menu desktop */}
            <div className=" md:space-x-2 sm:space-x-1 font-inter cursor-pointer hidden md:flex">
              <p>Pemodal Institusi</p>
              <p>Menjadi Partner</p>
              <p>Tentang Kami</p>
              <p>Kontak Kami</p>
            </div>
            {/* right menu desktop login and sign up */}
            <div className="hidden md:flex">
              <a className="mr-4  bg-orange-600 px-4 py-[7px] text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-orange-500 rounded-lg">
                Login
              </a>
              <a
                className=" rounded border border-current px-4 py-[7px] text-sm font-medium text-orange-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-orange-500"
                href="/download"
              >
                SignUp
              </a>
            </div>
            <div className="flex md:hidden w-full justify-end  ">
              <div className="p-2 text-gray-600 transition  rounded hover:text-gray-600/75 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
