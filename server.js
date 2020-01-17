const express = require("express");
const app = express();

app.listen(process.env.PORT || 7000, () => {
  console.log("server started listening at port 3000");
});
