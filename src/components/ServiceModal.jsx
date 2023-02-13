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
    border: "2px solid #000",
    boxShadow: 24,
    pt: 6,
    pb: 6,
    pr: 8,
    pl: 8,
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
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ overflow: "scroll" }}
        >
            <Stack sx={style}>
                <Stack direction="row" sx={{ alignItems: "center", justifyContent: "center", gap: 1.5 }}>
                    {Icon ? <Icon sx={{ height: 36, width: 36, fill: "#c5a47e" }} /> : null}
                    <Typography id="modal-modal-title" variant="h4">
                        {title}
                    </Typography>
                </Stack>
                <Stack spacing={2}>
                    {services.map((svc, i) => {
                        const [first, second] = svc.split(":");

                        return (
                            <Stack key={i}>
                                <Typography variant="h6" letterSpacing={1} sx={{ color: "#c5a47e" }} mb={0.5}>
                                    {first}
                                </Typography>
                                <Typography letterSpacing={0.5}>{second}</Typography>
                            </Stack>
                        );
                    })}
                </Stack>
                <Stack direction="row" justifyContent="center" spacing={2}>
                    <Button
                        sx={{ color: "#c5a47e", width: { xs: "40vw", sm: 200 } }}
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
                            sx={{ color: "#c5a47e", width: { xs: "40vw", sm: 200 } }}
                        >
                            Get In Touch
                        </Button>
                    </a>
                </Stack>
            </Stack>
        </Modal>
    );
}
