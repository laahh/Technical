import React from "react";
import { Link } from "react-router-dom";

function ProductBanner1() {
    return (
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-lg-4">
                        <Link to="product.html" class="product-banner-item">
                            <img
                                src="images/banner-1.webp"
                                width="370"
                                height="370"
                                alt="Image-HasTech"
                            />
                        </Link>
                    </div>
                    <div class="col-sm-6 col-lg-4 mt-sm-0 mt-6">
                        <Link to="product.html" class="product-banner-item">
                            <img
                                src="images/banner-2.webp"
                                width="370"
                                height="370"
                                alt="Image-HasTech"
                            />
                        </Link>
                    </div>
                    <div class="col-sm-6 col-lg-4 mt-lg-0 mt-6">
                        <Link to="product.html" class="product-banner-item">
                            <img
                                src="images/banner-3.webp"
                                width="370"
                                height="370"
                                alt="Image-HasTech"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductBanner1;
