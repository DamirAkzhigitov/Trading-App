import { FastifyInstance } from 'fastify'

async function routes(fastify: FastifyInstance) {
  // onRoomChanged(() => {
  //   fastify.websocketServer.clients.forEach((client: any) => {
  //     if (client.readyState === 1) {
  //       client.send(JSON.stringify(roomListProxy))
  //     }
  //   })
  //
  //   // connection.socket.send()
  // })

  fastify.get('/', { websocket: true }, () => {
    //
  })


}

export default routes
