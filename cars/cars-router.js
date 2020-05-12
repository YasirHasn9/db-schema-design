const router = require("express").Router();

const db = require("../data/dbConfig");

router.get("/", async (req, res, next) => {
  try {
    const cars = await db("cars").select();
    res.status(200).json(cars);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
