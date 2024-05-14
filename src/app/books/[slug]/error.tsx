"use client"

import { NextApiRequest, NextApiResponse } from 'next';
import { redirect } from 'next/navigation';


export default async function error(req: NextApiRequest, res: NextApiResponse) {
    console.error('An error occurred:', req.method, req.url);

    res.status(500).json({ message: 'An error occurred while processing your request.' });

    return (
        <div>
          <h2>Something went wrong!</h2>
          <button
           >
            Try again
          </button>
        </div>
      )
}
