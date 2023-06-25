import { Box, Stack, Typography } from "@mui/material";

export default function Card({ monster: monster }: any | undefined) {
    function cardClicked() {
        console.log("Have been clicked");
    }

    return (
        <Box
            sx={{
                bgcolor: "#B7C2D4",
                color: "#374151",
                "&:hover": {
                    background: "#9DA8BA",
                    transform: "scale3d(1.1, 1.1, 1)",
                },
                width: 300,
                py: 2,
                px: 4,
                transition: "transform 0.20s ease-in-out",
            }}
            onClick={cardClicked}
        >
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" fontWeight="bold">
                    {monster?.name}
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                    {`${monster?.type.toUpperCase()}, ${monster?.alignment.toUpperCase()}`}
                </Typography>
            </Box>

            <Stack
                direction="row"
                sx={{
                    justifyContent: "space-between",
                    font: "bold",
                }}
            >
                <Typography variant="body1" fontWeight="bold">
                    CR : {monster?.challenge_rating}
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                    HP: {monster?.hit_points}
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                    AC: {monster?.armor_class}
                </Typography>
            </Stack>
        </Box>
    );
}
