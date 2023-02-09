/* eslint-disable @next/next/no-img-element */
import { Grid, Typography } from "@mui/material";
import React from "react";
import Banner from "../../components/Banner";

const AboutUs6 = () => {
    return (
        <section className="about-us" id="about">
            <Banner
                prevLink="services"
                banner={1}
                nextLink="testimonials"
                title="The SDW Story"
                subtitle="Through a combination of high-quality work, excellent customer service, and a commitment to transparency, our only desire is to achieve 100% customer satisfation (and nothing less)"
            />
            <div className="container">
                <div className="row">
                    <Grid
                        container
                        spacing={6}
                        // columns={{ xs: 4, sm: 8, md: 12 }}

                        display="flex"
                        alignItems="flex-start"
                        justifyContent="center"
                        direction="row-reverse"
                    >
                        <Grid item xs={8} sm={8} md={4}>
                            <img
                                src="/img/pt/pt-6.jpg"
                                alt="About"
                                style={{
                                    borderRadius: "1rem",
                                    boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                                }}
                            />
                        </Grid>
                        <Grid item xs={10} sm={11} md={8}>
                            <Typography
                                fontSize={{ xs: 18, sm: 18, md: 22 }}
                                textAlign={{ xs: "justify", sm: "justify", md: "start" }}
                                sx={{ textJustify: { xs: "inter-word", sm: "inter-word" } }}
                            >
                                {/* <p className="mb-20"> */}
                                <span style={{ marginBottom: 20 }}>
                                    Since 2014, we have been creating beautiful and functional spaces that reflect our
                                    clients' unique style and needs. Our goal is to exceed your expectations and make
                                    you feel heard and appreciated{" "}
                                    <span style={{ color: "#c5a47e" }}>every step of the way</span>.{/* </p> */}
                                </span>
                                {/* <p className="mb-20"> */}
                                <span style={{ marginBottom: 20 }}>
                                    With <span style={{ color: "#c5a47e" }}>exceptional craftsmanship</span>, attention
                                    to detail and personalised service, we understand that every project is unique, and
                                    that's why we work closely with our customers to understand their vision and bring
                                    it to life.
                                </span>
                                {/* </p> */}
                                {/* <p> */}
                                <span style={{ marginBottom: 20 }}>
                                    From custom carpentry to full-scale remodels, we have the{" "}
                                    <span style={{ color: "#c5a47e" }}>experience</span> and{" "}
                                    <span style={{ color: "#c5a47e" }}>expertise</span> to bring your dream space to
                                    reality. Let us help you create a home or business you'll love.
                                </span>{" "}
                                {/* </p> */}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
    );
};

export default AboutUs6;
