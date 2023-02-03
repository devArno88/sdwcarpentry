/* eslint-disable @next/next/no-img-element */
import { Typography } from "@mui/material";
import React from "react";
import whyData from "../../data/why";
const Services6 = () => {
    return (
        <section className="services-feat section-padding pt-0" id="why">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img
                            src="/img/pt/pt-1.jpg"
                            alt="Why"
                            style={{
                                width: "80%",
                                marginLeft: 80,
                                borderRadius: "1rem",
                                boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                            }}
                        />
                    </div>
                    <div className="col-lg-6 valign">
                        <div className="cont">
                            <Typography
                                variant="h4"
                                sx={{
                                    color: "#E2D2BF",
                                    ml: { sm: 4, md: 11 },
                                    mb: 4,
                                    textAlign: { sm: "center", md: "start" },
                                }}
                            >
                                What We Can Offer
                            </Typography>
                            {whyData.map((item) => (
                                <div className="item" key={item.id}>
                                    <item.icon
                                        style={{
                                            height: 32,
                                            width: 32,
                                            marginTop: 3,
                                            marginRight: 12,
                                            fill: "#c5a47e",
                                        }}
                                    />
                                    <div>
                                        <Typography variant="h5">{item.title}</Typography>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services6;
