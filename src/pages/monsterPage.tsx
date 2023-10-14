import React, { useState } from "react";

import { NextPage } from "next";
import { PageWrapper } from "../components/pagewrapper";
import CenteredTabs from "../components/monsterPage/monsterTabs";
import { Stack, Typography } from "@mui/material";
import { Monster } from "../types/types";

import MonsterStats from "../components/monsterPage/monsterStats";
import { titleCase } from "../components/common/helperFunc";

const MonsterPage: NextPage = () => {
    const monster = JSON.parse(
        localStorage.getItem("monster") as string
    ) as Monster;
    const [value, setValue] = useState(0);
    console.log("monster", monster);

    return (
        <PageWrapper>
            <Stack alignItems="center" pt={2}>
                <Typography variant="h3" textAlign="center">
                    {monster.name}
                </Typography>
                <Typography variant="subtitle2" textAlign="center">
                    {monster.size} {monster.type}
                    {monster.subtype &&
                        ` (${titleCase(monster.subtype)})`},{" "}
                    {titleCase(monster.alignment)}
                </Typography>
                <CenteredTabs value={value} setValue={setValue} />
                {value == 0 && <MonsterStats monster={monster} />}
                {value == 1 && <>Actions</>}
                {value == 2 && <>Spells</>}
            </Stack>
        </PageWrapper>
    );
};

export default MonsterPage;
