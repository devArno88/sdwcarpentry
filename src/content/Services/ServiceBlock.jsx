import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const ServiceBlock = ({ handleOpen, icon, image, title, content, services, delay }) => {
    const [show, setShow] = useState(false);
    const Icon = icon;
    return (
        <div
            className="col-lg-4"
            style={{ marginBottom: 28 }}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <div
                onClick={() => handleOpen({ icon, title, content, services })}
                className="item-bx bg-img wow fadeInUp"
                data-wow-delay={`${0.3 + delay}s`}
                style={{ backgroundImage: `url(${image})` }}
            >
                <Stack direction="row" sx={{ alignItems: "center", mb: 2, gap: 1.5 }}>
                    <Icon sx={{ height: 28, width: 28, fill: "#c5a47e" }} />
                    <Typography variant="h5">{title}</Typography>
                </Stack>
                <p>{content}</p>
                {show ? (
                    <p
                        style={{
                            fontSize: 13,
                            position: "absolute",
                            bottom: 20,
                            right: 20,
                            textAlign: "center",
                            fontWeight: 300,
                            letterSpacing: 1,
                            color: "#fff",
                        }}
                    >
                        Read More
                    </p>
                ) : null}
            </div>
        </div>
    );
};

export default ServiceBlock;
