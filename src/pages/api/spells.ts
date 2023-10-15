import type { NextApiRequest, NextApiResponse } from "next";
import { api } from "./axiosSetupBackend";

export default async function spells(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { spellUrls } = req.body;

    if (spellUrls === undefined) {
        return res
            .status(404)
            .json({ message: "Spell urls are missing from the request." });
    }

    const promises = (spellUrls as string[]).map(
        async (spellUrl) =>
            await api.open5e.get(
                spellUrl.replace("https://api.open5e.com/", "")
            )
    );

    try {
        // Return all spells
        const response = await Promise.all(promises);
        return res.status(200).json(response.map((res) => res.data));
    } catch (error) {
        // handle error
        return res.status(200).json({ error: true, message: error });
    }
}
