import * as React from "react";

import { Monster } from "../../../types/types";
import { InfoWrapper } from "../../common/infoWrapper";
import { titleCase } from "../../common/helperFunc";
import StatBadge from "../Components/StatBadge";
import StatBadgeList from "../Components/StatBadgeList";

interface MonsterMainDetailsProps {
    monster: Monster;
}

export default function MonsterMainDetails({
    monster,
}: MonsterMainDetailsProps) {
    const speeds: string[] = [];

    Object.values(monster.speed).forEach((value, index) => {
        const type = Object.keys(monster.speed)[index];
        value && speeds.push(`${titleCase(type)} ${value}ft`);
    });

    return (
        <InfoWrapper
            sxProps={{ height: "fit-content", flexWrap: "wrap", py: 2 }}
        >
            <StatBadge value={monster.armor_class} name={"Armor Class"} />
            <StatBadge
                value={`${monster.hit_points} (${monster.hit_dice})`}
                name={"Hit Points"}
            />
            <StatBadgeList items={speeds} name={"Speed"} />
        </InfoWrapper>
    );
}
