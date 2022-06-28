const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8080;
const router = express.Router();

const { convertToRomanNumerals } = require("./components/converter");
const { sse } = require("./components/sse");

app.use("/", router);

router.get("/api/converter", convertToRomanNumerals);
router.get("/api/converter/result", sse);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Jolimoi app listening on port ${port}`)
})