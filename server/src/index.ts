import fastify from "fastify";
import fastifyCors from "fastify-cors";
import apiRoute from "./routes";

export default class Server {
  app = fastify({ logger: true });

  constructor() {
    this.setup();
  }

  setup() {
    this.app.register(fastifyCors);
    this.app.register(apiRoute, { prefix: "/api" });
  }

  start() {
    return this.app.listen(3001);
  }

  close() {
    return this.app.close();
  }
}
const server = new Server();
server.start();
