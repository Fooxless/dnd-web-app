import * as React from "react";

import { Box, Stack, Typography } from "@mui/material";
import { Monster } from "../../../types/types";
import { InfoWrapper } from "../../common/infoWrapper";

interface MonsterDetailsProps {
    monster: Monster;
}

export default function MonsterDetails({ monster }: MonsterDetailsProps) {
    return (
        <InfoWrapper sxProps={{ height: 120 }}>
            <Typography>Hp: {monster.hit_points}</Typography>
            <Typography>AC: {monster.armor_class}</Typography>
            <Typography>Hp: {monster.hit_points}</Typography>

            {/* Speed */}

            <Stack spacing={2}>
                {monster.speed.walk && (
                    <Stack
                        direction={"row"}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography mr={1}>Walk Speed: </Typography>
                        <Box
                            bgcolor={"#9DB2BF"}
                            sx={{
                                width: 60,
                                height: 40,
                                borderRadius: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            fontSize={30}
                        >
                            {monster.speed.walk}
                        </Box>
                    </Stack>
                )}
                {monster.speed.swim && (
                    <Stack
                        direction={"row"}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography mr={1}>Swim Speed: </Typography>
                        <Box
                            bgcolor={"#9DB2BF"}
                            sx={{
                                width: 60,
                                height: 40,
                                borderRadius: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            fontSize={30}
                        >
                            {monster.speed.swim}
                        </Box>
                    </Stack>
                )}

                {/* {monster.speed.fly && (
                    <Typography>Fly Speed: {monster.speed.fly}</Typography>
                )}
                {monster.speed.swim && (
                    <Typography>Swim Speed: {monster.speed.swim}</Typography>
                )}
                {monster.speed.burrow && (
                    <Typography>
                        Burrow Speed: {monster.speed.burrow}
                    </Typography>
                )} */}
            </Stack>
        </InfoWrapper>
    );
}
