import { Stack, Typography } from "@mui/material";
import * as React from "react";
import { Monster } from "../../../types/types";
import MonsterAbilities from "../monsterStats/monsterAbilities";
import MonsterExtraDetails from "../monsterStats/monsterExtraDetails";
import MonsterStatBar from "../monsterStats/monsterStatBar";
import MonsterMainDetails from "./monsterMainActions";
import MonsterMainActions from "./monsterMainActions";
import MonsterLegendaryActions from "./monsterLegendaryActions";

interface MosnterActionsProps {
    monster: Monster;
}

export default function MosnterActions({ monster }: MosnterActionsProps) {
    return (
        <Stack
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            width="60%"
            spacing={2}
            mb={5}
        >
            <MonsterMainActions monster={monster} />
            <MonsterLegendaryActions monster={monster} />
        </Stack>
    );
}
