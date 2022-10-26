import React from "react";
import ItemHotProject from "./layout/ItemHotProject";

const HotProjectSection = (data) => {
  const dataHotProject = data?.data?.data?.products;
  console.log("hot project page", dataHotProject);
  if (data.isLoading || data.isFetching) {
    return <div>tes</div>;
  }
  return (
    <div className=" flex w-full flex-wrap  justify-center  px-1  bg-slate-200 mt-20">
      {/* map dataHotProject */}
      {dataHotProject?.map((item, index) => {
        return <ItemHotProject addcss={"my-16"} item={item} key={index} />;
      })}
    </div>
  );
};

export default HotProjectSection;
