const express = require("express");
const model = require("./model");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const entry = await model.create(req.body);
    res.status(200).json({
      data: entry,
      mgs: "Sucessfully",
    });
  } catch (err) {
    res.json(err.message);
  }
});
router.get("/", async (req, res) => {
  try {
    const newEntry = await model.find();
    res.status(200).json(newEntry);
  } catch {
    (err) => res.json(err.message);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const newEntry = await model.findById(req.params.id);
    res.status(200).json(newEntry);
  } catch {
    (err) => res.json(err.message);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const newEntry = await model.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(newEntry);
  } catch {
    (err) => res.json(err.message);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const newEntry = await model.findByIdAndRemove(req.params.id, req.body);
    res.status(200).json(newEntry);
  } catch {
    (err) => res.json(err.message);
  }
});

module.exports = router;
