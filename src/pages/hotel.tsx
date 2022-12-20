import Banner from "../components/banner";
import Feature from "../components/feature";
import Footer from "../components/footer";
import FormSearch from "../components/formSearch";
import Header from "../components/header";
import HotelGrid from "../components/hotelGrid";

const Hotel: React.FC = () => {
  return (
    <div className="bg-gray-50 h-screen">
      <Header />
      <Banner />
      <Feature />
      <HotelGrid />
      <FormSearch />
      <Footer />
    </div>
  );
};

export default Hotel;
