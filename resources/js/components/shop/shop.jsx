import React from "react";
import { Link } from "react-router-dom";
import ProductBanner from "../home/ProductBanner";
import ProductCategory from "../home/ProductCategory";
import ProductArea from "../home/ProductArea";
import Footer from "../home/Footer";
// import js

import Navbar1 from "../home/Navbar1";
import ProductBanner1 from "../home/ProductBanner1";

function Shop() {
    return (
        <>
            <main className="main-content">
                <section
                    className="page-header-area pt-10 pb-9"
                    style={{ backgroundColor: "#FFF3DA" }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="page-header-st3-content text-center text-md-start">
                                    <ol className="breadcrumb justify-content-center justify-content-md-start">
                                        <li className="breadcrumb-item">
                                            <a
                                                className="text-dark"
                                                href="index.html"
                                            >
                                                Home
                                            </a>
                                        </li>
                                        <li
                                            className="breadcrumb-item active text-dark"
                                            aria-current="page"
                                        >
                                            Products
                                        </li>
                                    </ol>
                                    <h2 className="page-header-title">
                                        All Products
                                    </h2>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <h5 className="showing-pagination-results mt-5 mt-md-9 text-center text-md-end">
                                    Showing 09 Results
                                </h5>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="shop-top-bar-area">
                    <div className="container">
                        <div className="shop-top-bar">
                            <select className="select-shoing">
                                <option data-display="Trending">
                                    Trending
                                </option>
                                <option value="1">Featured</option>
                                <option value="2">Best Selling</option>
                                <option value="3">Alphabetically, A-Z</option>
                                <option value="4">Alphabetically, Z-A</option>
                                <option value="5">Price, low to high</option>
                                <option value="6">Price, high to low</option>
                                <option value="7">Date, new to old</option>
                                <option value="8">Date, old to new</option>
                            </select>

                            <div className="select-on-sale d-flex d-md-none">
                                <span>On Sale :</span>
                                <select
                                    defaultValue="option1"
                                    className="select-on-sale-form"
                                >
                                    <option value="option1">Yes</option>
                                    <option value="option1">No</option>
                                </select>
                            </div>

                            <div className="select-price-range">
                                <h4 className="title">Pricing</h4>
                                <div className="select-price-range-slider">
                                    <div
                                        className="slider-range"
                                        id="slider-range"
                                    ></div>
                                    <div className="slider-labels">
                                        <span id="slider-range-value1"></span>
                                        <span>-</span>
                                        <span id="slider-range-value2"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="select-on-sale d-none d-md-flex">
                                <span>On Sale :</span>
                                <select className="select-on-sale-form">
                                    <option selected>Yes</option>
                                    <option value="1">No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductCategory />
                <ProductArea />
                <ProductBanner1 />
                <Footer />
            </main>
        </>
    );
}

export default Shop;
