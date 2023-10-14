import { Chip, Stack, Typography } from "@mui/material";

interface BadgeListProps {
    value: string | number;
    name: string;
}

export default function StatBadge({ value, name }: BadgeListProps) {
    return (
        <Stack
            direction="row"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Typography mr={1}>{name}</Typography>
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
                    <Typography color="white" variant="body1">
                        {value}
                    </Typography>
                }
            />
        </Stack>
    );
}
