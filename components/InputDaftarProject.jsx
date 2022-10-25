import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiCheckCircle, ChevronUpDownIcon } from "react-icons/hi";
import ListBoxProject from "./ListBoxProject";
const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

const InputDaftarProject = () => {
  const getData = (data) => {
    console.log("data dari lilst box project", data);
    setCategory(data);
  };
  const [category, setCategory] = useState("");
  return (
    <div className="flex">
      {/* list box */}
      {/* <Listbox
        as="div"
        className="relative w-52"
        onChange={(value) => {
          setSelected(value);
          console.log(value);
        }}
      >
        <Listbox.Button className="py-3 px-6 rounded-lg ring-2 ring-orange-600 w-52">
          {" "}
          {selected}
        </Listbox.Button>
        <Listbox.Options className="absolute flex flex-col   w-52 ring ring-gray-50 mt-3  rounded-lg bg-gray-50 shadow-md">
          {people.map((person, index) => (
            <Listbox.Option
              value={person.name}
              key={index}
              className="hover:bg-gray-300 flex items-center h-10 p-5"
            >
              {({ selected }) => (
                <>
                  {person.name}
                  {selected ? (
                    <span>
                      <HiCheckCircle
                        className="w-5 h-5 text-orange-600 ml-4"
                        aria-hidden="true"
                      />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox> */}
      <ListBoxProject people={people} onSubmit={getData} />
      {/* button submit */}
      <button
        className="bg-orange-600 text-white px-6 py-3 rounded-lg ml-4"
        onClick={(e) => {
          e.preventDefault();
          console.log("ini clg button submit", category);
        }}
      >
        Cari
      </button>
    </div>
  );
};

export default InputDaftarProject;
