import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Navbar1() {
    return (
        <header className="header-area sticky-header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-5 col-sm-6 col-lg-3">
                        <div className="header-logo">
                            <Link to="/home">
                                <img
                                    className="logo-main"
                                    src="images/images-logo.webp"
                                    width="95"
                                    height="68"
                                    alt="Logo"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="header-navigation">
                            <ul className="main-nav justify-content-start">
                                <li className="has-submenu">
                                    <Link to="/home">home</Link>
                                </li>
                                <li>
                                    <Link to="/about">about</Link>
                                </li>
                                <li className="has-submenu position-static">
                                    <Link to="/shop">shop</Link>
                                </li>
                                <li className="has-submenu">
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li className="has-submenu">
                                    <Link to="/faq">Faq</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-7 col-sm-6 col-lg-3">
                        <div className="header-action justify-content-end">
                            <button
                                className="header-action-btn ms-0"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#AsideOffcanvasSearch"
                                aria-controls="AsideOffcanvasSearch"
                            >
                                <span className="icon">
                                    <svg
                                        width="30"
                                        height="30"
                                        viewbox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                    >
                                        <rect
                                            className="icon-rect"
                                            width="30"
                                            height="30"
                                            fill="url(#pattern1)"
                                        ></rect>
                                        <defs>
                                            <pattern
                                                id="pattern1"
                                                patterncontentunits="objectBoundingBox"
                                                width="1"
                                                height="1"
                                            >
                                                <use
                                                    xlink:to="#image0_504:11"
                                                    transform="scale(0.0333333)"
                                                ></use>
                                            </pattern>
                                            <image
                                                id="image0_504:11"
                                                width="30"
                                                height="30"
                                                xlink:to="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABiUlEQVRIie2Wu04CQRSGP0G2EUtIbHwA8B3EQisLIcorEInx8hbEZ9DKy6toDI1oAgalNFpDoYWuxZzJjoTbmSXERP7kZDbZ859vdmb27MJcf0gBUAaugRbQk2gBV3IvmDa0BLwA4Zh4BorTACaAU6fwPXAI5IAliTxwBDScvJp4vWWhH0BlTLEEsC+5Fu6lkgNdV/gKDnxHCw2I9rSiNQNV8baBlMZYJtpTn71KAg9SY3dUYn9xezLPgG8P8BdwLteq5X7CzDbnAbXKS42WxtQVUzoGeFlqdEclxXrnhmhhkqR+8KuMqzHA1vumAddl3IwB3pLxVmOyr1NjwKQmURJ4lBp7GmOAafghpg1qdSDeDrCoNReJWmZB4dsAPsW7rYVa1Rx4FbOEw5TEPKmFvgMZX3DCgYeYNniMaQ5piTXghGhPLdTmZ33hYNpem98f/UHRwSxvhqhXx4anMA3/EmhiOlJPJnSBOb3uQcpOE65VhujPpAms/Bu4u+x3swRbeB24mTV4LgB+AFuLedkPkcmmAAAAAElFTkSuQmCC"
                                            ></image>
                                        </defs>
                                    </svg>
                                </span>
                            </button>

                            <button
                                className="header-action-btn"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#AsideOffcanvasCart"
                                aria-controls="AsideOffcanvasCart"
                            >
                                <span className="icon">
                                    <svg
                                        width="30"
                                        height="30"
                                        viewbox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                    >
                                        <rect
                                            className="icon-rect"
                                            width="30"
                                            height="30"
                                            fill="url(#pattern2)"
                                        ></rect>
                                        <defs>
                                            <pattern
                                                id="pattern2"
                                                patterncontentunits="objectBoundingBox"
                                                width="1"
                                                height="1"
                                            >
                                                <use
                                                    xlink:to="#image0_504:9"
                                                    transform="scale(0.0333333)"
                                                ></use>
                                            </pattern>
                                            <image
                                                id="image0_504:9"
                                                width="30"
                                                height="30"
                                                xlink:to="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABFUlEQVRIie2VMU7DMBSGvwAqawaYuAmKxCW4A1I5Qg4AA93KBbp1ZUVUlQJSVVbCDVhgzcTQdLEVx7WDQ2xLRfzSvzzb+d6zn2MYrkugBBYevuWsHKiFn2JBMwH8Bq6Aw1jgBwHOYwGlPgT4LDZ4I8BJDNiEppl034UEJ8DMAJ0DByHBACPgUYEugePQUKkUWAmnsaB/Ry/YO9aXCwlT72AdrqaWEohwBWxSwc8ReIVtYIr5bM5pXqO+Men7rozGlkVSv4lJj1WQfsbvXVkNVNk1eEK4ik9/yuwzAPhLh5iuU4jtftMDR4ZJJXChxTJ2H3zXGDgWc43/X2Wro8G81a8u2fXU2nXiLVAxvNIKuPGW/r/2SltF+a3Rkw4pmwAAAABJRU5ErkJggg=="
                                            ></image>
                                        </defs>
                                    </svg>
                                </span>
                            </button>

                            <Link
                                className="header-action-btn"
                                to="account-login.html"
                            >
                                <span className="icon">
                                    <svg
                                        width="30"
                                        height="30"
                                        viewbox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                    >
                                        <rect
                                            className="icon-rect"
                                            width="30"
                                            height="30"
                                            fill="url(#pattern3)"
                                        ></rect>
                                        <defs>
                                            <pattern
                                                id="pattern3"
                                                patterncontentunits="objectBoundingBox"
                                                width="1"
                                                height="1"
                                            >
                                                <use
                                                    xlink:to="#image0_504:10"
                                                    transform="scale(0.0333333)"
                                                ></use>
                                            </pattern>
                                            <image
                                                id="image0_504:10"
                                                width="30"
                                                height="30"
                                                xlink:to="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABEUlEQVRIie3UMUoDYRDF8Z8psqUpLBRrBS+gx7ATD6E5iSjeQQ/gJUzEwmChnZZaKZiQ0ljsLkhQM5/5Agr74DX7DfOfgZ1Hoz+qAl30Marcx2H1thCtY4DJN76parKqmAH9DM+6eTcArX2QE3yVAO7lBA8TwMNIw6UgeJI46My+rWCjUQL0LVIUBd8lgEO1UfBZAvg8oXamCuWNRu64nRNMmUo/wReSXLXayoDoKc9miMvqW/ZNG2VRNLla2MYudrCFTvX2intlnl/gGu/zDraGYzyLZ/UTjrD6G2AHpxgnAKc9xgmWo9BNPM4BnPYDNiLg24zQ2oNpyFdZvRKZLlGhnvvKPzXXti/Yy7hEo3+iD9EHtgdqxQnwAAAAAElFTkSuQmCC"
                                            ></image>
                                        </defs>
                                    </svg>
                                </span>
                            </Link>

                            <button
                                className="header-menu-btn"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#AsideOffcanvasMenu"
                                aria-controls="AsideOffcanvasMenu"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar1;
