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

router.get("/:id", async (req, res, next) => {
  try {
    const getCar = await db("cars")
      .where({ id: req.params.id })
      .first();

    if (getCar) {
      res.status(201).json(getCar);
    } else {
      res.status(401).json({
        message: "Not Found"
      });
    }
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updatedCar = await db("cars")
      .update(req.body)
      .where({ id: req.params.id });

    if (updatedCar) {
      res.status(201).json(updatedCar);
    } else {
      res.status(401).json({
        message: "Not Found"
      });
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await db("cars")
      .where({ id: req.params.id })
      .del();

    res.status(200).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
