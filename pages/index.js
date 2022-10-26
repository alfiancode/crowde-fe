import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Banner from "../components/Banner";
import CaraMengajukanProyek from "../components/CaraMengajukanProyek";
import CeritaCrowde from "../components/CeritaCrowde";
import DukungPetani from "../components/DukungPetani";
import HotProject from "../components/HotProject";
import KeuntunganUntukPetani from "../components/KeuntunganUntukPetani";
import Layout from "../components/layout/Layout";

export default function Home() {
  // fecth data with react-query
    // fetch with axios
    const fetchProject = async () => {
      return await axios.get("https://dummyjson.com/products");
    };
  
    // fetch data with axios and react query
    const { data, isLoading, isError, refetch, isFetching } = useQuery(
      ["project"],
      fetchProject,
   
    );
    if(isLoading) return <p>Loading...</p>
  
    if (isError) {
      return <div>Something went wrong</div>;
    }
  return <div >
    <Layout>
      <Banner/>
      <HotProject data={data}/>
      <DukungPetani/>
      <CaraMengajukanProyek/>
      <KeuntunganUntukPetani/>
      <CeritaCrowde/>
    </Layout>
  </div>;
}
