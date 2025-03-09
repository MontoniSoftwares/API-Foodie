import cors from "cors";
import express from "express";
import router from "./routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// Rotas
app.use(router);

// Rota principal para teste
app.get("/", (req, res) => {
  res.send("API funcionando!");
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
