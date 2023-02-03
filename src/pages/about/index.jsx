import React from "react";
import PageHeader from "../../components/Page-header";
import Skills2 from "../../components/Skills2";
import Testimonials1 from "../../components/Testimonials1";
import AboutUs from "../../content/AboutUs";
import Services from "../../content/Services";
import MainLayout from "../../layouts/main";

const Index = () => {
    React.useEffect(() => {
        document.querySelector("body").classList.add("index3");
    }, []);

    return (
        <MainLayout>
            <PageHeader title="About Us" />
            <AboutUs />
            <Services bigTitle grid />
            <Testimonials1 bigTitle />
            <Skills2 />
        </MainLayout>
    );
};

export default Index;
