const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./controllers/route");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/", function (req, res) {
//   res.send("Hello World");
// });
mongoose.Promise = global.Promise;

app.use("/", routes);
uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.0u2rn.mongodb.net/${process.env.MONGO_DB}??authSource=yourDB&w=1
`;

mongoose
  .connect(uri, {
    authSource: "admin",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected…");
  })
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log(`app running on port 3000`);
});
// mongoose
//   .connect(url)
//   .then(() => {
//     console.log("We are connected to the DB");
//     app.listen(8000);
//   })
//   .catch((err) => {
//     console.log("Hello World");
//     console.log(err);
//   });
