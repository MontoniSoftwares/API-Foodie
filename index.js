import cors from "cors";
import express from "express";
import router from "./routes.js";

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000; // Porta dinâmica ou padrão 3000

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(3001, () => {
  console.log("Servidor rodando na porta: 3001");
});
