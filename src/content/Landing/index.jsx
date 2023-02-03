import React from "react";
import AboutUs from "../../content/AboutUs";
import Services from "../../content/Services";
import Testimonials from "../../content/Testimonials";
import Why from "../../content/Why";
import MainLayout from "../../layouts/main";
import Contact from "../Contact";
import Hero from "../Hero";

const Home4 = () => {
    React.useEffect(() => {
        document.querySelector("body").classList.add("index4");
    }, []);
    return (
        <MainLayout logoClassText="dis">
            <Hero />
            <div className="main-content">
                <Services />
                <AboutUs />
                <Why />
                <Testimonials />
                <Contact />
            </div>
        </MainLayout>
    );
};

export default Home4;
