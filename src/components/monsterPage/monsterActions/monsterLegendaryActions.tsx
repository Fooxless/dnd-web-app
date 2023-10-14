import { Stack, Typography } from "@mui/material";
import { Monster } from "../../../types/types";

import { InfoWrapper } from "../../common/infoWrapper";
import DescriptionBadge from "../Components/DescriptionBadge";

interface MonsterLegendaryActionsProps {
    monster: Monster;
}

export default function MonsterLegendaryActions({
    monster,
}: MonsterLegendaryActionsProps) {
    if (monster.legendary_actions === null) {
        return null;
    }

    return (
        <InfoWrapper
            sxProps={{
                height: "fit-content",
                flexWrap: "wrap",
                py: 2,
                justifyContent: "center",
            }}
            spacing={0}
        >
            <Typography variant="h5">Legendary Actions</Typography>
            <Stack
                sx={{
                    height: "fit-content",
                    flexWrap: "wrap",
                    py: 2,
                    justifyContent: "start",
                }}
            >
                {monster.legendary_actions.map((action) => (
                    <DescriptionBadge
                        key={action.name}
                        value={action.desc}
                        name={action.name}
                    />
                ))}
            </Stack>
        </InfoWrapper>
    );
}
