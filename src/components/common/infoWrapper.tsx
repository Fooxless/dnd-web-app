import { Stack, SxProps, Theme } from "@mui/material";
import { PropsWithChildren } from "react";

interface InfoWrapperProps {
    sxProps?: SxProps<Theme>;
    spacing?: number;
}

export const InfoWrapper = ({
    sxProps,
    children,
    spacing,
}: PropsWithChildren<InfoWrapperProps>) => {
    return (
        <Stack
            bgcolor="#526D82"
            width={"100%"}
            minWidth={350}
            direction="row"
            spacing={spacing ?? 2}
            borderRadius={2}
            height={90}
            alignItems="center"
            justifyContent="space-evenly"
            mt={3}
            sx={{ p: 1, ...sxProps }}
        >
            {children}
        </Stack>
    );
};
