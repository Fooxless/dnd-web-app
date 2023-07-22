import React from "react";

import { NextPage } from "next";
import { PageWrapper } from "../components/pagewrapper";
import {
    Accordion,
    AccordionSummary,
    Box,
    Stack,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SettingsPage: NextPage = () => {
    return (
        <PageWrapper>
            <Typography variant="h2" sx={{ textAlign: "center", pt: 10 }}>
                Settings
            </Typography>
            <Box sx={{ px: "10%", pt: 5 }}>
                <Accordion>
                    <AccordionSummary
                        disabled
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Stack
                            direction="row"
                            sx={{
                                width: "100%",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography>Auto Calculate CR</Typography>
                            <Typography color={"red"}>
                                In Development
                            </Typography>
                        </Stack>
                    </AccordionSummary>
                    {/* <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails> */}
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        disabled
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Stack
                            direction="row"
                            sx={{
                                width: "100%",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography>Color Scheme</Typography>
                            <Typography color={"red"}>
                                In Development
                            </Typography>
                        </Stack>
                    </AccordionSummary>
                    {/* <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails> */}
                </Accordion>
            </Box>
        </PageWrapper>
    );
};

export default SettingsPage;
