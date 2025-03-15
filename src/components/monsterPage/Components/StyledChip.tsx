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
                <Typography color="#374151" variant="body1" fontWeight={"bold"}>
                    {value}
                </Typography>
            }
        />
    );
}
