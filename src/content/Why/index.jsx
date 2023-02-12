/* eslint-disable @next/next/no-img-element */
import { Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import whyData from "../../data/why";

const Services6 = () => {
    return (
        <section className="services-feat section-padding pt-0" id="why">
            <div className="container">
                <Typography
                    variant="h4"
                    sx={{
                        color: "#E2D2BF",
                        textAlign: "center",
                        mb: { xs: 2, sm: 4, md: 6 },
                        mt: { xs: 2, sm: 8, md: 12 },
                    }}
                >
                    What We Can Offer
                </Typography>
                <div className="row">
                    <Grid
                        container
                        spacing={4}
                        display="flex"
                        alignItems="flex-start"
                        justifyContent="center"
                        direction="row"
                    >
                        <Grid item xs={9} sm={8} md={4}>
                            <img
                                src="/img/pt/pt-1.jpg"
                                alt="Why"
                                style={{
                                    borderRadius: "1rem",
                                    boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                                }}
                            />{" "}
                        </Grid>
                        <Grid item xs={10} sm={12} md={8}>
                            <Grid
                                container
                                spacing={2}
                                display="flex"
                                alignItems="flex-start"
                                justifyContent="center"
                                direction="row-reverse"
                            >
                                {whyData.map((item) => (
                                    <Grid key={item.title} item xs={12} sm={6} md={6} height="100%">
                                        <Paper
                                            elevation={5}
                                            sx={{
                                                bgcolor: "#212121",
                                                borderRadius: "1rem",
                                                p: { xs: 3, sm: 3, md: 4 },
                                            }}
                                        >
                                            <Stack
                                                spacing={1}
                                                direction={"row"}
                                                alignItems="center"
                                                mb={{ xs: 1, sm: 1, md: 2 }}
                                                justifyContent={{ xs: "center", sm: "center", md: "flex-start" }}
                                            >
                                                <item.icon
                                                    sx={{
                                                        opacity: 0.6,
                                                        fill: "#c5a47e",
                                                        width: { xs: 36, sm: 28, md: 36 },
                                                        height: { xs: 32, sm: 28, md: 36 },
                                                    }}
                                                />
                                                <Typography
                                                    sx={{ color: "#E2D2BF" }}
                                                    fontSize={{ xs: 24, sm: 22, md: 24 }}
                                                >
                                                    {item.title}
                                                </Typography>
                                            </Stack>
                                            <Typography
                                                pl={{ xs: 1, sm: 2, md: 1 }}
                                                pr={{ xs: 1, sm: 2, md: 1 }}
                                                fontSize={{ xs: 18, sm: 19, md: 18 }}
                                                textAlign={{ xs: "center", sm: "center", md: "start" }}
                                            >
                                                {item.subtitle}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
    );
};

export default Services6;
