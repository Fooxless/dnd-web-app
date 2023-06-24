import { getMonsters, getMonstersArgs } from "../requests/monsters";
import { UseQueryResult, useQuery } from "react-query";

export const useMonstersQuery = (
    args: getMonstersArgs
): UseQueryResult<any | undefined> => {
    const options = { ...args };
    console.log("options", options);
    return useQuery<any>(["fetchMonster", options], () => getMonsters(options));
};
