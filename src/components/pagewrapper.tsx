import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

export const PageWrapper = ({ children }: PropsWithChildren) => {
    return (
        <Box
            sx={{
                bgcolor: "#1e293b",
                minHeight: "80%",
                color: "white",
            }}
        >
            {children}
        </Box>
    );
};
