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
  const getDataCategory = (data) => {
    setCategory(data);
  };

  const [category, setCategory] = useState("");
  return (
    <div className="flex mt-20">
      <ListBoxProject people={people} onSubmit={getDataCategory} />
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
