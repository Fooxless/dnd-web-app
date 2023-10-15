import { Chip, Typography } from "@mui/material";

interface BadgeListProps {
    value: string | number;
}

export default function StyledChip({ value }: BadgeListProps) {
    return (
        <Chip
            sx={{
                m: 0.5,
                bgcolor: "#9DB2BF",
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
    );
}
