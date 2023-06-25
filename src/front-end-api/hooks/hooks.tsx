import {
    getMonsterReponse,
    getMonsters,
    getMonstersArgs,
} from "../requests/monsters";
import { UseQueryResult, useQuery } from "react-query";

export const useMonstersQuery = (
    args: getMonstersArgs
): UseQueryResult<getMonsterReponse | undefined> => {
    const options = { ...args };

    return useQuery<getMonsterReponse>(["fetchMonster", options], () =>
        getMonsters(options)
    );
};
