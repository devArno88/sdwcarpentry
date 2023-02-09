import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";
import KeyboardArrowUpTwoToneIcon from "@mui/icons-material/KeyboardArrowUpTwoTone";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

import banner2 from "../../public/img/bg/banner1.png";
import banner4 from "../../public/img/bg/banner2.png";
import banner3 from "../../public/img/bg/banner3.png";
import banner1 from "../../public/img/bg/banner4.png";

const banners = [banner1, banner2, banner3, banner4];

const Banner = ({ title, subtitle, prevLink, nextLink, banner }) => {
    const htmlSubtitle =
        subtitle?.includes("<") && subtitle?.includes(">") ? (
            <div dangerouslySetInnerHTML={{ __html: subtitle }} />
        ) : null;
    return (
        <Paper
            elevation={5}
            sx={{
                // bgcolor: "#c5a47e",
                width: "100vw",
                pt: 4,
                pb: 8,
                cursor: "crosshair",
                mb: 10,
                position: "relative",
                backgroundImage: `url(${banners[banner].src})`,
            }}
        >
            <Typography
                textAlign="center"
                letterSpacing={4}
                sx={{ color: "#E1C16E", mb: 1, fontSize: { xs: 36, sm: 40, md: 50 }, fontWeight: 200 }}
            >
                {title}
            </Typography>
            <Box style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography
                    textAlign="center"
                    fontFamily="monospace"
                    sx={{
                        width: { xs: "90%", sm: "80%" },
                        color: "#333",
                        color: "#EADDCA",
                        fontSize: { xs: 18, sm: 20, md: 22 },
                    }}
                >
                    {htmlSubtitle || subtitle}
                </Typography>
            </Box>
            {prevLink || nextLink ? (
                <Stack
                    width="100%"
                    direction="row"
                    pl={{ xs: 2, sm: 3, md: 3 }}
                    pr={{ xs: 2, sm: 3, md: 3 }}
                    sx={{ position: "absolute", bottom: 10 }}
                    justifyContent={prevLink && nextLink ? "space-between" : "center"}
                >
                    {prevLink ? (
                        <Link href={prevLink === "/" ? prevLink : `/#${prevLink}`}>
                            <IconButton>
                                <KeyboardArrowUpTwoToneIcon fontSize="large" sx={{ fill: "#EADDCA" }} />
                            </IconButton>
                        </Link>
                    ) : null}
                    {nextLink ? (
                        <Link href={`/#${nextLink}`}>
                            <IconButton>
                                <KeyboardArrowDownTwoToneIcon fontSize="large" sx={{ fill: "#EADDCA" }} />
                            </IconButton>
                        </Link>
                    ) : null}
                </Stack>
            ) : null}
        </Paper>
    );
};

export default Banner;
