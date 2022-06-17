const { handler } = require("../api/index");

const handlerEvent = {
  data: "Hit the endpoint!",
};

handler(handlerEvent);
