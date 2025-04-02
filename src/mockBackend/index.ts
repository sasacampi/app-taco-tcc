import express from "express";
import cors from "cors";
import { alimentosTACO } from "./taco.mock";
import { fazerLogin } from "./auth.mock";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/login", async (req, res) => {
  try {
    const { email } = req.body;
    const resposta = await fazerLogin(email);
    res.json(resposta);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";
    res.status(401).json({ error: errorMessage });
  }
});

app.get("/api/alimentos", (req, res) => {
  res.json(alimentosTACO);
});

export default app;
