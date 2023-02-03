import { Stack, Typography } from "@mui/material";
import React from "react";

import ourServices from "../../data/services";

const Services = ({ bigTitle, grid }) => {
    return (
        <section className={`${!grid ? "services" : "services-grid"} section-padding ${!grid ? "bg-gray" : "pt-0"} `}>
            <div className="container">
                {!bigTitle ? (
                    <div className="section-head text-center">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8 col-sm-10">
                                <h6 className="custom-font wow fadeInDown" data-wow-delay=".3s">
                                    Best Features
                                </h6>
                                <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                                    Our Services
                                </h4>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="main-header text-center">
                        <h3>Services</h3>
                        <div className="tex-bg">SDW Carpentry</div>
                    </div>
                )}

                <p style={{ textAlign: "center", marginBottom: 40 }}>
                    From designing and building new spaces to maintaining and improving existing ones,
                    <br />
                    we provide a wide range of services catering to both residential and commercial clients.
                </p>

                <div className="row">
                    {ourServices.map((item, i) => {
                        const delay = i * 0.2;
                        return (
                            <div className="col-lg-4" key={item.id} style={{ marginBottom: 28 }}>
                                <div
                                    className="item-bx bg-img wow fadeInUp"
                                    data-wow-delay={`${0.3 + delay}s`}
                                    style={{ backgroundImage: `url(${item.image})` }}
                                >
                                    {/* <span className={item.icon}></span> */}
                                    <Stack direction="row" sx={{ alignItems: "center", mb: 2, gap: 1.5 }}>
                                        <item.icon sx={{ height: 28, width: 28, fill: "#c5a47e" }} />
                                        <Typography variant="h5">{item.title}</Typography>
                                    </Stack>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
