import { Stack, Typography } from "@mui/material";

import { titleCase } from "../../common/helperFunc";
import StyledChip from "./StyledChip";

interface StatBadgeListProps {
    items: string[];
    name: string;
}

export default function StatBadgeList({ items, name }: StatBadgeListProps) {
    if (items.length == 0 || items[0]?.length === 0) {
        return null;
    }
    return (
        <Stack
            direction="row"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                mb: 1,
            }}
        >
            <Typography fontWeight={"bold"}>{name}</Typography>
            <Stack
                direction="row"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    flexShrink: 1,
                }}
            >
                {items.map((item) => (
                    <StyledChip value={titleCase(item)} key={item} />
                ))}
            </Stack>
        </Stack>
    );
}
