import { Stack } from "@mui/material";
import * as React from "react";
import { Monster } from "../../../types/types";

import MonsterSpellList from "./monsterSpellList";

interface MonsterSpellsProps {
    monster: Monster;
}

export default function MonsterSpells({ monster }: MonsterSpellsProps) {
    if (monster.spell_list.length === 0) {
        return <>Sorry, this creatue has no spells.</>;
    }

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
            <MonsterSpellList monster={monster} />
        </Stack>
    );
}
