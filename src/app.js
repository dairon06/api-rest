import express from "express";
import "dotenv/config";
import cors from "cors";
import { personajesRouter } from "./routes/personajes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/personajes", personajesRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`Example app listening on port "http://localhost:${port}"`);
});
