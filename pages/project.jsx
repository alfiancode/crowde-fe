import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import HotProjectSection from "../components/HotProjectSection";
import InputDaftarProject from "../components/InputDaftarProject";

import Layout from "../components/layout/Layout";
import TitleDaftarProejct from "../components/TitleDaftarProejct";

const Project = () => {
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
  // fetch with axios
  const fetchProject = async () => {
    return await axios.get("https://dummyjson.com/products");
  };

  // fetch data with axios and react query
  const { data, isLoading, isError, refetch, isFetching } = useQuery(
    ["project"],
    fetchProject,
    {
      //  fetch data when button search clicked
      enabled: false,
    }
  );

  if (isError) {
    return <div>Something went wrong</div>;
  }
  // console.log(data);
  return (
    <Layout>
      <TitleDaftarProejct />
      <div className="flex flex-col md:flex-row mx-atuo w-full h-full items-center justify-center md:items-end ">
        <InputDaftarProject
          status={status}
          projectCategory={projectCategory}
          getDataCategory={getDataCategory}
          getDataStatus={getDataStatus}
          getNameProject={getNameProject}
        />
        <button
          onClick={refetch}
          className="mt-10 md:mt-0 h-full w-3/4 md:w-fit  flex bg-orange-600 px-3 py-2  text-lg font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-orange-500 rounded-lg justify-center  "
        >
          cari
        </button>
      </div>
      <HotProjectSection
        data={data}
        isLoading={isLoading}
        isFetching={isFetching}
      />
    </Layout>
  );
};

export default Project;
