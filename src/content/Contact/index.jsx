import React from "react";
import Banner from "../../components/Banner";
import ContactInfo from "../../components/Contact-info";
import ContactWithMap from "../../components/Contact-with-map";

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <Banner
                title="Contact"
                subtitle="We provide our services all throughout London and surrounding areas. Please enquire about individual services <a href='#services'>here</a>, and for anything else, please use the contact form below."
            />
            <div className="container section-padding">
                <ContactInfo />
                <ContactWithMap />
            </div>
        </section>
    );
};

export default Contact;
