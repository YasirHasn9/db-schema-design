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

router.post("/", async (req, res, next) => {
  try {
    const [id] = await db("cars").insert(req.body);
    const newCar = await db("cars").where({ id });
    if (newCar) {
      res.status(201).json(newCar);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
