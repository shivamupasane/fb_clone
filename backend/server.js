const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
const allowed = ["http://localhost:3000", "http://localhost:4200"];
const options = (req, res) => {
  let temp;
  let origin = req.header("Origin");
  if (allowed.indexOf(origin) > -1) {
    temp = {
      origin: true,
      optionSuccessStatus: 200,
    };
  } else {
    temp = {
      origin: "none",
      optionSuccessStatus: 400,
    };
  }
  return res(null, temp);
};
app.use(cors(options));
//routes
//const router = require("./routes/user");
//app.use(router);

readdirSync("./routes").map((r) => app.use("/", require(`./routes/${r}`)));

//database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error occured while connecting to db", err));

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
