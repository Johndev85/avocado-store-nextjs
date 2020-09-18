import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  const db = new DB()
  const allEntrie = await db.getAll()
  const length = allEntrie.length

  res.statusCode = 200
  res.setHeader('Content-type', 'application/json')

  res.end(JSON.stringify({ length: length, allEntrie }))
}

export default allAvos
