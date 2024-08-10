import React from "react";
import { Link } from "react-router-dom";

function Blog() {
    return (
        <>
            <div className="wrapper">
                <main className="main-content">
                    <nav
                        aria-label="breadcrumb"
                        className="breadcrumb-style1 mb-10"
                    >
                        <div className="container">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item">
                                    <Link to="index.html">Home</Link>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    Blog
                                </li>
                            </ol>
                        </div>
                    </nav>

                    <section className="section-space pt-0">
                        <div className="container">
                            <div className="row justify-content-between flex-xl-row-reverse">
                                <div className="col-xl-8">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-4 col-xl-6 mb-8">
                                            <div className="post-item">
                                                <Link
                                                    to="blog-details.html"
                                                    className="thumb"
                                                >
                                                    <img
                                                        src="images/blog-1.webp"
                                                        width="370"
                                                        height="320"
                                                        alt="Image-HasTech"
                                                    />
                                                </Link>
                                                <div className="content">
                                                    <Link
                                                        className="post-category"
                                                        to="blog.html"
                                                    >
                                                        beauty
                                                    </Link>
                                                    <h4 className="title">
                                                        <Link to="blog-details.html">
                                                            Lorem ipsum dolor
                                                            sit amet consectetur
                                                            adipiscing.
                                                        </Link>
                                                    </h4>
                                                    <ul className="meta">
                                                        <li className="author-info">
                                                            <span>By:</span>{" "}
                                                            <Link to="blog.html">
                                                                Tomas De Momen
                                                            </Link>
                                                        </li>
                                                        <li className="post-date">
                                                            February 13, 2021
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-4 col-xl-6 mb-8">
                                            <div className="post-item">
                                                <Link
                                                    to="blog-details.html"
                                                    className="thumb"
                                                >
                                                    <img
                                                        src="images/blog-2.webp"
                                                        width="370"
                                                        height="320"
                                                        alt="Image-HasTech"
                                                    />
                                                </Link>
                                                <div className="content">
                                                    <Link
                                                        className="post-category post-category-two"
                                                        data-bg-color="#A49CFF"
                                                        to="blog.html"
                                                    >
                                                        beauty
                                                    </Link>
                                                    <h4 className="title">
                                                        <Link to="blog-details.html">
                                                            Lorem ipsum dolor
                                                            sit amet consectetur
                                                            adipiscing.
                                                        </Link>
                                                    </h4>
                                                    <ul className="meta">
                                                        <li className="author-info">
                                                            <span>By:</span>{" "}
                                                            <Link to="blog.html">
                                                                Tomas De Momen
                                                            </Link>
                                                        </li>
                                                        <li className="post-date">
                                                            February 13, 2021
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-4 col-xl-6 mb-8">
                                            <div className="post-item">
                                                <Link
                                                    to="blog-details.html"
                                                    className="thumb"
                                                >
                                                    <img
                                                        src="images/blog-3.webp"
                                                        width="370"
                                                        height="320"
                                                        alt="Image-HasTech"
                                                    />
                                                </Link>
                                                <div className="content">
                                                    <Link
                                                        className="post-category post-category-three"
                                                        data-bg-color="#9CDBFF"
                                                        to="blog.html"
                                                    >
                                                        beauty
                                                    </Link>
                                                    <h4 className="title">
                                                        <Link to="blog-details.html">
                                                            Lorem ipsum dolor
                                                            sit amet consectetur
                                                            adipiscing.
                                                        </Link>
                                                    </h4>
                                                    <ul className="meta">
                                                        <li className="author-info">
                                                            <span>By:</span>{" "}
                                                            <Link to="blog.html">
                                                                Tomas De Momen
                                                            </Link>
                                                        </li>
                                                        <li className="post-date">
                                                            February 13, 2021
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-4 col-xl-6 mb-8">
                                            <div className="post-item">
                                                <Link
                                                    to="blog-details.html"
                                                    className="thumb"
                                                >
                                                    <img
                                                        src="images/blog-5.webp"
                                                        width="370"
                                                        height="320"
                                                        alt="Image-HasTech"
                                                    />
                                                </Link>
                                                <div className="content">
                                                    <Link
                                                        className="post-category"
                                                        to="blog.html"
                                                    >
                                                        beauty
                                                    </Link>
                                                    <h4 className="title">
                                                        <Link to="blog-details.html">
                                                            Lorem ipsum dolor
                                                            sit amet consectetur
                                                            adipiscing.
                                                        </Link>
                                                    </h4>
                                                    <ul className="meta">
                                                        <li className="author-info">
                                                            <span>By:</span>{" "}
                                                            <Link to="blog.html">
                                                                Tomas De Momen
                                                            </Link>
                                                        </li>
                                                        <li className="post-date">
                                                            February 13, 2021
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-4 col-xl-6 mb-8">
                                            <div className="post-item">
                                                <Link
                                                    to="blog-details.html"
                                                    className="thumb"
                                                >
                                                    <img
                                                        src="images/blog-6.webp"
                                                        width="370"
                                                        height="320"
                                                        alt="Image-HasTech"
                                                    />
                                                </Link>
                                                <div className="content">
                                                    <Link
                                                        className="post-category post-category-two"
                                                        data-bg-color="#A49CFF"
                                                        to="blog.html"
                                                    >
                                                        beauty
                                                    </Link>
                                                    <h4 className="title">
                                                        <Link to="blog-details.html">
                                                            Lorem ipsum dolor
                                                            sit amet consectetur
                                                            adipiscing.
                                                        </Link>
                                                    </h4>
                                                    <ul className="meta">
                                                        <li className="author-info">
                                                            <span>By:</span>{" "}
                                                            <Link to="blog.html">
                                                                Tomas De Momen
                                                            </Link>
                                                        </li>
                                                        <li className="post-date">
                                                            February 13, 2021
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-4 col-xl-6 mb-8">
                                            <div className="post-item">
                                                <Link
                                                    to="blog-details.html"
                                                    className="thumb"
                                                >
                                                    <img
                                                        src="images/blog-7.webp"
                                                        width="370"
                                                        height="320"
                                                        alt="Image-HasTech"
                                                    />
                                                </Link>
                                                <div className="content">
                                                    <Link
                                                        className="post-category post-category-three"
                                                        data-bg-color="#9CDBFF"
                                                        to="blog.html"
                                                    >
                                                        beauty
                                                    </Link>
                                                    <h4 className="title">
                                                        <Link to="blog-details.html">
                                                            Lorem ipsum dolor
                                                            sit amet consectetur
                                                            adipiscing.
                                                        </Link>
                                                    </h4>
                                                    <ul className="meta">
                                                        <li className="author-info">
                                                            <span>By:</span>{" "}
                                                            <Link to="blog.html">
                                                                Tomas De Momen
                                                            </Link>
                                                        </li>
                                                        <li className="post-date">
                                                            February 13, 2021
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <ul className="pagination justify-content-center me-auto ms-auto mt-7 mb-8 mb-xl-0">
                                                <li className="page-item">
                                                    <Link
                                                        className="page-link previous"
                                                        to="product.html"
                                                        aria-label="Previous"
                                                    >
                                                        <span
                                                            className="fa fa-chevron-left"
                                                            aria-hidden="true"
                                                        ></span>
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link
                                                        className="page-link"
                                                        to="product.html"
                                                    >
                                                        01
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link
                                                        className="page-link"
                                                        to="product.html"
                                                    >
                                                        02
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link
                                                        className="page-link"
                                                        to="product.html"
                                                    >
                                                        03
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link
                                                        className="page-link"
                                                        to="product.html"
                                                    >
                                                        ....
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link
                                                        className="page-link next"
                                                        to="product.html"
                                                        aria-label="Next"
                                                    >
                                                        <span
                                                            className="fa fa-chevron-right"
                                                            aria-hidden="true"
                                                        ></span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="blog-sidebar-widget">
                                        <div className="blog-search-widget">
                                            <form action="#">
                                                <input
                                                    type="search"
                                                    placeholder="Search Here"
                                                />
                                                <button type="submit">
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                        <div className="blog-widget">
                                            <h4 className="blog-widget-title">
                                                Popular Categoris
                                            </h4>
                                            <ul className="blog-widget-category">
                                                <li>
                                                    <Link to="blog.html">
                                                        Accesasories{" "}
                                                        <span>(6)</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="blog.html">
                                                        Computer{" "}
                                                        <span>(4)</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="blog.html">
                                                        Covid-19{" "}
                                                        <span>(2)</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="blog.html">
                                                        Electronics{" "}
                                                        <span>(12)</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="blog.html">
                                                        Furniture{" "}
                                                        <span>(9)</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="blog-widget">
                                            <h4 className="blog-widget-title">
                                                Recent Posts
                                            </h4>
                                            <div className="blog-widget-post">
                                                <div className="blog-widget-single-post">
                                                    <Link to="blog-details.html">
                                                        <img
                                                            src="images/blog-s1.webp"
                                                            width="75"
                                                            height="78"
                                                            alt="Images"
                                                        />
                                                        <span className="title">
                                                            Lorem ipsum dolor
                                                            sit amet conse
                                                            adipis.
                                                        </span>
                                                    </Link>
                                                    <span className="date">
                                                        Sep 24,2022
                                                    </span>
                                                </div>
                                                <div className="blog-widget-single-post">
                                                    <Link to="blog-details.html">
                                                        <img
                                                            src="images/blog-s2.webp"
                                                            width="75"
                                                            height="78"
                                                            alt="Images"
                                                        />
                                                        <span className="title">
                                                            Lorem ipsum dolor
                                                            sit amet conse
                                                            adipis.
                                                        </span>
                                                    </Link>
                                                    <span className="date">
                                                        Sep 25,2022
                                                    </span>
                                                </div>
                                                <div className="blog-widget-single-post">
                                                    <Link to="blog-details.html">
                                                        <img
                                                            src="images/blog-s3.webp"
                                                            width="75"
                                                            height="78"
                                                            alt="Images"
                                                        />
                                                        <span className="title">
                                                            Lorem ipsum dolor
                                                            sit amet conse
                                                            adipis.
                                                        </span>
                                                    </Link>
                                                    <span className="date">
                                                        Sep 26,2022
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-widget mb-0">
                                            <h4 className="blog-widget-title">
                                                Popular Tags
                                            </h4>
                                            <ul className="blog-widget-tags">
                                                <li>
                                                    <Link to="blog.html">
                                                        Beauty
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="blog.html">
                                                        MakeupArtist
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="blog.html">
                                                        Makeup
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="blog.html">
                                                        Hair
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="blog.html">
                                                        Nails
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="blog.html">
                                                        Hairstyle
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="blog.html">
                                                        Skincare
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-space pt-0">
                        <div className="container">
                            <div
                                className="newsletter-content-wrap"
                                data-bg-img="assets/images/photos/bg1.webp"
                            >
                                <div className="newsletter-content">
                                    <div className="section-title mb-0">
                                        <h2 className="title">Join with us</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit ut
                                            aliquam.
                                        </p>
                                    </div>
                                </div>
                                <div className="newsletter-form">
                                    <form>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="enter your email"
                                        />
                                        <button
                                            className="btn-submit"
                                            type="submit"
                                        >
                                            <i className="fa fa-paper-plane"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}

export default Blog;
