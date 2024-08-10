// react
import React from "react";
import { Link } from "react-router-dom";

function ProductArea() {
    return (
        <section className="section-space">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2 className="title">Top sale</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam, purus sit amet
                                luctus venenatis
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mb-n4 mb-sm-n10 g-3 g-sm-6">
                    <div className="col-6 col-lg-4 mb-4 mb-sm-9">
                        <div className="product-item">
                            <div className="product-thumb">
                                <Link
                                    className="d-block"
                                    to="product-details.html"
                                >
                                    <img
                                        src="images/shop-1.webp"
                                        width="370"
                                        height="450"
                                        alt="Image-HasTech"
                                    />
                                </Link>
                                <span className="flag-new">new</span>
                                <div className="product-action">
                                    <button
                                        type="button"
                                        className="product-action-btn action-btn-quick-view"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-QuickViewModal"
                                    >
                                        <i className="fa fa-expand"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="product-action-btn action-btn-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-CartAddModal"
                                    >
                                        <span>Add to cart</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="product-action-btn action-btn-wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-WishlistModal"
                                    >
                                        <i className="fa fa-heart-o"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="product-info">
                                <div className="product-rating">
                                    <div className="rating">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-half-o"></i>
                                    </div>
                                    <div className="reviews">150 reviews</div>
                                </div>
                                <h4 className="title">
                                    <Link to="product-details.html">
                                        Readable content DX22
                                    </Link>
                                </h4>
                                <div className="prices">
                                    <span className="price">Rp.210.00</span>
                                    <span className="price-old">300.00</span>
                                </div>
                            </div>
                            <div className="product-action-bottom">
                                <button
                                    type="button"
                                    className="product-action-btn action-btn-quick-view"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-QuickViewModal"
                                >
                                    <i className="fa fa-expand"></i>
                                </button>
                                <button
                                    type="button"
                                    className="product-action-btn action-btn-wishlist"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-WishlistModal"
                                >
                                    <i className="fa fa-heart-o"></i>
                                </button>
                                <button
                                    type="button"
                                    className="product-action-btn action-btn-cart"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-CartAddModal"
                                >
                                    <span>Add to cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 mb-4 mb-sm-9">
                        <div className="product-item">
                            <div className="product-thumb">
                                <Link
                                    className="d-block"
                                    to="product-details.html"
                                >
                                    <img
                                        src="images/shop-2.webp"
                                        width="370"
                                        height="450"
                                        alt="Image-HasTech"
                                    />
                                </Link>
                                <span className="flag-new">new</span>
                                <div className="product-action">
                                    <button
                                        type="button"
                                        className="product-action-btn action-btn-quick-view"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-QuickViewModal"
                                    >
                                        <i className="fa fa-expand"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="product-action-btn action-btn-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-CartAddModal"
                                    >
                                        <span>Add to cart</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="product-action-btn action-btn-wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-WishlistModal"
                                    >
                                        <i className="fa fa-heart-o"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="product-info">
                                <div className="product-rating">
                                    <div className="rating">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-half-o"></i>
                                    </div>
                                    <div className="reviews">150 reviews</div>
                                </div>
                                <h4 className="title">
                                    <Link to="product-details.html">
                                        Modern Eye Brush
                                    </Link>
                                </h4>
                                <div className="prices">
                                    <span className="price">Rp.210.00</span>
                                    <span className="price-old">300.00</span>
                                </div>
                            </div>
                            <div className="product-action-bottom">
                                <button
                                    type="button"
                                    className="product-action-btn action-btn-quick-view"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-QuickViewModal"
                                >
                                    <i className="fa fa-expand"></i>
                                </button>
                                <button
                                    type="button"
                                    className="product-action-btn action-btn-wishlist"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-WishlistModal"
                                >
                                    <i className="fa fa-heart-o"></i>
                                </button>
                                <button
                                    type="button"
                                    className="product-action-btn action-btn-cart"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-CartAddModal"
                                >
                                    <span>Add to cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 mb-4 mb-sm-9">
                        <div className="product-item">
                            <div className="product-thumb">
                                <Link
                                    className="d-block"
                                    to="product-details.html"
                                >
                                    <img
                                        src="images/shop-3.webp"
                                        width="370"
                                        height="450"
                                        alt="Image-HasTech"
                                    />
                                </Link>
                                <span className="flag-new">new</span>
                                <div className="product-action">
                                    <button
                                        type="button"
                                        className="product-action-btn action-btn-quick-view"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-QuickViewModal"
                                    >
                                        <i className="fa fa-expand"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="product-action-btn action-btn-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-CartAddModal"
                                    >
                                        <span>Add to cart</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="product-action-btn action-btn-wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-WishlistModal"
                                    >
                                        <i className="fa fa-heart-o"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="product-info">
                                <div className="product-rating">
                                    <div className="rating">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-half-o"></i>
                                    </div>
                                    <div className="reviews">150 reviews</div>
                                </div>
                                <h4 className="title">
                                    <Link to="product-details.html">
                                        Voyage face cleaner
                                    </Link>
                                </h4>
                                <div className="prices">
                                    <span className="price">Rp.210.00</span>
                                    <span className="price-old">300.00</span>
                                </div>
                            </div>
                            <div className="product-action-bottom">
                                <button
                                    type="button"
                                    className="product-action-btn action-btn-quick-view"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-QuickViewModal"
                                >
                                    <i className="fa fa-expand"></i>
                                </button>
                                <button
                                    type="button"
                                    className="product-action-btn action-btn-wishlist"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-WishlistModal"
                                >
                                    <i className="fa fa-heart-o"></i>
                                </button>
                                <button
                                    type="button"
                                    className="product-action-btn action-btn-cart"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-CartAddModal"
                                >
                                    <span>Add to cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 mb-4 mb-sm-9">
                        <div className="product-item">
                            <div className="product-thumb">
                                <Link
                                    className="d-block"
                                    to="product-details.html"
                                >
                                    <img
                                        src="images/shop-4.webp"
                                        width="370"
                                        height="450"
                                        alt="Image-HasTech"
                                    />
                                </Link>
                                <span className="flag-new">new</span>
                                <div className="product-action">
                                    <button
                                        type="button"
                                        className="product-action-btn action-btn-quick-view"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-QuickViewModal"
                                    >
                                        <i className="fa fa-expand"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="product-action-btn action-btn-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-CartAddModal"
                                    >
                                        <span>Add to cart</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="product-action-btn action-btn-wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-WishlistModal"
                                    >
                                        <i className="fa fa-heart-o"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="product-info">
                                <div className="product-rating">
                                    <div className="rating">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-half-o"></i>
                                    </div>
                                    <div className="reviews">150 reviews</div>
                                </div>
                                <h4 className="title">
                                    <Link to="product-details.html">
                                        Impulse Duffle
                                    </Link>
                                </h4>
                                <div className="prices">
                                    <span className="price">Rp.210.00</span>
                                    <span className="price-old">300.00</span>
                                </div>
                            </div>
                            <div className="product-action-bottom">
                                <button
                                    type="button"
                                    className="product-action-btn action-btn-quick-view"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-QuickViewModal"
                                >
                                    <i className="fa fa-expand"></i>
                                </button>
                                <button
                                    type="button"
                                    className="product-action-btn action-btn-wishlist"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-WishlistModal"
                                >
                                    <i className="fa fa-heart-o"></i>
                                </button>
                                <button
                                    type="button"
                                    className="product-action-btn action-btn-cart"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-CartAddModal"
                                >
                                    <span>Add to cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 mb-4 mb-sm-9">
                        <div className="product-item">
                            <div className="product-thumb">
                                <Link
                                    className="d-block"
                                    to="product-details.html"
                                >
                                    <img
                                        src="images/shop-5.webp"
                                        width="370"
                                        height="450"
                                        alt="Image-HasTech"
                                    />
                                </Link>
                                <span className="flag-new">new</span>
                                <div className="product-action">
                                    <button
                                        type="button"
                                        className="product-action-btn action-btn-quick-view"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-QuickViewModal"
                                    >
                                        <i className="fa fa-expand"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="product-action-btn action-btn-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-CartAddModal"
                                    >
                                        <span>Add to cart</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="product-action-btn action-btn-wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-WishlistModal"
                                    >
                                        <i className="fa fa-heart-o"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="product-info">
                                <div className="product-rating">
                                    <div className="rating">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-half-o"></i>
                                    </div>
                                    <div className="reviews">150 reviews</div>
                                </div>
                                <h4 className="title">
                                    <Link to="product-details.html">
                                        Sprite Yoga Straps1
                                    </Link>
                                </h4>
                                <div className="prices">
                                    <span className="price">Rp.210.00</span>
                                    <span className="price-old">300.00</span>
                                </div>
                            </div>
                            <div className="product-action-bottom">
                                <button
                                    type="button"
                                    className="product-action-btn action-btn-quick-view"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-QuickViewModal"
                                >
                                    <i className="fa fa-expand"></i>
                                </button>
                                <button
                                    type="button"
                                    className="product-action-btn action-btn-wishlist"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-WishlistModal"
                                >
                                    <i className="fa fa-heart-o"></i>
                                </button>
                                <button
                                    type="button"
                                    className="product-action-btn action-btn-cart"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-CartAddModal"
                                >
                                    <span>Add to cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 mb-4 mb-sm-9">
                        <div className="product-item">
                            <div className="product-thumb">
                                <Link
                                    className="d-block"
                                    to="product-details.html"
                                >
                                    <img
                                        src="images/shop-6.webp"
                                        width="370"
                                        height="450"
                                        alt="Image-HasTech"
                                    />
                                </Link>
                                <span className="flag-new">new</span>
                                <div className="product-action">
                                    <button
                                        type="button"
                                        className="product-action-btn action-btn-quick-view"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-QuickViewModal"
                                    >
                                        <i className="fa fa-expand"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="product-action-btn action-btn-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-CartAddModal"
                                    >
                                        <span>Add to cart</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="product-action-btn action-btn-wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-WishlistModal"
                                    >
                                        <i className="fa fa-heart-o"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="product-info">
                                <div className="product-rating">
                                    <div className="rating">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-half-o"></i>
                                    </div>
                                    <div className="reviews">150 reviews</div>
                                </div>
                                <h4 className="title">
                                    <Link to="product-details.html">
                                        Fusion facial cream
                                    </Link>
                                </h4>
                                <div className="prices">
                                    <span className="price">Rp.210.00</span>
                                    <span className="price-old">300.00</span>
                                </div>
                            </div>
                            <div className="product-action-bottom">
                                <button
                                    type="button"
                                    className="product-action-btn action-btn-quick-view"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-QuickViewModal"
                                >
                                    <i className="fa fa-expand"></i>
                                </button>
                                <button
                                    type="button"
                                    className="product-action-btn action-btn-wishlist"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-WishlistModal"
                                >
                                    <i className="fa fa-heart-o"></i>
                                </button>
                                <button
                                    type="button"
                                    className="product-action-btn action-btn-cart"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-CartAddModal"
                                >
                                    <span>Add to cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductArea;
