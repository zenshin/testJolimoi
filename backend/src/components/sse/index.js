let constants = require('../../constants');

const sse = (req, res) => {
  res.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",

    // enabling CORS
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  });

  let eventInterval = setInterval(() => {
    res.write(`event: message\n`);
    res.write(`data: ${constants.romanNumber}\n\n`);
    res.end();
    res.flushHeaders();
  }, 100);

  req.on("close", (err) => {
    clearInterval(eventInterval);
    res.end();
  });
};

module.exports = { sse };
