import React from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/home/Navbar";
import About from "./components/about/About";
import Shop from "./components/shop/Shop";
import Navbar1 from "./components/home/Navbar1";
import Blog from "./components/blog/blog";
import Faq from "./components/Faq/faq";
import Contact from "./components/contact/contact";

function App() {
    const location = useLocation();

    const renderNavbar = () => {
        switch (location.pathname) {
            case "/shop":
                return <Navbar1 />;
            case "/blog":
                return <Navbar1 />;
            case "/faq":
                return <Navbar1 />;
            case "/contact":
                return <Navbar1 />;
            default:
                return <Navbar />;
        }
    };

    return (
        <div>
            {renderNavbar()}
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

function Root() {
    return (
        <Router>
            <App />
        </Router>
    );
}

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);
root.render(<Root />);
