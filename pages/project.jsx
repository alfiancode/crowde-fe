import React from "react";
import InputDaftarProject from "../components/InputDaftarProject";

import Layout from "../components/layout/Layout";
import TitleDaftarProejct from "../components/TitleDaftarProejct";

const project = () => {
  return (
    <Layout>
      <TitleDaftarProejct />
      <InputDaftarProject />
    </Layout>
  );
};

export default project;
