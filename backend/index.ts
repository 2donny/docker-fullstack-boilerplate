import express from "express";
import redis from "redis";
import { pool } from "./db";

// Create Redis client
// const redisClient = redis.createClient({
//   host: "redis-server", // docker-compose.yml에 명시한 컨 테이너 이름으로 준다.
//   port: 6379,
// });
const app = express();

app.get("/", (req, res) => {
  res.send("hello world!");
});
app.get("/api/values", (req, res) => {
  pool.query("SELECT * FROM lists;", (err, result, fields) => {
    if (err) return res.status(500).send(err);
    return res.json(result);
  });
});

app.post("/api/value", (req, res, next) => {
  res.json("hello world");
});

// redisClient.set("number", 0);

// app.get("/", (req, res) => {
//   redisClient.get("number", (err, number) => {
//     redisClient.set("number", +number + 1);
//     res.send(`current count : ${number}`);
//   });
// });

app.listen(8080, () => {
  console.log("✅ Server is running on port 8080");
});
