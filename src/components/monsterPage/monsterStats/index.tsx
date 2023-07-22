import * as React from "react";

import MonsterStatBar from "./monsterStatBar";
import { Monster } from "../../../types/types";
import MonsterDetails from "./monsterDetails";
import { Stack } from "@mui/material";

interface MonsterStatsProps {
    monster: Monster;
}

export default function MonsterStats({ monster }: MonsterStatsProps) {
    return (
        <>
            <MonsterStatBar monster={monster} />
            <MonsterDetails monster={monster} />
        </>
    );
}
