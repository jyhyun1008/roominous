import { createRouter, useBase } from "h3";
import { initSocket } from "~~/server/socket"

const router = createRouter()

router.get(
    '/socket.io',
    defineEventHandler((event)=>initSocket(event))
)

export default useBase('/api', router.handler)