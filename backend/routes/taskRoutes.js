import express from "express";
import Task from "../models/task.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

export default router; // ✅ important
