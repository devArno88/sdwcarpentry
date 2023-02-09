import React from "react";
import Banner from "../../components/Banner";
import ourServices from "../../data/services";
import ServiceBlock from "./ServiceBlock";

const Services = () => {
    return (
        <section id="services" className="services-grid section-padding pt-0">
            <Banner
                banner={0}
                prevLink="home"
                nextLink="about"
                title="Services"
                subtitle="From designing and building new spaces to maintaining and improving existing ones, we provide a wide range of services catering to both residential and commercial clients.<br/><br/>Click any service to make an enquiry"
            />
            <div className="container">
                <div className="row">
                    {ourServices.map((item, i) => {
                        const delay = i * 0.2;
                        return <ServiceBlock key={item.id} delay={delay} {...item} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
