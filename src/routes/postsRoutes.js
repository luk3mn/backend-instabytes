import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controller/postsController.js";

// Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Especifica o diretório para armazenar as imagens enviadas
    cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
  },
  filename: function (req, file, cb) {
    // Mantém o nome original do arquivo por simplicidade
    cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
  }
});

const upload = multer({dest: "./uploads", storage});
// linux ou mac pode ser usado apenas -> const upload = multer({dest:"./uploads"});

const routes = (app) => {
  app.use(express.json()); // indica que será usado a estrutura JSON

  app.get("/posts", listarPosts); // ler
  app.post("/posts",postarNovoPost); // cria
  app.post("/upload", upload.single("imagem"), uploadImagem);
}

export default routes;