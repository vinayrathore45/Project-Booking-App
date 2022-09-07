const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route.js");
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());

mongoose
  .connect(
    "mongodb+srv://vinayrathore45:vinay123@cluster0.euhc6tm.mongodb.net/bookingApp",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});
