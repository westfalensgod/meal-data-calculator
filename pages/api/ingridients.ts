// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from "next-connect"
import { connectToDatabase } from "../../lib/mongodb"

type Data = {
  name: string
}

const handler = nextConnect();

handler.post(async (
  req: NextApiRequest,
  res: NextApiResponse<Data>) => {
  const { db } = await connectToDatabase()
  let data = req.body
  
  db.collection('ingridients').insertOne({
    name: data.ingridient,
    kcals: data.calories,
    protein: data.protein,
    fat: data.fat,
    carbs: data.carb,
    state: data.state
  })

  res.json({name: 'ok'});
})
  

export default handler;
