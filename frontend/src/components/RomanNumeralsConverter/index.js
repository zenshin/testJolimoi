import React from "react";

const RomanNumeralsConverter = () => {
  const [number, setNumber] = React.useState(0);
  const [submit, setSubmit] = React.useState(false);
  const [romanNumerals, setRomanNumerals] = React.useState(0);
  const [error, setError] = React.useState();

  const updateNumber = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
  };

  const submitNumber = () => {
    setSubmit(true);
  };

  React.useEffect(() => {
    if (submit) {
      fetch(`api/converter?number=${number}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setRomanNumerals(result.convertedNumber);
          },
          (error) => {
            setError(error);
          },
          setSubmit(false)
        );
    }
  }, [submit, number]);

  return (
    <>
      <h1>Roman numerals converter</h1>
      <label htmlFor="number">
        Type in a number between 0 and 100 that you would like to convert to
        roman numerals:{" "}
        <input
          type="number"
          id="number"
          name="number"
          value={number}
          onChange={updateNumber}
          autoFocus
        ></input>
      </label>

      <button onClick={submitNumber}>
        Submit
      </button>
      <p>result in Roman numerals: {romanNumerals}</p>
    </>
  );
};

export default RomanNumeralsConverter;
