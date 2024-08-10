import React from "react";
import { Link } from "react-router-dom";
function BlogArea() {
    return (
        <section class="section-space">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-title text-center">
                            <h2 class="title">Blog posts</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam, purus sit amet
                                luctus venenatis
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row mb-n9">
                    <div class="col-sm-6 col-lg-4 mb-8">
                        <div class="post-item">
                            <Link to="blog-details.html" class="thumb">
                                <img
                                    src="images/blog-1.webp"
                                    width="370"
                                    height="320"
                                    alt="Image-HasTech"
                                />
                            </Link>
                            <div class="content">
                                <Link class="post-category" to="blog.html">
                                    beauty
                                </Link>
                                <h4 class="title">
                                    <Link to="blog-details.html">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipiscing.
                                    </Link>
                                </h4>
                                <ul class="meta">
                                    <li class="author-info">
                                        <span>By:</span>{" "}
                                        <Link to="blog.html">
                                            Tomas De Momen
                                        </Link>
                                    </li>
                                    <li class="post-date">February 13, 2022</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4 mb-8">
                        <div class="post-item">
                            <Link to="blog-details.html" class="thumb">
                                <img
                                    src="images/blog-2.webp"
                                    width="370"
                                    height="320"
                                    alt="Image-HasTech"
                                />
                            </Link>
                            <div class="content">
                                <Link
                                    class="post-category post-category-two"
                                    data-bg-color="#A49CFF"
                                    to="blog.html"
                                >
                                    beauty
                                </Link>
                                <h4 class="title">
                                    <Link to="blog-details.html">
                                        Facial Scrub is natural treatment for
                                        face.
                                    </Link>
                                </h4>
                                <ul class="meta">
                                    <li class="author-info">
                                        <span>By:</span>{" "}
                                        <Link to="blog.html">
                                            Tomas De Momen
                                        </Link>
                                    </li>
                                    <li class="post-date">February 13, 2022</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4 mb-8">
                        <div class="post-item">
                            <Link to="blog-details.html" class="thumb">
                                <img
                                    src="images/blog-3.webp"
                                    width="370"
                                    height="320"
                                    alt="Image-HasTech"
                                />
                            </Link>
                            <div class="content">
                                <Link
                                    class="post-category post-category-three"
                                    data-bg-color="#9CDBFF"
                                    to="blog.html"
                                >
                                    beauty
                                </Link>
                                <h4 class="title">
                                    <Link to="blog-details.html">
                                        Benefit of Hot Ston Spa for your health
                                        &amp; life.
                                    </Link>
                                </h4>
                                <ul class="meta">
                                    <li class="author-info">
                                        <span>By:</span>{" "}
                                        <Link to="blog.html">
                                            Tomas De Momen
                                        </Link>
                                    </li>
                                    <li class="post-date">February 13, 2022</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogArea;
