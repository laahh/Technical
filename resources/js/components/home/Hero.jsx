// import react
import React from "react";
// import Link from react router
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero-slider-area position-relative">
            <div className="swiper hero-slider-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide hero-slide-item">
                        <div className="container">
                            <div className="row align-items-center position-relative">
                                <div className="col-12 col-md-6">
                                    <div className="hero-slide-content">
                                        <div className="hero-slide-text-img">
                                            <img
                                                src="images/slider-text-theme.webp"
                                                width="427"
                                                height="232"
                                                alt="Image"
                                            />
                                        </div>
                                        <h2 className="hero-slide-title">
                                            CLEAN FRESH
                                        </h2>
                                        <p className="hero-slide-desc">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit ut
                                            aliquam, purus sit amet luctus
                                            venenatis.
                                        </p>
                                        <Link
                                            className="btn btn-border-dark"
                                            to="/product"
                                        >
                                            BUY NOW
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="hero-slide-thumb">
                                        <img
                                            src="images/slider-slider1.webp"
                                            width="841"
                                            height="832"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-slide-text-shape">
                            <img
                                src="images/slider-text1.webp"
                                width="70"
                                height="955"
                                alt="Image"
                            />
                        </div>
                        <div className="hero-slide-social-shape"></div>
                    </div>
                    <div className="swiper-slide hero-slide-item">
                        <div className="container">
                            <div className="row align-items-center position-relative">
                                <div className="col-12 col-md-6">
                                    <div className="hero-slide-content">
                                        <div className="hero-slide-text-img">
                                            <img
                                                src="images/slider-text-theme.webp"
                                                width="427"
                                                height="232"
                                                alt="Image"
                                            />
                                        </div>
                                        <h2 className="hero-slide-title">
                                            Facial Cream
                                        </h2>
                                        <p className="hero-slide-desc">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit ut
                                            aliquam, purus sit amet luctus
                                            venenatis.
                                        </p>
                                        <Link
                                            className="btn btn-border-dark"
                                            to="/product"
                                        >
                                            BUY NOW
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="hero-slide-thumb">
                                        <img
                                            src="images/slider-slider2.webp"
                                            width="841"
                                            height="832"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-slide-text-shape">
                            <img
                                src="/images/slider-text1.webp"
                                width="70"
                                height="955"
                                alt="Image"
                            />
                        </div>
                        <div className="hero-slide-social-shape"></div>
                    </div>
                </div>
                <div className="hero-slider-pagination"></div>
            </div>
            <div className="hero-slide-social-media">
                <a
                    href="https://www.pinterest.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa fa-pinterest-p"></i>
                </a>
                <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa fa-twitter"></i>
                </a>
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa fa-facebook"></i>
                </a>
            </div>
        </section>
    );
}

export default Hero;
