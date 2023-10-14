import { Chip, Stack, Typography } from "@mui/material";

import { titleCase } from "../../common/helperFunc";

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
            <Typography>{name}</Typography>
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
                    <Chip
                        sx={{
                            bgcolor: "#9DB2BF",
                            m: 0.5,
                            py: 0.5,
                            height: "auto",
                            "& .MuiChip-label": {
                                display: "block",
                                whiteSpace: "normal",
                            },
                        }}
                        key={item}
                        label={
                            <Typography color="white" variant="body2">
                                {titleCase(item)}
                            </Typography>
                        }
                    />
                ))}
            </Stack>
        </Stack>
    );
}
