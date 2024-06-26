const express = require("express");
const URL = require("./models/url");
const urlRoute = require("./routes/url");
const shortner = require("./routes/shortner");
const mongoose = require("mongoose");
const path = require("path");  
const userRouter= require('./routes/user')
const cookieParser = require("cookie-parser");
const {restricttoLoggedinUserOnly }= require('./middlewares/auth');

const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
mongoose
  .connect("mongodb://127.0.0.1:27017/urlShortner")
  .then(() => console.log("Db Connected"))
  .catch((err) => console.log("Db not connected" + err));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));  // get form data
app.use(cookieParser());


app.use("/url", restricttoLoggedinUserOnly, urlRoute);
app.use("/", shortner);
app.use('/user',userRouter)

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    try {
      const entry = await URL.findOneAndUpdate(
        { shortId },
        {
          $push: {
            visitHistory: { timestamp: Date.now() }
          }
        }
      );
      if (entry) {
        res.redirect(entry.redirectUrl);
      } else {
        res.status(404).send("URL not found");
      }
    } catch (err) {
      console.error("Error while redirecting:", err);
      res.status(500).send("Internal Server Error");
    }
  });

app.listen(8002, () => console.log("Server started in port 8002"));
