import { Box, Typography } from "@mui/material";
import React from "react";

const Banner = ({ title, subtitle }) => {
    const htmlSubtitle =
        subtitle?.includes("<") && subtitle?.includes(">") ? (
            <div dangerouslySetInnerHTML={{ __html: subtitle }} />
        ) : null;
    return (
        <Box sx={{ bgcolor: "#c5a47e", width: "100vw", pt: 6, pb: 6, cursor: "crosshair", mb: 10 }}>
            <Typography textAlign="center" sx={{ color: "#E2D2BF", mb: 1, fontSize: { xs: 36, sm: 40, md: 50 } }}>
                {title}
            </Typography>
            <Box style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography
                    textAlign="center"
                    sx={{ width: { xs: "90%", sm: "80%" }, color: "#333", fontSize: { xs: 18, sm: 20, md: 22 } }}
                >
                    {htmlSubtitle || subtitle}
                </Typography>
            </Box>
        </Box>
    );
};

export default Banner;
