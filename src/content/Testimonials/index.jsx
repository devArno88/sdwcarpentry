// /* eslint-disable @next/next/no-img-element */
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import Banner from "../../components/Banner";
// import Split from "../../components/Split";

// import testimonials from "../../data/testimonials";

/* eslint-disable @next/next/no-img-element */
import { Avatar, Stack, Typography } from "@mui/material";
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
                    <Banner
                        title="Testimonials"
                        subtitle="We've been working with home owners and businesses since 2014. See what our customers have to say."
                    />
                    <div className="container">
                        {/* <div className="main-header text-center">
              
                            <h3>Testimonials</h3>
                            <div className="tex-bg">SDW Carpentry</div>
                        </div> */}

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
                                                <Typography>
                                                    &quot;<i>{item.content}</i>&quot;
                                                </Typography>
                                            </div>
                                            <div className="info">
                                                <Stack direction="row" mt={2} alignItems="center">
                                                    <Avatar
                                                        src="/"
                                                        alt={item.username}
                                                        sx={{ height: 60, width: 60 }}
                                                    />
                                                    <Stack ml={2}>
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
                                                </Stack>
                                            </div>
                                            {/* <div className="info">
                                                <div className="author">
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <h6>
                                                    {item.username}
                                                    <span>{item.usertitle}</span>
                                                </h6>
                                            </div> */}
                                        </div>
                                    ))}
                                </Slider>
                                {/* {this.renderArrows()} */}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Testimonials1;

// const Testimonials2 = () => {
//     return (
//         <section className="testimonials2 bg-blc" id="testimonials">
//             <Banner
//                 title="Testimonials"
//                 subtitle="We've been working with home owners and businesses since 2014. See what our customers have to say."
//             />
//             <div className="container-fluid no-padding pt-90 pb-40">
//                 <div className="row">
//                     <div className="col-lg-8 no-padding order2">
//                         <div className="box">
//                             <Slider
//                                 className="testimslic-item wow fadeInUp"
//                                 data-wow-delay=".3S"
//                                 {...{
//                                     dots: true,
//                                     arrows: false,
//                                     autoplay: true,
//                                     rows: 1,
//                                     slidesToScroll: 1,
//                                     slidesToShow: 2,
//                                     responsive: [
//                                         {
//                                             breakpoint: 1024,
//                                             settings: {
//                                                 slidesToShow: 2,
//                                             },
//                                         },
//                                         {
//                                             breakpoint: 767,
//                                             settings: {
//                                                 slidesToShow: 1,
//                                             },
//                                         },
//                                         {
//                                             breakpoint: 480,
//                                             settings: {
//                                                 slidesToShow: 1,
//                                             },
//                                         },
//                                     ],
//                                 }}
//                             >
//                                 {testimonials.map((tst) => (
//                                     <div className="item" key={tst.id}>
//                                         <div className="cont">
//                                             <h6 className="author-name" style={{ letterSpacing: 1, fontWeight: 400 }}>
//                                                 {tst.name}
//                                             </h6>
//                                             <span
//                                                 style={{
//                                                     fontSize: 13,
//                                                     fontWeight: 300,
//                                                     letterSpacing: 0.4,
//                                                     color: "#c5a47e",
//                                                 }}
//                                             >
//                                                 {tst.services.join(" · ")}
//                                             </span>
//                                         </div>
//                                         <p>{tst.content}</p>
//                                     </div>
//                                 ))}
//                             </Slider>
//                             <div className="qoute-icon" style={{ borderRadius: "50%", opacity: 0.7 }}>
//                                 <img src="/assets/img/icons/left-quote.svg" alt="" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-3 offset-lg-1 order1">
//                         <div className="sec-head mt-80 mb-0">
//                             <h6 className="wow fadeIn" data-wow-delay=".5s">
//                                 Testimonials
//                             </h6>
//                             <Split>
//                                 <h3 className="wow words chars splitting" data-splitting>
//                                     What <br /> People <br /> Says.
//                                 </h3>
//                             </Split>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Testimonials2;
