import { config } from "dotenv";
config();
import express from "express";
import { createConnection, ConnectionOptions } from "typeorm";

console.log(process.env.POSTGRES_HOST);

const connectionOptions: ConnectionOptions = {
  type: "postgres",
  entities: ["*.entity.js,ts"],
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
};

createConnection(connectionOptions)
  .then(async (connection) => {
    const app = express();

    app.get("/", (req, res) => {
      res.send("hello world!");
    });
    app.get("/api/values", (req, res) => {});

    app.post("/api/value", (req, res, next) => {
      res.json("hello world");
    });

    app.listen(3080, () => {
      console.log("✅ Server is running on port 8080");
    });
  })
  .catch((err) => console.log("error : ", err));
