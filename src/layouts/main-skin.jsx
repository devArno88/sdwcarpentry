/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import React from "react";

const MainSkin = ({ children }) => {
    const navbarRef = React.useRef(null);
    const logoRef = React.useRef(null);

    // React.useEffect(() => {
    //     var navbar = navbarRef.current,
    //         logo = logoRef.current;
    //     if (window.pageYOffset > 300) {
    //         navbar.classList.add("nav-scroll");
    //     } else {
    //         navbar.classList.remove("nav-scroll");
    //     }
    //     window.addEventListener("scroll", () => {
    //         if (window.pageYOffset > 300) {
    //             navbar.classList.add("nav-scroll");
    //             // logo.setAttribute("src", "/assets/img/logo-light.png");
    //         } else {
    //             navbar.classList.remove("nav-scroll");
    //             // logo.setAttribute("src", "/assets/img/logo-light.png");
    //         }
    //     });
    // }, [navbarRef]);
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/assets/css/style.css" />
                <link rel="stylesheet" href="/assets/css/skin-green.css" />
            </Head>
            {/* <Navbar navbarRef={navbarRef} logoRef={logoRef} /> */}
            {children}
            {/* <Footer /> */}
        </>
    );
};

export default MainSkin;
