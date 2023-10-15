import * as React from "react";

import { Monster } from "../../../types/types";
import { InfoWrapper } from "../../common/infoWrapper";
import SavingThrows from "../Components/SavingThrows";

import StatBadge from "../Components/StatBadge";
import StatBadgeList from "../Components/StatBadgeList";

interface MonsterMainDetailsProps {
    monster: Monster;
}

export default function MonsterExtraDetails({
    monster,
}: MonsterMainDetailsProps) {
    const savingThrows = SavingThrows({ monster });
    const senses = monster.senses.split(",");
    const languages = monster.languages.split(",");
    const conditionImmunities = monster.condition_immunities.split(",");
    const damageImmunities = monster.damage_immunities.split(/[,;]/);

    return (
        <InfoWrapper
            sxProps={{
                height: "fit-content",
                flexWrap: "wrap",
                flexDirection: "column",
            }}
        >
            <StatBadgeList items={savingThrows} name={"Saving Throws"} />
            <StatBadgeList
                items={damageImmunities}
                name={"Damage Immunities"}
            />
            <StatBadgeList
                items={conditionImmunities}
                name={"Condition Immunities"}
            />
            <StatBadgeList items={senses} name={"Senses"} />
            <StatBadgeList items={languages} name={"Languages"} />
            <StatBadge
                value={monster.challenge_rating}
                name={"Challenge Rating"}
            />
        </InfoWrapper>
    );
}
