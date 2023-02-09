import React from "react";
import Banner from "../../components/Banner";
import ContactInfo from "../../components/Contact-info";

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <Banner
                prevLink="testimonials"
                banner={3}
                title="Contact"
                subtitle="We provide our services all throughout London and surrounding areas. Please enquire about individual services <a href='#services' style='color:#E1C16E;'>here</a>, or get in touch with the information below."
            />
            <div className="container">
                <ContactInfo />
                {/* <ContactWithMap /> */}
            </div>
        </section>
    );
};

export default Contact;
