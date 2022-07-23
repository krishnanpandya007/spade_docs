// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { BACKEND_ROOT_URL } from "../../config";

export default async function handler(req, res) {
  if(req.method.toLowerCase() === "post"){
    // Do Valid things

    const { page, action, feedback } = req.body;

    const response = await fetch(`${BACKEND_ROOT_URL}apio/submit_doc_feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        page: page,
        action: action,
        feedback: feedback
      })
    })

    const dataj = await response.json();

    return res.status(response.status).json(dataj)

  }else{
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({'error': `Method ${req.method} not allowed!`});
  }
}
