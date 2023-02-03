/* eslint-disable @next/next/no-img-element */
import React from "react";
import Banner from "../../components/Banner";

const AboutUs6 = () => {
    return (
        <section className="about-us section-padding" id="about">
            <Banner
                title="The SDW Story"
                subtitle="Through a combination of high-quality work, excellent customer service, and a commitment to transparency, our only desire is to achieve 100% customer satisfation (and nothing less)"
            />
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 ">
                        <div className="mb-50">
                            {/* <h6 className="fw-100 text-u ls10 main-color mb-10">SDW Carpentry</h6>
                            <h3 className="fw-600 text-u ls1 mb-30">About Us</h3> */}
                            <div className="txt-cont">
                                <p className="mb-20">
                                    Since 2014, we have been creating beautiful and functional spaces that reflect our
                                    clients' unique style and needs. Our goal is to exceed your expectations and make
                                    you feel heard and appreciated{" "}
                                    <span style={{ color: "#c5a47e" }}>every step of the way</span>.
                                </p>
                                <p className="mb-20">
                                    With <span style={{ color: "#c5a47e" }}>exceptional craftsmanship</span>, attention
                                    to detail and personalised service, we understand that every project is unique, and
                                    that's why we work closely with our customers to understand their vision and bring
                                    it to life.
                                </p>
                                <p>
                                    From custom carpentry to full-scale remodels, we have the{" "}
                                    <span style={{ color: "#c5a47e" }}>experience</span> and{" "}
                                    <span style={{ color: "#c5a47e" }}>expertise</span> to bring your dream space to
                                    reality. Let us help you create a home or business you'll love.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 img">
                        <img src="/img/pt/pt-6.jpg" alt="About" style={{ borderRadius: "1rem" }} />
                        <div className="stauts">
                            <div className="item" style={{ borderRadius: 8 }}>
                                <h4>
                                    3<span>K</span> +
                                </h4>
                                <h6>Happy Clients</h6>
                            </div>
                            <div className="item" style={{ borderRadius: 8 }}>
                                <h4>
                                    14<span>K</span> +
                                </h4>
                                <h6>Success Projects</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs6;
