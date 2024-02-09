import express from "express";
import path, { dirname } from "path";
import { URL } from "url";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const PORT = process.env.PORT || 3000;
const app = express();

// Serve static files from the 'public' directory
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`===Listening on port ${PORT}`);
});
// GET /
app.get("/", (req, res) => {
  console.log("Someone wants the root route!");
  res.sendFile(path.join(__dirname, "index.html"));
});

// GET /login
app.get("/login", (req, res) => {
  console.log("Serving login.html...");
  res.sendFile(path.join(__dirname, "login.html"));
});
