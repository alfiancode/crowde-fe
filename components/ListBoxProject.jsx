import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiCheckCircle, ChevronUpDownIcon } from "react-icons/hi";

const ListBoxProject = ({ data, getData }) => {
  const [selected, setSelected] = useState("Project Catergory 🔽");
  console.log(data);
  return (
    <div>
      <Listbox
        as="div"
        className=" "
        onChange={(value) => {
          setSelected(value);
          getData(value);
          // console.log(value);
        }}
      >
        <Listbox.Button className="w-full border-2 border-gray-300 p-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-left pl-3">
          {" "}
          {selected}
        </Listbox.Button>
        <Listbox.Options className="absolute flex flex-col   w-52 ring ring-gray-50 mt-3  rounded-lg bg-gray-50 shadow-md">
          {data?.map((person, index) => (
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

export default ListBoxProject;
