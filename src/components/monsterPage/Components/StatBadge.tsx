import { Stack, Typography } from "@mui/material";
import StyledChip from "./StyledChip";

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
            <Typography mr={1} fontWeight={"bold"}>
                {name}
            </Typography>
            <StyledChip value={value} />
        </Stack>
    );
}
