import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiCheckCircle, ChevronUpDownIcon } from "react-icons/hi";
import ListBoxProject from "./ListBoxProject";
const projectCategory = [
  { name: "sayuran" },
  { name: "Buah" },
  { name: "Ikan" },
  { name: "Daging Sapi" },
  { name: "Tanaman Hias" },
];
const status = [
  { name: "Dalam Proses" },
  { name: "Selesai" },
  { name: "Dibatalkan" },
];
const InputDaftarProject = () => {
  const getDataCategory = (data) => {
    setCategory(data);
  };
  const getDataStatus = (data) => {
    setStatusProject(data);
  };

  const [category, setCategory] = useState("");
  const [statusProject, setStatusProject] = useState("");
  const [nameProject, setNameProject] = useState("");
  return (
    <div className="flex md:space-x-4  flex-col md:flex-row mx-12  justify-center mt-10">
      {/* iniput text  */}
      <div className="flex flex-col md:w-1/4">
        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold" htmlFor="name">
            Nama Project
          </label>
          <input
            className="border-2 border-gray-300 p-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            type="text"
            name="name"
            id="name"
            placeholder="Masukan Nama Project"
            onChange={(e) => setNameProject(e.target.value)}
          />
        </div>
      </div>
      {/* project category */}
      <div className="flex flex-col md:w-1/4">
        <label className="text-gray-700 font-semibold " htmlFor="name">
          Project Category
        </label>
        <ListBoxProject data={projectCategory} onSubmit={getDataCategory} />
      </div>
      {/* Status */}
      <div className="flex flex-col md:w-1/4">
        <label className="text-gray-700 font-semibold" htmlFor="name">
          Status
        </label>
        <ListBoxProject data={status} onSubmit={getDataStatus} />
      </div>
      {/* button submit */}
      <div className="  md:block md:self-end ">
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(
              "ini clg button submit",
              category,
              statusProject,
              nameProject
            );
          }}
          className=" w-full md:w-fit mt-5 bg-orange-600 px-3 py-2  text-lg font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-orange-500 rounded-lg "
        >
          Cari
        </button>
      </div>
    </div>
  );
};

export default InputDaftarProject;
