import React from "react";
import { Link } from "react-router-dom";

function ProductCategory() {
    return (
        <section className="section-space pb-0">
            <div className="container">
                <div className="row g-3 g-sm-6">
                    <div className="col-6 col-lg-4 col-lg-2 col-xl-2">
                        <Link to="/product" className="product-category-item">
                            <img
                                className="icon"
                                src="images/category-1.webp"
                                width="70"
                                height="80"
                                alt="Image-HasTech"
                            />
                            <h3 className="title">Hare care</h3>
                            <span className="flag-new">new</span>
                        </Link>
                    </div>
                    <div className="col-6 col-lg-4 col-lg-2 col-xl-2">
                        <Link
                            to="/product"
                            className="product-category-item"
                            data-bg-color="#FFEDB4"
                        >
                            <img
                                className="icon"
                                src="images/category-2.webp"
                                width="80"
                                height="80"
                                alt="Image-HasTech"
                            />
                            <h3 className="title">Skin care</h3>
                        </Link>
                    </div>
                    <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-lg-0 mt-sm-6 mt-4">
                        <Link
                            to="/product"
                            className="product-category-item"
                            data-bg-color="#DFE4FF"
                        >
                            <img
                                className="icon"
                                src="images/category-3.webp"
                                width="80"
                                height="80"
                                alt="Image-HasTech"
                            />
                            <h3 className="title">Lip stick</h3>
                        </Link>
                    </div>
                    <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
                        <Link
                            to="/product"
                            className="product-category-item"
                            data-bg-color="#FFEACC"
                        >
                            <img
                                className="icon"
                                src="images/category-4.webp"
                                width="80"
                                height="80"
                                alt="Image-HasTech"
                            />
                            <h3 className="title">Face skin</h3>
                            <span data-bg-color="#835BF4" className="flag-new">
                                sale
                            </span>
                        </Link>
                    </div>
                    <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
                        <Link
                            to="/product"
                            className="product-category-item"
                            data-bg-color="#FFDAE0"
                        >
                            <img
                                className="icon"
                                src="images/category-5.webp"
                                width="80"
                                height="80"
                                alt="Image-HasTech"
                            />
                            <h3 className="title">Blusher</h3>
                        </Link>
                    </div>
                    <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
                        <Link
                            to="/product"
                            className="product-category-item"
                            data-bg-color="#FFF3DA"
                        >
                            <img
                                className="icon"
                                src="images/category-6.webp"
                                width="80"
                                height="80"
                                alt="Image-HasTech"
                            />
                            <h3 className="title">Natural</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductCategory;
