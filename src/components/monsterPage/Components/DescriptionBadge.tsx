import { Chip, Stack, Typography } from "@mui/material";

interface DescriptionBadgeProps {
    value: string | number;
    name: string;
}

export default function DescriptionBadge({
    value,
    name,
}: DescriptionBadgeProps) {
    return (
        <Stack
            sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
            }}
        >
            <Typography variant="h6" fontWeight={"bold"}>
                {name}
            </Typography>
            <Chip
                sx={{
                    m: 0.5,
                    bgcolor: "#9DB2BF",
                    px: 0.5,
                    py: 0.5,
                    height: "auto",
                    "& .MuiChip-label": {
                        display: "block",
                        whiteSpace: "normal",
                    },
                }}
                label={
                    <Typography
                        color="#374151"
                        variant="body1"
                        style={{ whiteSpace: "pre-line" }}
                        fontWeight={"bold"}
                    >
                        {typeof value === "string"
                            ? value.replaceAll("*", "")
                            : value}
                    </Typography>
                }
            />
        </Stack>
    );
}
