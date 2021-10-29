import express from "express";
import { createConnection } from "typeorm";

createConnection()
  .then(async (connection) => {
    console.log(connection);
    const app = express();

    app.get("/", (req, res) => {
      res.send("hello world!");
    });
    app.get("/api/values", (req, res) => {});

    app.post("/api/value", (req, res, next) => {
      res.json("hello world");
    });

    app.listen(8080, () => {
      console.log("✅ Server is running on port 8080");
    });
  })
  .catch((err) => console.log(err));
