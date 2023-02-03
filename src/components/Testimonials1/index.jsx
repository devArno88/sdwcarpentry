/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import testimonials1Data from "../../data/testimonials1.json";

class Testimonials1 extends React.Component {
    constructor(props) {
        super(props);
    }
    renderArrows = () => {
        return (
            !this.props.bigTitle && (
                <div className="navs mt-30">
                    <span className="prev" onClick={() => this.slider.slickPrev()}>
                        <i className="fas fa-long-arrow-alt-left"></i>
                    </span>
                    <span className="next" onClick={() => this.slider.slickNext()}>
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                </div>
            )
        );
    };
    render() {
        return (
            <>
                <section
                    className={`testimonials grid section-padding ${this.props.withBg ? "bg-img parallaxie" : ""}`}
                    style={{
                        backgroundImage: this.props.withBg ? `url(/assets/img/001.jpg)` : "none",
                    }}
                    data-overlay-dark={this.props.withBg ? 9 : null}
                >
                    <div className="container">
                        <div className="main-header text-center">
                            <h3>Testimonials</h3>
                            <div className="tex-bg">SDW Carpentry</div>
                        </div>

                        <p style={{ textAlign: "center", marginBottom: 40 }}>
                            We've been working with home owners and businesses since 2014.
                            <br />
                            See what our customers have to say.
                        </p>
                        {/* {!this.props.bigTitle && ( */}
                        {/* <div className="section-head text-center">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-8 col-sm-10">
                                    <h6 className="wow fadeInDown" data-wow-delay=".3s">
                                        Testimonials
                                    </h6>
                                    <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                                        What People Says?
                                    </h4>
                                </div>
                            </div>
                        </div> */}
                        {/* )} */}

                        <div className="row">
                            <div className="col-lg-12">
                                <Slider
                                    className="testim"
                                    {...{
                                        ref: (c) => (this.slider = c),
                                        dots: false,
                                        arrows: true,
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
                                    {testimonials1Data.map((item) => (
                                        <div className="item wow fadeInUp" data-wow-delay=".3s" key={item.id}>
                                            <span className="quote-icon">
                                                <img src="/assets/img/clients/quote.svg" />
                                            </span>
                                            <div className="cont">
                                                <p>&quot;{item.content}&quot;</p>
                                            </div>
                                            <div className="info">
                                                <div className="author">
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <h6>
                                                    {item.username} <span>{item.usertitle}</span>
                                                </h6>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                                {this.renderArrows()}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Testimonials1;
