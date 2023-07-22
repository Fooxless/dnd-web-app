import * as React from "react";

import { Monster } from "../../../types/types";
import MonsterStatBlock, { MonsterStatType } from "./monsterStatBlock";
import { InfoWrapper } from "../../common/infoWrapper";

interface MonsterStatBarProps {
    monster: Monster;
}

export default function MonsterStatBar({ monster }: MonsterStatBarProps) {
    return (
        <InfoWrapper>
            <MonsterStatBlock
                stat={monster.strength}
                statType={MonsterStatType.strength}
            />
            <MonsterStatBlock
                stat={monster.dexterity}
                statType={MonsterStatType.dexterity}
            />
            <MonsterStatBlock
                stat={monster.constitution}
                statType={MonsterStatType.constitution}
            />
            <MonsterStatBlock
                stat={monster.intelligence}
                statType={MonsterStatType.intelligence}
            />
            <MonsterStatBlock
                stat={monster.wisdom}
                statType={MonsterStatType.wisdom}
            />
            <MonsterStatBlock
                stat={monster.charisma}
                statType={MonsterStatType.charisma}
            />
        </InfoWrapper>
    );
}
