import type { NextApiRequest, NextApiResponse } from "next";
import qs from "query-string";
import { api } from "./axiosSetupBackend";

const PAGE_LIMIT = 20;

// Was getting duplicate monsters from SRD and menagerie
// document__slug "menagerie"
// document__title "Level Up Advanced 5e Monstrous Menagerie OGL"
// document__url "https://www.levelup5e.com"
const DOCUMENT_SLUG = "wotc-srd";

export default async function monsters(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { ordering, page, search } = req.query;
    console.log("req.query", req.query);

    const url = qs.stringifyUrl({
        url: "monsters",
        query: {
            ordering,
            page,
            search,
            limit: PAGE_LIMIT,
            // Only get monsters from DnD SRD
            document__slug__iexact: DOCUMENT_SLUG,
        },
    });

    try {
        const { data } = await api.open5e.get(url);
        return res.status(200).json(data);
    } catch (error) {
        // handle error
        return res.status(200).json({ error: true, message: error });
    }
}
