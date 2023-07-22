import qs from "query-string";
import { localApi } from "../axiosSetupFrontend";
import { Monster } from "../../types/types";

export interface getMonstersArgs {
    page: number;
    ordering: string;
    search: string;
}

export interface getMonstersReponse {
    count: number;
    results: Monster[];
}

export const getMonsters = async (
    args: getMonstersArgs
): Promise<getMonstersReponse> => {
    const { page, ordering, search } = args;

    const url = qs.stringifyUrl({
        url: "monsters",
        query: {
            page,
            ordering,
            search,
        },
    });

    const { data } = await localApi.local.get<getMonstersReponse>(url);

    return data;
};
