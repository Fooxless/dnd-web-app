import type { NextApiRequest, NextApiResponse } from 'next'
const axios = require('axios');



export default async function monsters(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  else {
    const data = JSON.parse(req.body);
    const url = `https://api.open5e.com/monsters/?ordering=challenge_rating&page=${data.page}`;
    console.log("data", data);
    await axios.get(url, { headers: { "Accept-Encoding": "gzip,deflate,compress" } })
      .then(function (response: any) {
        // handle success
        var newresults = [];
        for (var i = 0; i < 20; i++) {
          newresults.push(response.data.results[i])
        }
        response.data.results = newresults;
        res.status(200).json(response.data)
      })
      .catch(function (error: any) {
        // handle error
        res.status(200).json({ error: true, message: error })
      })

  }


}

