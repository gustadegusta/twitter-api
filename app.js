const express = require("express");
const app = express();
const router = express.Router();
const recroutes = require("./routes/posts");

app.use(express.json());
app.use("/posts", recroutes);
app.listen(3000);
console.log("servidor rodando 3000");
