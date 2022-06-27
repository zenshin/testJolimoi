const express = require('express');
const app = express();
const port = 8080
const router = express.Router();

const { convertToRomanNumerals } = require("./components/converter");

app.use('/', router);

router.get("/api/converter", convertToRomanNumerals);

app.listen(port, () => {
  console.log(`Jolimoi app listening on port ${port}`)
})