import { Box, Typography } from "@mui/material";
import React from "react";

const Banner = ({ title, subtitle }) => {
    return (
        <Box sx={{ bgcolor: "#c5a47e", width: "100vw", pt: 6, pb: 6, cursor: "crosshair", mb: 10 }}>
            <Typography variant="h3" textAlign="center" sx={{ color: "#E2D2BF", mb: 1 }}>
                {title}
            </Typography>
            <Box style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography variant="h6" textAlign="center" sx={{ width: { xs: "100%", sm: "80%" }, color: "#333" }}>
                    {subtitle}
                </Typography>
            </Box>
        </Box>
    );
};

export default Banner;
