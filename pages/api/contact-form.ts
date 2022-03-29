import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    name: string
}

export default (req: NextApiRequest, res: NextApiResponse) => {
    const body = JSON.parse(req.body);
    console.log("K");
    res.status(200).json({ user: 'Ada Lovelace' });
}