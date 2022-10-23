import Banner from "../components/Banner";
import CaraMengajukanProyek from "../components/CaraMengajukanProyek";
import DukungPetani from "../components/DukungPetani";
import HotProject from "../components/HotProject";
import KeuntunganUntukPetani from "../components/KeuntunganUntukPetani";
import Layout from "../components/layout/Layout";

export default function Home() {
  return <div >
    <Layout>
      <Banner/>
      <HotProject/>
      <DukungPetani/>
      <CaraMengajukanProyek/>
      <KeuntunganUntukPetani/>
    </Layout>
  </div>;
}
