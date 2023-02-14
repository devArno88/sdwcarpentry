import { Stack, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Banner from "../../components/Banner";
import testimonials1Data from "../../data/testimonials1.json";

class Testimonials1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <section
                    id="testimonials"
                    className={`testimonials grid pt-6 pb-60`}
                    data-overlay-dark={this.props.withBg ? 9 : null}
                >
                    <Banner
                        banner={2}
                        prevLink="about"
                        nextLink="contact"
                        title="Testimonials"
                        subtitle="We've been working with home owners and businesses since 2014. See what our customers have to say."
                    />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Slider
                                    className="testim"
                                    {...{
                                        ref: (c) => (this.slider = c),
                                        dots: false,
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
                                    {testimonials1Data.map((item) => (
                                        <div className="item wow fadeInUp" data-wow-delay=".3s" key={item.id}>
                                            <span className="quote-icon">
                                                <img src="/assets/img/clients/quote.svg" style={{ opacity: 0.6 }} />
                                            </span>
                                            <div className="cont">
                                                <Typography fontSize={{ xs: 20, sm: 21, md: 22 }}>
                                                    &quot;{item.content}&quot;
                                                </Typography>
                                            </div>
                                            <div className="info">
                                                <Stack mt={2} alignItems="center" justifyContent="center">
                                                    <Typography variant="h5" mb={0.5}>
                                                        {item.username}
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        textTransform="uppercase"
                                                        sx={{ color: "#c5a47e" }}
                                                    >
                                                        {item.usertitle}
                                                    </Typography>
                                                </Stack>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Testimonials1;
