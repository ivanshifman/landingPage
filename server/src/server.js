import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "https://landingpage-sorq.onrender.com/" || "http://localhost:3000",
  })
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../../")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../index.html"));
});

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
