import { FastifyInstance } from 'fastify'
import { readExcel } from '../utils/xlsxReader'

const timer = (ms: number) => new Promise(res => setTimeout(res, ms))

interface CellItem {
  DATE: number,
  TIME: unknown,
  LAST: number,
  VOLUME: number,
  FLAGS: number
}

async function routes(fastify: FastifyInstance) {
  console.log('start main rouad');

  const ticks = readExcel()

  const emulateResponse = async (ticks: unknown[]) => {
    for await (const tick of ticks) {
      // console.log(tick)
      fastify.websocketServer.clients.forEach((client: any) => {
        if (client.readyState === 1) {
          client.send(JSON.stringify(tick))
        }
      })
      await timer(100)
    }
  }

  emulateResponse(ticks)


    // console.log('set socket');


  fastify.get('/', { websocket: true }, () => {
    //
  })


}

export default routes
