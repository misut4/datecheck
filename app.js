const express = require("express");
const dateCheck = require("./api/routes/datecheck");
const app = express();

const PORT = 3000;

//parse form data
app.use(express.urlencoded({ extended: false }));

//parse json
app.use(express.json());

app.use("/", dateCheck);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
