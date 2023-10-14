import * as React from "react";

import MonsterStatBar from "./monsterStatBar";
import { Monster } from "../../../types/types";
import MonsterMainDetails from "./monsterMainDetails";
import MonsterExtraDetails from "./monsterExtraDetails";
import { Stack } from "@mui/material";
import MonsterAbilities from "./monsterAbilities";

interface MonsterStatsProps {
    monster: Monster;
}

export default function MonsterStats({ monster }: MonsterStatsProps) {
    return (
        <Stack
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
            }}
            spacing={2}
            mb={5}
        >
            <MonsterMainDetails monster={monster} />
            <MonsterStatBar monster={monster} />
            <MonsterExtraDetails monster={monster} />
            <MonsterAbilities monster={monster} />
        </Stack>
    );
}
