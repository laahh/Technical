import React from "react";
import { Link } from "react-router-dom";

function ProductBanner() {
    return (
        <section class="section-space">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-title text-center">
                            <h2 class="title">Top sale</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam, purus sit amet
                                luctus venenatis
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row mb-n4 mb-sm-n10 g-3 g-sm-6">
                    <div class="col-6 col-lg-4 mb-4 mb-sm-9">
                        <div class="product-item">
                            <div class="product-thumb">
                                <Link class="d-block" to="product-details.html">
                                    <img
                                        src="images/shop-1.webp"
                                        width="370"
                                        height="450"
                                        alt="Image-HasTech"
                                    />
                                </Link>
                                <span class="flag-new">new</span>
                                <div class="product-action">
                                    <button
                                        type="button"
                                        class="product-action-btn action-btn-quick-view"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-QuickViewModal"
                                    >
                                        <i class="fa fa-expand"></i>
                                    </button>
                                    <button
                                        type="button"
                                        class="product-action-btn action-btn-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-CartAddModal"
                                    >
                                        <span>Add to cart</span>
                                    </button>
                                    <button
                                        type="button"
                                        class="product-action-btn action-btn-wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-WishlistModal"
                                    >
                                        <i class="fa fa-heart-o"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="product-info">
                                <div class="product-rating">
                                    <div class="rating">
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </div>
                                    <div class="reviews">150 reviews</div>
                                </div>
                                <h4 class="title">
                                    <Link to="product-details.html">
                                        Readable content DX22
                                    </Link>
                                </h4>
                                <div class="prices">
                                    <span class="price">$210.00</span>
                                    <span class="price-old">300.00</span>
                                </div>
                            </div>
                            <div class="product-action-bottom">
                                <button
                                    type="button"
                                    class="product-action-btn action-btn-quick-view"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-QuickViewModal"
                                >
                                    <i class="fa fa-expand"></i>
                                </button>
                                <button
                                    type="button"
                                    class="product-action-btn action-btn-wishlist"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-WishlistModal"
                                >
                                    <i class="fa fa-heart-o"></i>
                                </button>
                                <button
                                    type="button"
                                    class="product-action-btn action-btn-cart"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-CartAddModal"
                                >
                                    <span>Add to cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-4 mb-4 mb-sm-9">
                        <div class="product-item">
                            <div class="product-thumb">
                                <Link class="d-block" to="product-details.html">
                                    <img
                                        src="images/shop-2.webp"
                                        width="370"
                                        height="450"
                                        alt="Image-HasTech"
                                    />
                                </Link>
                                <span class="flag-new">new</span>
                                <div class="product-action">
                                    <button
                                        type="button"
                                        class="product-action-btn action-btn-quick-view"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-QuickViewModal"
                                    >
                                        <i class="fa fa-expand"></i>
                                    </button>
                                    <button
                                        type="button"
                                        class="product-action-btn action-btn-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-CartAddModal"
                                    >
                                        <span>Add to cart</span>
                                    </button>
                                    <button
                                        type="button"
                                        class="product-action-btn action-btn-wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-WishlistModal"
                                    >
                                        <i class="fa fa-heart-o"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="product-info">
                                <div class="product-rating">
                                    <div class="rating">
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </div>
                                    <div class="reviews">150 reviews</div>
                                </div>
                                <h4 class="title">
                                    <Link to="product-details.html">
                                        Modern Eye Brush
                                    </Link>
                                </h4>
                                <div class="prices">
                                    <span class="price">$210.00</span>
                                    <span class="price-old">300.00</span>
                                </div>
                            </div>
                            <div class="product-action-bottom">
                                <button
                                    type="button"
                                    class="product-action-btn action-btn-quick-view"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-QuickViewModal"
                                >
                                    <i class="fa fa-expand"></i>
                                </button>
                                <button
                                    type="button"
                                    class="product-action-btn action-btn-wishlist"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-WishlistModal"
                                >
                                    <i class="fa fa-heart-o"></i>
                                </button>
                                <button
                                    type="button"
                                    class="product-action-btn action-btn-cart"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-CartAddModal"
                                >
                                    <span>Add to cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-4 mb-4 mb-sm-9">
                        <div class="product-item">
                            <div class="product-thumb">
                                <Link class="d-block" to="product-details.html">
                                    <img
                                        src="images/shop-3.webp"
                                        width="370"
                                        height="450"
                                        alt="Image-HasTech"
                                    />
                                </Link>
                                <span class="flag-new">new</span>
                                <div class="product-action">
                                    <button
                                        type="button"
                                        class="product-action-btn action-btn-quick-view"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-QuickViewModal"
                                    >
                                        <i class="fa fa-expand"></i>
                                    </button>
                                    <button
                                        type="button"
                                        class="product-action-btn action-btn-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-CartAddModal"
                                    >
                                        <span>Add to cart</span>
                                    </button>
                                    <button
                                        type="button"
                                        class="product-action-btn action-btn-wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-WishlistModal"
                                    >
                                        <i class="fa fa-heart-o"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="product-info">
                                <div class="product-rating">
                                    <div class="rating">
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </div>
                                    <div class="reviews">150 reviews</div>
                                </div>
                                <h4 class="title">
                                    <Link to="product-details.html">
                                        Voyage face cleaner
                                    </Link>
                                </h4>
                                <div class="prices">
                                    <span class="price">$210.00</span>
                                    <span class="price-old">300.00</span>
                                </div>
                            </div>
                            <div class="product-action-bottom">
                                <button
                                    type="button"
                                    class="product-action-btn action-btn-quick-view"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-QuickViewModal"
                                >
                                    <i class="fa fa-expand"></i>
                                </button>
                                <button
                                    type="button"
                                    class="product-action-btn action-btn-wishlist"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-WishlistModal"
                                >
                                    <i class="fa fa-heart-o"></i>
                                </button>
                                <button
                                    type="button"
                                    class="product-action-btn action-btn-cart"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-CartAddModal"
                                >
                                    <span>Add to cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-4 mb-4 mb-sm-9">
                        <div class="product-item">
                            <div class="product-thumb">
                                <Link class="d-block" to="product-details.html">
                                    <img
                                        src="images/shop-4.webp"
                                        width="370"
                                        height="450"
                                        alt="Image-HasTech"
                                    />
                                </Link>
                                <span class="flag-new">new</span>
                                <div class="product-action">
                                    <button
                                        type="button"
                                        class="product-action-btn action-btn-quick-view"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-QuickViewModal"
                                    >
                                        <i class="fa fa-expand"></i>
                                    </button>
                                    <button
                                        type="button"
                                        class="product-action-btn action-btn-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-CartAddModal"
                                    >
                                        <span>Add to cart</span>
                                    </button>
                                    <button
                                        type="button"
                                        class="product-action-btn action-btn-wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-WishlistModal"
                                    >
                                        <i class="fa fa-heart-o"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="product-info">
                                <div class="product-rating">
                                    <div class="rating">
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </div>
                                    <div class="reviews">150 reviews</div>
                                </div>
                                <h4 class="title">
                                    <Link to="product-details.html">
                                        Impulse Duffle
                                    </Link>
                                </h4>
                                <div class="prices">
                                    <span class="price">$210.00</span>
                                    <span class="price-old">300.00</span>
                                </div>
                            </div>
                            <div class="product-action-bottom">
                                <button
                                    type="button"
                                    class="product-action-btn action-btn-quick-view"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-QuickViewModal"
                                >
                                    <i class="fa fa-expand"></i>
                                </button>
                                <button
                                    type="button"
                                    class="product-action-btn action-btn-wishlist"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-WishlistModal"
                                >
                                    <i class="fa fa-heart-o"></i>
                                </button>
                                <button
                                    type="button"
                                    class="product-action-btn action-btn-cart"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-CartAddModal"
                                >
                                    <span>Add to cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-4 mb-4 mb-sm-9">
                        <div class="product-item">
                            <div class="product-thumb">
                                <Link class="d-block" to="product-details.html">
                                    <img
                                        src="images/shop-5.webp"
                                        width="370"
                                        height="450"
                                        alt="Image-HasTech"
                                    />
                                </Link>
                                <span class="flag-new">new</span>
                                <div class="product-action">
                                    <button
                                        type="button"
                                        class="product-action-btn action-btn-quick-view"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-QuickViewModal"
                                    >
                                        <i class="fa fa-expand"></i>
                                    </button>
                                    <button
                                        type="button"
                                        class="product-action-btn action-btn-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-CartAddModal"
                                    >
                                        <span>Add to cart</span>
                                    </button>
                                    <button
                                        type="button"
                                        class="product-action-btn action-btn-wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-WishlistModal"
                                    >
                                        <i class="fa fa-heart-o"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="product-info">
                                <div class="product-rating">
                                    <div class="rating">
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </div>
                                    <div class="reviews">150 reviews</div>
                                </div>
                                <h4 class="title">
                                    <Link to="product-details.html">
                                        Sprite Yoga Straps1
                                    </Link>
                                </h4>
                                <div class="prices">
                                    <span class="price">$210.00</span>
                                    <span class="price-old">300.00</span>
                                </div>
                            </div>
                            <div class="product-action-bottom">
                                <button
                                    type="button"
                                    class="product-action-btn action-btn-quick-view"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-QuickViewModal"
                                >
                                    <i class="fa fa-expand"></i>
                                </button>
                                <button
                                    type="button"
                                    class="product-action-btn action-btn-wishlist"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-WishlistModal"
                                >
                                    <i class="fa fa-heart-o"></i>
                                </button>
                                <button
                                    type="button"
                                    class="product-action-btn action-btn-cart"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-CartAddModal"
                                >
                                    <span>Add to cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-4 mb-4 mb-sm-9">
                        <div class="product-item">
                            <div class="product-thumb">
                                <Link class="d-block" to="product-details.html">
                                    <img
                                        src="images/shop-6.webp"
                                        width="370"
                                        height="450"
                                        alt="Image-HasTech"
                                    />
                                </Link>
                                <span class="flag-new">new</span>
                                <div class="product-action">
                                    <button
                                        type="button"
                                        class="product-action-btn action-btn-quick-view"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-QuickViewModal"
                                    >
                                        <i class="fa fa-expand"></i>
                                    </button>
                                    <button
                                        type="button"
                                        class="product-action-btn action-btn-cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-CartAddModal"
                                    >
                                        <span>Add to cart</span>
                                    </button>
                                    <button
                                        type="button"
                                        class="product-action-btn action-btn-wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#action-WishlistModal"
                                    >
                                        <i class="fa fa-heart-o"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="product-info">
                                <div class="product-rating">
                                    <div class="rating">
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </div>
                                    <div class="reviews">150 reviews</div>
                                </div>
                                <h4 class="title">
                                    <Link to="product-details.html">
                                        Fusion facial cream
                                    </Link>
                                </h4>
                                <div class="prices">
                                    <span class="price">$210.00</span>
                                    <span class="price-old">300.00</span>
                                </div>
                            </div>
                            <div class="product-action-bottom">
                                <button
                                    type="button"
                                    class="product-action-btn action-btn-quick-view"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-QuickViewModal"
                                >
                                    <i class="fa fa-expand"></i>
                                </button>
                                <button
                                    type="button"
                                    class="product-action-btn action-btn-wishlist"
                                    data-bs-toggle="modal"
                                    data-bs-target="#action-WishlistModal"
                                >
                                    <i class="fa fa-heart-o"></i>
                                </button>
                                <button
                                    type="button"
                                    class="product-action-btn action-btn-cart"
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

export default ProductBanner;
