import qs from "query-string";
import { localApi } from "../axiosSetupFrontend";

export interface getMonstersArgs {
    page: number;
    ordering: string;
    search: string;
}

export const getMonsters = async (args: getMonstersArgs): Promise<any> => {
    const { page, ordering, search } = args;
    console.log("args", args);
    const url = qs.stringifyUrl({
        url: "monsters",
        query: {
            page,
            ordering,
            search,
        },
    });

    const { data } = await localApi.local.get(url);

    return data;
};
