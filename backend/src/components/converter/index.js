const convertToRomanNumerals = (req, res) => {
  try {
    const intNumber = req.query.number;

    const checkValueIsValid = (value) => {
      if (value < 0 || value > 100) {
        return false;
      } else {
        return true;
      }
    };

    const convertToRoman = (num) => {
      const roman = {
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
      };
      let result = "";
  
      for (key in roman) {
        result += key.repeat(Math.floor(num / roman[key]));
        num %= roman[key];
      }
  
      return result;
    };

    if (checkValueIsValid(intNumber)) {
      const convertedNumber = convertToRoman(intNumber);

      return res.status(200).json({ convertedNumber });
    } else {
      return res
        .status(500)
        .send({ message: "Your number must be between 0 and 100" });
    }
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: e.message });
  }
};

module.exports = { convertToRomanNumerals };
