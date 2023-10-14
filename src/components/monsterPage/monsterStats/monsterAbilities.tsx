import * as React from "react";

import { Monster } from "../../../types/types";
import { InfoWrapper } from "../../common/infoWrapper";

import DescriptionBadge from "./Components/DescriptionBadge";

interface MonsterAbilitiesProps {
    monster: Monster;
}

export default function MonsterAbilities({ monster }: MonsterAbilitiesProps) {
    return (
        <InfoWrapper
            sxProps={{
                height: "fit-content",
                flexWrap: "wrap",
                py: 2,
                justifyContent: "start",
            }}
            spacing={0}
        >
            {monster.special_abilities.map((sa) => (
                <DescriptionBadge
                    key={sa.name}
                    value={sa.desc}
                    name={sa.name}
                />
            ))}
        </InfoWrapper>
    );
}
