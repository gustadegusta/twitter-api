const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  var routerget = await pool.query("SELECT * FROM public.db_posts");
  res.status(200).json(routerget.rows);
});

router.post("/", async (req, res) => {
  res.status(200).send("postei!");
});

router.delete("/", async (req, res) => {
  res.status(200).send("delete!");
});

module.exports = router;
