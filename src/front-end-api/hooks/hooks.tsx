import {
    getMonstersReponse,
    getMonsters,
    getMonstersArgs,
} from "../requests/monsters";
import { UseQueryResult, useQuery } from "react-query";

export const useMonstersQuery = (
    args: getMonstersArgs
): UseQueryResult<getMonstersReponse | undefined> => {
    const options = { ...args };

    return useQuery<getMonstersReponse>(["fetchMonster", options], () =>
        getMonsters(options)
    );
};
