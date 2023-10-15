import {
    getMonstersReponse,
    getMonsters,
    getMonstersArgs,
} from "../requests/monsters";
import { UseQueryResult, useQuery } from "react-query";
import { getSpells, getSpellsArgs } from "../requests/spells";
import { Spell } from "../../types/types";

const CacheKeys = {
    monsters: "monsters",
    spells: "spells,",
};

export const useMonstersQuery = (
    args: getMonstersArgs
): UseQueryResult<getMonstersReponse | undefined> => {
    const options = { ...args };

    return useQuery<getMonstersReponse>([CacheKeys.monsters, options], () =>
        getMonsters(options)
    );
};

export const useSpellsQuery = (
    args: getSpellsArgs
): UseQueryResult<Spell[] | undefined> => {
    const options = { ...args };

    return useQuery<Spell[]>([CacheKeys.spells, options], () =>
        getSpells(options)
    );
};
