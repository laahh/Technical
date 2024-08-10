import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Navbar() {
    return (
        <header className="header-area sticky-header header-transparent">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-5 col-lg-2 col-xl-1">
                        <div className="header-logo">
                            <Link to="/">
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
                    <div className="col-lg-7 col-xl-7 d-none d-lg-block">
                        <div className="header-navigation ps-7">
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
                                    <Link to="/faq">FAQ</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-7 col-lg-3 col-xl-4">
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
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <rect
                                            className="icon-rect"
                                            width="30"
                                            height="30"
                                            fill="url(#pattern1)"
                                        />
                                        <defs>
                                            <pattern
                                                id="pattern1"
                                                patternContentUnits="objectBoundingBox"
                                                width="1"
                                                height="1"
                                            >
                                                <use
                                                    xlinkHref="#image0_504:11"
                                                    transform="scale(0.0333333)"
                                                />
                                            </pattern>
                                            <image
                                                id="image0_504:11"
                                                width="30"
                                                height="30"
                                                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABiUlEQVRIie2Wu04CQRSGP0G2EUtIbHwA8B3EQisLIcorEInx8hbEZ9DKy6toDI1oAgalNFpDoYWuxZzJjoTbmSXERP7kZDbZ859vdmb27MJcf0gBUAaugRbQk2gBV3IvmDa0BLwA4Zh4BorTACaAU6fwPXAI5IAliTxwBDScvJp4vWWhH0BlTLEEsC+5Fu6lkgNdV/gKDnxHCw2I9rSiNQNV8baBlMZYJtpTn71KAg9SY3dUYn9xezLPgG8P8BdwLteq5X7CzDbnAbXKS42WxtQVUzoGeFlqdEclxXrnhmhhkqR+8KuMqzHA1vumAddl3IwB3pLxVmOyr1NjwKQmURJ4lBp7GmOAafghpg1qdSDeDrCoNReJWmZB4dsAPsW7rYVa1Rx4FbOEw5TEPKmFvgMZX3DCgYeYNniMaQ5piTXghGhPLdTmZ33hYNpem98f/UHRwSxvhqhXx4anMA3/EmhiOlJPJnSBOb3uQcpOE65VhujPpAms/Bu4u+x3swRbeB24mTV4LgB+AFuLedkPkcmmAAAAAElFTkSuQmCC"
                                            />
                                        </defs>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
