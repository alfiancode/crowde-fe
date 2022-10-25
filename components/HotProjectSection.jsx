import React from "react";
import ItemHotProject from "./layout/ItemHotProject";

const HotProjectSection = () => {
  return (
    <div className=" flex w-full flex-wrap  justify-center  bg-slate-200 mt-20">
      <ItemHotProject addcss={"my-16"} />
      <ItemHotProject addcss={"my-16"} />

      <ItemHotProject addcss={"my-16"} />
      <ItemHotProject addcss={"my-16"} />
      <ItemHotProject addcss={"my-16"} />
      <ItemHotProject addcss={"my-16"} />
      <ItemHotProject addcss={"my-16"} />
      <ItemHotProject addcss={"my-16"} />

      <ItemHotProject addcss={"my-16"} />
    </div>
  );
};

export default HotProjectSection;
