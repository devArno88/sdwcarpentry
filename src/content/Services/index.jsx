import React, { useState } from "react";
import Banner from "../../components/Banner";
import ServiceModal from "../../components/ServiceModal";
import ourServices from "../../data/services";
import ServiceBlock from "./ServiceBlock";

const initState = {
    icon: null,
    title: "",
    content: "",
    services: [],
};

const Services = () => {
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState(initState);
    const handleOpen = ({ icon, title, content, services }) => {
        setModalData({
            icon,
            title,
            content,
            services,
        });
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setModalData(initState);
    };
    return (
        <section id="services" className="services-grid section-padding pt-0">
            <Banner
                banner={0}
                prevLink="home"
                nextLink="about"
                title="Services"
                subtitle="From designing and building new spaces to maintaining and improving existing ones, we provide a wide range of services catering to both residential and commercial clients.<br/><br/>Discover more or make an enquiry below."
            />
            <div className="container">
                <div className="row">
                    <ServiceModal open={open} modalData={modalData} handleClose={handleClose} />
                    {ourServices.map((item, i) => {
                        const delay = i * 0.2;
                        return <ServiceBlock handleOpen={handleOpen} key={item.id} delay={delay} {...item} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
