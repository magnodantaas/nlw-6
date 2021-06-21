import express from "express";

const app = express();

/**
 * GET => Buscar informações
 * POST => Inserir (criar) uma informação
 * PUT => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH => Alterar uma informação específica
 */

app.get("/test", (req, res) => {
  // Request => Entrando
  // Response => Saindo

  return res.send("Olá")
});

app.post("/test-post", (req, res) => {
  return res.send("Olá método post")
});

app.listen(3000, () => console.log("Server is running"));

