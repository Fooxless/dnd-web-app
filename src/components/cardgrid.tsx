import { Box } from "@mui/material";
import Card from "./card";
import { Monster } from "../types/types";

interface CardGridProps {
    monsters: Monster[] | undefined;
}

export default function MonsterCardGrid({ monsters }: CardGridProps) {
    if (!monsters) return null;

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr));",
                gap: 3,
                p: 3,
                justifyItems: "center",
            }}
        >
            {monsters?.map((monster: Monster) => (
                <Box key={monster?.name}>
                    {monster && <Card key={monster?.name} monster={monster} />}
                </Box>
            ))}
        </Box>
    );
}
