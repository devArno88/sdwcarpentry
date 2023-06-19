import AlternateEmailTwoToneIcon from "@mui/icons-material/AlternateEmailTwoTone";
import PhoneIphoneTwoToneIcon from "@mui/icons-material/PhoneIphoneTwoTone";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const items = [
    {
        title: "Phone",
        subtitle: "+44 92348 820348",
        icon: PhoneIphoneTwoToneIcon,
    },
    {
        title: "Email",
        subtitle: "Click here to start",
        icon: AlternateEmailTwoToneIcon,
    },
    // {
    //     title: "Location",
    //     subtitle: "Smith Road, Smithville",
    //     icon: HomeTwoToneIcon,
    // },
];

const ContactInfo = () => {
    const lineBreak = "%0D%0A";
    const doubleBreak = `${lineBreak}${lineBreak}`;
    const body = `Hi Stuart,${doubleBreak}I am getting in touch with regards to [ INSERT ANY ADDITIONAL INFORMATION HERE ]${doubleBreak}My phone number is: [ PHONE NUMBER ].${doubleBreak}I look forward to hearing from you.${doubleBreak}Best regards,${lineBreak}[ NAME ]`;

    const EmailBlock = ({ children }) => (
        <a
            target="_blank"
            rel="noreferrer"
            href={`mailto:sdwcarpentryltd@gmail.com?subject=General Enquiry&body=${body}`}
            style={{ width: "100%", height: "100%" }}
        >
            {children}
        </a>
    );
    return (
        <div className="info pt-0 pb-80">
            <div className="container">
                <div className="row">
                    <Grid container spacing={6} display="flex" alignItems="center" justifyContent="center">
                        <Grid item xs={10} sm={10} md={6}>
                            <iframe
                                width="100%"
                                height="280"
                                loading="lazy"
                                allowFullScreen=""
                                style={{ border: 0 }}
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d79471.85316571798!2d-0.12064060663753927!3d51.50412651883481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1675888389358!5m2!1sen!2suk"
                            />
                        </Grid>
                        <Grid item xs={10} sm={10} md={4}>
                            <Grid container spacing={2} direction="column">
                                <Paper
                                    elevation={5}
                                    sx={{
                                        p: 5,
                                        bgcolor: "#212121",
                                        borderRadius: "1rem",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Stack spacing={3}>
                                        <Stack spacing={1}>
                                            <Stack
                                                display="flex"
                                                direction="row"
                                                alignItems="center"
                                                justifyContent="center"
                                                ml={-2}
                                                spacing={1}
                                            >
                                                <PhoneIphoneTwoToneIcon
                                                    sx={{
                                                        opacity: 0.6,
                                                        fill: "#c5a47e",
                                                        width: { xs: 32, sm: 28, md: 36 },
                                                        height: { xs: 32, sm: 28, md: 36 },
                                                    }}
                                                />
                                                <Typography
                                                    fontSize={{ xs: 22, sm: 22, md: 24 }}
                                                    sx={{ color: "#E2D2BF" }}
                                                >
                                                    {items[0].title}
                                                </Typography>
                                            </Stack>
                                            <Typography textAlign="center" fontSize={{ xs: 20, sm: 20, md: 22 }}>
                                                {items[0].subtitle}
                                            </Typography>
                                        </Stack>

                                        <EmailBlock>
                                            <Stack spacing={1}>
                                                <Stack
                                                    display="flex"
                                                    direction="row"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    ml={-2}
                                                    spacing={1}
                                                >
                                                    <AlternateEmailTwoToneIcon
                                                        sx={{
                                                            opacity: 0.6,
                                                            fill: "#c5a47e",
                                                            width: { xs: 32, sm: 28, md: 36 },
                                                            height: { xs: 32, sm: 28, md: 36 },
                                                        }}
                                                    />
                                                    <Typography
                                                        fontSize={{ xs: 22, sm: 22, md: 24 }}
                                                        sx={{ color: "#E2D2BF" }}
                                                    >
                                                        {items[1].title}
                                                    </Typography>
                                                </Stack>
                                                <Typography textAlign="center" fontSize={{ xs: 20, sm: 20, md: 22 }}>
                                                    sdwcarpentryltd@gmail.com
                                                </Typography>
                                                <Typography textAlign="center" level="caption">
                                                    Click here to email us!
                                                </Typography>
                                            </Stack>
                                        </EmailBlock>
                                    </Stack>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
