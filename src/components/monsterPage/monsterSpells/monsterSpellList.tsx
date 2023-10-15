import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Stack,
    Typography,
} from "@mui/material";
import { Monster } from "../../../types/types";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSpellsQuery } from "../../../front-end-api/hooks/hooks";
import { QueryStateIndicator } from "../../../front-end-api/reactQueryProvider";
import StyledChip from "../Components/StyledChip";
import StatBadge from "../Components/StatBadge";
import StatBadgeList from "../Components/StatBadgeList";

interface MonsterSpellListProps {
    monster: Monster;
}

export default function MonsterSpellList({ monster }: MonsterSpellListProps) {
    const { data: spells, isLoading } = useSpellsQuery({
        spellUrls: monster.spell_list,
    });
    console.log("spells", spells);

    return (
        <Box sx={{ my: 2, minWidth: 350 }}>
            <QueryStateIndicator isLoading={isLoading}>
                {spells?.map((spell) => {
                    return (
                        <Accordion
                            key={spell.slug}
                            sx={{
                                my: 1,
                                borderRadius: 2,
                                bgcolor: "#526D82",
                            }}
                            square={false}
                            disableGutters
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon sx={{ color: "white" }} />
                                }
                                sx={{
                                    bgcolor: "#526D82",
                                    color: "white",
                                    borderRadius: 2,
                                }}
                            >
                                <Stack
                                    direction="row"
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        width: "stretch",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography>
                                        {spell.name}
                                        {spell.requires_concentration && (
                                            <StyledChip value={"C"} />
                                        )}
                                    </Typography>

                                    <StyledChip value={spell.level} />
                                </Stack>
                            </AccordionSummary>

                            <AccordionDetails
                                sx={{
                                    bgcolor: "#526D82",
                                    color: "white",
                                    borderRadius: 2,
                                }}
                            >
                                <StatBadge
                                    value={spell.school}
                                    name={"School"}
                                />

                                <Stack
                                    direction="row"
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <StatBadge
                                        value={spell.casting_time}
                                        name={"Casting"}
                                    />
                                    <StatBadge
                                        value={spell.range}
                                        name={"Range"}
                                    />
                                </Stack>

                                <Stack
                                    direction="row"
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <StatBadge
                                        value={spell.components}
                                        name={"Components"}
                                    />
                                    <StatBadge
                                        value={spell.duration}
                                        name={"Duration"}
                                    />
                                </Stack>

                                <Typography
                                    sx={{ whiteSpace: "pre-line", mb: 2 }}
                                >
                                    {spell.desc}
                                    {spell.higher_level}
                                </Typography>
                                <StatBadgeList
                                    items={spell.spell_lists}
                                    name={"Classes"}
                                />
                                <Stack textAlign="end">
                                    <Typography
                                        sx={{ color: "white" }}
                                        variant="body2"
                                    >
                                        {spell.page}
                                    </Typography>
                                </Stack>
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </QueryStateIndicator>
        </Box>
    );
}
