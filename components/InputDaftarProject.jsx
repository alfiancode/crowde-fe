import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiCheckCircle, ChevronUpDownIcon } from "react-icons/hi";
import ListBoxProject from "./ListBoxProject";

const InputDaftarProject = ({
  projectCategory,
  status,
  getDataStatus,
  getDataCategory,
  getNameProject,
}) => {
  return (
    <div className="flex md:space-x-4  flex-col md:flex-row md:mx-12  justify-center mt-10 w-3/4">
      {/* iniput text  */}
      <div className="flex flex-col w-full ">
        <div className="flex flex-col ">
          <label className="text-gray-700 font-semibold" htmlFor="name">
            Nama Project
          </label>
          <input
            className="border-2 border-gray-300 p-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            type="text"
            name="name"
            id="name"
            placeholder="Masukan Nama Project"
            onChange={(e) => getNameProject(e.target.value)}
          />
        </div>
      </div>
      {/* project category */}
      <div className="flex flex-col  w-full">
        <label className="text-gray-700 font-semibold " htmlFor="name">
          Project Category
        </label>
        <ListBoxProject data={projectCategory} getData={getDataCategory} />
      </div>
      {/* Status */}
      <div className="flex flex-col  w- w-full">
        <label className="text-gray-700 font-semibold" htmlFor="name">
          Status
        </label>
        <ListBoxProject data={status} getData={getDataStatus} />
      </div>
    </div>
  );
};

export default InputDaftarProject;
