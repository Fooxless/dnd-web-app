import { Box } from "@mui/material";
import Card from "./card";

interface CardGridProps {
    monsters: any;
}

export default function CardGrid({ monsters }: CardGridProps) {
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
            {monsters?.results?.map((monster: any) => (
                <Box key={monster?.name}>
                    {monster && <Card key={monster?.name} monster={monster} />}
                </Box>
            ))}
        </Box>
    );
}
