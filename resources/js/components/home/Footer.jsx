import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer-area">
            <div className="footer-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="widget-item">
                                <div className="widget-about">
                                    <Link
                                        className="widget-logo"
                                        to="index.html"
                                    >
                                        <img
                                            src="images/images-logo.webp"
                                            width="95"
                                            height="68"
                                            alt="Logo"
                                        />
                                    </Link>
                                    <p className="desc">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5 mt-md-0 mt-9">
                            <div className="widget-item">
                                <h4 className="widget-title">Information</h4>
                                <ul className="widget-nav">
                                    <li>
                                        <Link to="blog.html">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="about-us.html">About us</Link>
                                    </li>
                                    <li>
                                        <Link to="contact.html">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="faq.html">Privacy</Link>
                                    </li>
                                    <li>
                                        <Link to="account-login.html">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="product.html">Shop</Link>
                                    </li>
                                    <li>
                                        <Link to="my-account.html">
                                            My Account
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="faq.html">FAQs</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mt-lg-0 mt-6">
                            <div className="widget-item">
                                <h4 className="widget-title">Social Info</h4>
                                <div className="widget-social">
                                    <Link
                                        to="https://twitter.com/"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <i className="fa fa-twitter"></i>
                                    </Link>
                                    <Link
                                        to="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <i className="fa fa-facebook"></i>
                                    </Link>
                                    <Link
                                        to="https://www.pinterest.com/"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <i className="fa fa-pinterest-p"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container pt-0 pb-0">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            &copy; 2024 PT.PAS <i className="fa fa-heart"></i>{" "}
                            by{" "}
                            <Link target="_blank" to="">
                                Eprils
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
