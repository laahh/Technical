import react from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ProductCategory from "./ProductCategory";
import ProductArea from "./ProductArea";
import ProductBanner from "./ProductBanner";
import ProductBanner1 from "./ProductBanner1";
import StartProduct from "./StartProduct";
import BlogArea from "./BlogArea";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Hero />
            <ProductCategory />
            <ProductArea />
            <ProductBanner1 />
            <BlogArea />
            <NewsLetter />
            <Footer />
        </div>
    );
};

export default Home;
