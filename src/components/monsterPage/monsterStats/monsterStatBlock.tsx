import * as React from "react";

import { Box, Stack } from "@mui/material";

export enum MonsterStatType {
    strength = "STR",
    dexterity = "DEX",
    constitution = "CON",
    intelligence = "INT",
    wisdom = "WIS",
    charisma = "CHA",
}

interface MonsterStatBlockProps {
    stat: number;
    statType: MonsterStatType;
}

export default function MonsterStatBlock({
    stat,
    statType,
}: MonsterStatBlockProps) {
    const statBonus = Math.floor((stat - 10) / 2);

    return (
        <Stack
            width={"100%"}
            height={"100%"}
            alignItems="center"
            justifyContent="center"
            pb={1}
            fontWeight={"bold"}
        >
            {statType}
            <Box
                bgcolor="rgba(244, 104, 80, 0.75)"
                width={"100%"}
                height={"80%"}
                borderRadius={2}
                alignItems="center"
                justifyContent="center"
                display="flex"
                color={"black"}
                mt={0}
                fontSize={20}
            >
                {stat}
            </Box>
            <Box
                position={"absolute"}
                borderRadius={1}
                bgcolor="#F46850"
                mt={8}
                minWidth={25}
                width={"2%"}
                alignItems="center"
                justifyContent="center"
                display="flex"
                color={"black"}
                fontSize={12}
            >
                {`${statBonus > 0 ? "+" : ""}${statBonus}`}
            </Box>
        </Stack>
    );
}
