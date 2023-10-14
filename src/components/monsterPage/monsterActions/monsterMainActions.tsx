import { Stack, Typography } from "@mui/material";
import { Monster } from "../../../types/types";

import { InfoWrapper } from "../../common/infoWrapper";
import DescriptionBadge from "../Components/DescriptionBadge";

interface MonsterMainActionsProps {
    monster: Monster;
}

export default function MonsterMainActions({
    monster,
}: MonsterMainActionsProps) {
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
            <Typography variant="h5">Actions</Typography>
            <Stack
                sx={{
                    height: "fit-content",
                    flexWrap: "wrap",
                    py: 2,
                    justifyContent: "start",
                }}
            >
                {monster.actions.map((action) => (
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
