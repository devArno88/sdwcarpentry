/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
// import getSiblings from "../../common/getSiblings";
import ConstructionTwoToneIcon from "@mui/icons-material/ConstructionTwoTone";
import { Box } from "@mui/material";
const Navbar = ({ navbarRef, logoRef, logoClass }) => {
    // const handleDropdown = (e) => {
    //     getSiblings(e.target.parentElement)
    //         .filter((item) => item.classList.contains("show"))
    //         .map((item) => {
    //             item.classList.remove("show");
    //             if (item.childNodes[0]) {
    //                 item.childNodes[0].setAttribute("aria-expanded", false);
    //             }
    //             if (item.childNodes[1]) {
    //                 item.childNodes[1].classList.remove("show");
    //             }
    //         });
    //     e.target.parentElement.classList.toggle("show");
    //     e.target.setAttribute("aria-expanded", true);
    //     e.target.parentElement.childNodes[1].classList.toggle("show");
    // };

    const handleMobileDropdown = (e) => {
        document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
    };

    return (
        <>
            <nav className="navbar change navbar-expand-lg" ref={navbarRef}>
                <div className="container">
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <Link href="/">
                            <ConstructionTwoToneIcon fontSize="large" sx={{ fill: "#E2D2BF", cursor: "pointer" }} />
                        </Link>
                    </Box>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        onClick={handleMobileDropdown}
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="icon-bar">
                            <i className="fas fa-bars"></i>
                        </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link" style={{ color: "#E2D2BF" }}>
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#services">
                                    <a className="nav-link" style={{ color: "#E2D2BF" }}>
                                        Services
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#about">
                                    <a className="nav-link" style={{ color: "#E2D2BF" }}>
                                        Our Story
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#testimonials">
                                    <a className="nav-link" style={{ color: "#E2D2BF" }}>
                                        Testimonials
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#contact">
                                    <a className="nav-link" style={{ color: "#E2D2BF" }}>
                                        Contact
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
