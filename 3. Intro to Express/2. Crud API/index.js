const dotenv = require("dotenv");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const HttpError = require("./errors/HttpError");
const swaggerDocument = require("./docs/swagger.json");
const { readItem, readAll, removeItem } = require("./crud");

dotenv.config(); // wordt standaard uit root gehaald

const api = express();
const port = process.env.PORT;

api.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// if you want to use req.body
api.use(express.json());

api.get("/countries/:id", (req, res, next) => {
  const id = req.params.id;
  return readItem(id)
    .then((val) => res.json(val))
    .catch((err) => next(new HttpError(500, err.message)));
});

api.get("/countries", (req, res, next) => {
  return readAll()
    .then((val) => res.json(val))
    .catch((err) => next(new HttpError(500, err.message)));
});

api.delete("/countries", (req, res, next) => {
  console.log(id)
  return removeItem(id)
    .then((val) => {
      res.status(200).json({ success: "Welp, entry deleted" });
    })
    .catch((err) => next(new HttpError(500, err.message)));
});

api.post("/countries/:id", (req, res, next) => {
  const body = req.body;
  return writeItem(body)
    .then((val) => {
      res.status(200).json({ success: `Stored with ${id}` });
    })
    .catch((err) => next(new HttpError(500, err.message)));
});



// middleware
api.get(
  "/",
  (req, res, next) => {
    console.log("preparations are being made");
    req.preppedData = { name: "Hallo daar yo" }; // preppedData is random
    console.log("preparations done");
    next(); // next is indien er geen response wordt gegeven => door naar volgende middleware
  },
  (req, res, next) => {
    if (req.query.error) {
      next(new HttpError(400, "Dit klopt niet hoor mateke"));
    }
    next(); // next is indien er geen response wordt gegeven => door naar volgende middleware
  },
  (req, res, next) => {
    res.json(req.preppedData);
  }
);

api.use("*", (req, res, next) => {
  next(new HttpError(404, "Deze url klopt niet hoor mateke"));
});

// error handling
api.use((err, req, res, next) => {
  res.status(err.status).json({
    status: err.status,
    message: err.message,
  });
});

api.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
