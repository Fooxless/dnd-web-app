import qs from "query-string";
import { localApi } from "../axiosSetupFrontend";
import { Spell } from "../../types/types";

export interface getSpellsArgs {
    spellUrls: string[];
}

export interface getSpellsReponse {
    spell: Spell;
}

export const getSpells = async (args: getSpellsArgs): Promise<Spell[]> => {
    const { spellUrls } = args;

    const url = qs.stringifyUrl({
        url: "spells",
    });

    const { data } = await localApi.local.post<Spell[]>(url, {
        spellUrls,
    });

    return data;
};
