import Banner from "../components/Layout/Banner";
 import Category from "../components/Product/Category"
import ExploreProducts from "../components/Product/ExploreProducts";
import MusicBanner from "../components/Layout/MusicBanner";
import Selling from "../components/Product/Selling"
import FlashSale from "../components/Product/FlashSale";

const Home = () => {
  return (
    <main>
      <Banner/>
      <FlashSale/>
      <Category/>
      <Selling/>
      <MusicBanner/>
      <ExploreProducts />
    </main>
  );
};

export default Home;
