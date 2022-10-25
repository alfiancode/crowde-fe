import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import HotProjectSection from "../components/HotProjectSection";
import InputDaftarProject from "../components/InputDaftarProject";

import Layout from "../components/layout/Layout";
import TitleDaftarProejct from "../components/TitleDaftarProejct";

const project = () => {
  const getDataCategory = (data) => {
    setCategory(data);
    console.log("atas", data);
  };
  const getDataStatus = (data) => {
    setStatusProject(data);
    console.log("coba ya", data);
  };
  const getNameProject = (data) => {
    setNameProject(data);
  };

  const [category, setCategory] = useState("");
  const [statusProject, setStatusProject] = useState("");
  const [nameProject, setNameProject] = useState("");

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
  // fetch data with axios and react query
  // const { data, isLoading, isError } = useQuery(["project"], () =>
  //   axios.get("https://dummyjson.com/posts")
  // );
  // if (isLoading) {
  //   return null;
  // }
  // console.log(data);
  return (
    <Layout>
      <TitleDaftarProejct />\
      <div className="flex flex-col md:flex-row mx-atuo w-full h-full items-center justify-center md:items-end ">
        <InputDaftarProject
          status={status}
          projectCategory={projectCategory}
          getDataCategory={getDataCategory}
          getDataStatus={getDataStatus}
          getNameProject={getNameProject}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("coba ya", category);
            console.log("coba ya", statusProject);
            console.log("coba ya", nameProject);
          }}
          className="mt-10 md:mt-0 h-full w-3/4 md:w-fit  flex bg-orange-600 px-3 py-2  text-lg font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-orange-500 rounded-lg justify-center  "
        >
          cari
        </button>
      </div>
      <HotProjectSection />
    </Layout>
  );
};

export default project;
