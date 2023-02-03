/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Banner from "../../components/Banner";
import Split from "../../components/Split";

import testimonials from "../../data/testimonials";

const Testimonials2 = () => {
    return (
        <section className="testimonials2 bg-blc" id="testimonials">
            <Banner title="Testimonials" subtitle="See what our customers have to say" />
            <div className="container-fluid no-padding pt-60 pb-40">
                <div className="row">
                    <div className="col-lg-8 no-padding order2">
                        <div className="box">
                            <Slider
                                className="testimslic-item wow fadeInUp"
                                data-wow-delay=".3S"
                                {...{
                                    dots: true,
                                    arrows: false,
                                    autoplay: true,
                                    rows: 1,
                                    slidesToScroll: 1,
                                    slidesToShow: 2,
                                    responsive: [
                                        {
                                            breakpoint: 1024,
                                            settings: {
                                                slidesToShow: 2,
                                            },
                                        },
                                        {
                                            breakpoint: 767,
                                            settings: {
                                                slidesToShow: 1,
                                            },
                                        },
                                        {
                                            breakpoint: 480,
                                            settings: {
                                                slidesToShow: 1,
                                            },
                                        },
                                    ],
                                }}
                            >
                                {testimonials.map((tst) => (
                                    <div className="item" key={tst.id}>
                                        <div className="cont">
                                            <h6 className="author-name" style={{ letterSpacing: 1, fontWeight: 400 }}>
                                                {tst.name}
                                            </h6>
                                            <span
                                                style={{
                                                    fontSize: 13,
                                                    fontWeight: 300,
                                                    letterSpacing: 0.4,
                                                    color: "#c5a47e",
                                                }}
                                            >
                                                {tst.services.join(" · ")}
                                            </span>
                                        </div>
                                        <p>{tst.content}</p>
                                    </div>
                                ))}
                            </Slider>
                            <div className="qoute-icon" style={{ borderRadius: "50%", opacity: 0.7 }}>
                                <img src="/assets/img/icons/left-quote.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-1 order1">
                        <div className="sec-head mt-80 mb-0">
                            <h6 className="wow fadeIn" data-wow-delay=".5s">
                                Testimonials
                            </h6>
                            <Split>
                                <h3 className="wow words chars splitting" data-splitting>
                                    What <br /> People <br /> Says.
                                </h3>
                            </Split>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials2;
