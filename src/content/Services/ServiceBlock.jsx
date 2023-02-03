import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const ServiceBlock = ({ icon, image, title, content, delay }) => {
    const [show, setShow] = useState(false);
    const Icon = icon;
    const lineBreak = "%0D%0A";
    const doubleBreak = `${lineBreak}${lineBreak}`;
    const body = `Hi Stuart,${doubleBreak}I am getting in touch with regards to the ${title} Services advertised on sdwcarpentry.com.${doubleBreak}[ INSERT ANY ADDITIONAL INFORMATION HERE ]${doubleBreak}My phone number is: [ PHONE NUMBER ].${doubleBreak}I look forward to hearing from you.${doubleBreak}Best regards,${lineBreak}[ NAME ]`;
    return (
        <div
            className="col-lg-4"
            style={{ marginBottom: 28 }}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <a
                target="_blank"
                rel="noreferrer"
                href={`mailto:contact@sdwcarpentry.com?subject=Enquiry: ${title}&body=${body}`}
                style={{ width: "100%", height: "100%" }}
            >
                <div
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
                            Get In Touch &rarr;
                        </p>
                    ) : null}
                </div>
            </a>
        </div>
    );
};

export default ServiceBlock;
