import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiCheckCircle, ChevronUpDownIcon } from "react-icons/hi";
const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];
const InputDaftarProject = () => {
  const [selected, setSelected] = useState("Project Catergory");
  return (
    <div className="flex">
      {/* list box */}
      <Listbox
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
      </Listbox>
    </div>
  );
};

export default InputDaftarProject;
