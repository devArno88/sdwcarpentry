import { Button, Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";

const style = {
    maxHeight: "100vh",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "100%", sm: "80%", md: "60%" },
    bgcolor: "#181818",
    borderRadius: "1rem",
    border: "1px solid #c5a47e",
    boxShadow: 24,
    pt: 6,
    pb: 6,
    pr: { xs: 3, sm: 5, md: 8 },
    pl: { xs: 3, sm: 5, md: 8 },
    // gap: { xs: 2, sm: 3, md: 4 },
    gap: 4,
    overflow: "scroll",
};

export default function BasicModal({ open, modalData, handleClose }) {
    const { icon, title, content, services } = modalData;
    const Icon = icon;
    const lineBreak = "%0D%0A";
    const doubleBreak = `${lineBreak}${lineBreak}`;
    const body = `Hi Stuart,${doubleBreak}I am getting in touch with regards to the ${title.replaceAll(
        "&",
        "and"
    )} Services advertised on sdwcarpentry.com.${doubleBreak}[ INSERT ANY ADDITIONAL INFORMATION HERE ]${doubleBreak}My phone number is: [ PHONE NUMBER ].${doubleBreak}I look forward to hearing from you.${doubleBreak}Best regards,${lineBreak}[ NAME ]`;
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="service-modal-title"
            aria-describedby="service-modal-description"
            sx={{ overflow: "scroll" }}
        >
            <Stack sx={style}>
                <Stack alignItems="center" justifyContent="center">
                    <Stack direction="row" sx={{ alignItems: "center", justifyContent: "center", gap: 1.5 }}>
                        {Icon ? (
                            <Icon
                                sx={{
                                    height: { xs: 28, sm: 32, md: 36 },
                                    width: { xs: 28, sm: 32, md: 36 },
                                    fill: "#c5a47e",
                                }}
                            />
                        ) : null}
                        <Typography sx={{ fontSize: { xs: 26, sm: 27, md: 28 } }} id="service-modal-title" variant="h4">
                            {title}
                        </Typography>
                    </Stack>
                    <Typography
                        fontWeight={300}
                        color="#9f9f9f"
                        letterSpacing={2}
                        sx={{ opacity: 0.8, fontSize: { xs: 20, sm: 21, md: 22 } }}
                        mt={1}
                        id="service-modal-description"
                        // variant="h5"
                    >
                        SDW Carpentry
                    </Typography>
                </Stack>
                <Stack spacing={2}>
                    {services.map((svc, i) => {
                        const [first, second] = svc.split(":");
                        return (
                            <Stack key={i}>
                                <Typography
                                    variant="h6"
                                    letterSpacing={1}
                                    sx={{ color: "#c5a47e", fontSize: { xs: 18, sm: 19, md: 20 } }}
                                    mb={0.5}
                                >
                                    {first}
                                </Typography>
                                <Typography letterSpacing={0.5}>{second}</Typography>
                            </Stack>
                        );
                    })}
                </Stack>
                <Stack direction="row" justifyContent="center" spacing={2}>
                    <Button
                        sx={{
                            borderRadius: 4,
                            color: "#c5a47e",
                            width: { xs: "40vw", sm: 200 },
                            fontSize: { xs: 14, sm: 15, md: 16 },
                        }}
                        variant="outlined"
                        color="error"
                        size="large"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={`mailto:contact@sdwcarpentry.com?subject=Enquiry: ${title}&body=${body}`}
                    >
                        <Button
                            variant="outlined"
                            color="warning"
                            size="large"
                            sx={{
                                borderRadius: 4,

                                color: "#c5a47e",
                                width: { xs: "40vw", sm: 200 },
                                fontSize: { xs: 14, sm: 15, md: 16 },
                            }}
                        >
                            Get In Touch
                        </Button>
                    </a>
                </Stack>
            </Stack>
        </Modal>
    );
}
