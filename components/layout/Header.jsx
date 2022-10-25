import React from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";

const links = [
  { href: "/ourstory", label: "Pemodal Institusi" },
  { href: "/membership", label: "Menjadi Partner" },
  { href: "/write", label: "Tentang Kami" },
  { href: "/signin", label: "Kontak Kami" },
  { href: "/signin", label: "Login" },
];
const Header = () => {
  return (
    <div>
      <div className="w-full  mt-6 sm:mt-[53px] md:pl-12 pr-2 md:pr-20 z-50">
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
            <div className=" md:space-x-2 sm:space-x-1 font-inter cursor-pointer hidden md:flex w-full">
              <p>Pemodal Institusi</p>
              <p>Menjadi Partner</p>
              <p>Tentang Kami</p>
              <p>Kontak Kami</p>
            </div>
            {/* right menu desktop login and sign up */}
            <div className="flex w-full  justify-between md:justify-end items-center mr-5 md:mr-0">
              {" "}
              <div className="hidden md:flex ">
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
              <Menu
                as="div"
                className="flex justify-end items-end w-full md:w-0 "
              >
                <Menu.Button>
                  <div className="flex md:hidden ">
                    <div className="p-2 text-gray-600 transition  rounded hover:text-gray-600/75">
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
                </Menu.Button>
                <Menu.Items className="absolute top-28 left-3 right-3 bg-gray-300 rounded divide divide-gray-100 shadow ">
                  {links.map((link) => (
                    /* Use the `active` state to conditionally style the active item. */
                    <Menu.Item key={link.href} as="div">
                      {({ active }) => (
                        <Link href="#">
                          <div
                            className={`flex py-3 px-6 ${
                              active ? "bg-gray-100" : ""
                            }`}
                          >
                            {link.label}
                          </div>
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Menu>
            </div>

            {/* humberger button */}

            {/* <div className="flex md:hidden w-full justify-end  ">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
