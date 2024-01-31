const client = require("./client");

async function init() {
  await client.set("msg:5", "hey this is jack from node js");
  const result = await client.get("msg:6");

  console.log("Result:", result);
}

init();
