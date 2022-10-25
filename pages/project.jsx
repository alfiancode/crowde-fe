import React from "react";
import HotProjectSection from "../components/HotProjectSection";
import InputDaftarProject from "../components/InputDaftarProject";

import Layout from "../components/layout/Layout";
import TitleDaftarProejct from "../components/TitleDaftarProejct";

const project = () => {
  return (
    <Layout>
      <TitleDaftarProejct />
      <InputDaftarProject />
      <HotProjectSection />
    </Layout>
  );
};

export default project;
