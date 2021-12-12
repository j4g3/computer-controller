import cors from "cors";
import express from "express";
import { internalIpV4 } from "internal-ip";

const server = express();

server.use(cors());

server.get("/", async (_, response) =>
  response.json({ internal_ip: await internalIpV4() })
);

const run = (port: number = 3333) => {
  console.log(`\nRunning at ::${port}`);
  server.listen(port);
};

export default run;
