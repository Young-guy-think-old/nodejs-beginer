const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
app.use(express.static(publicPath));
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
  res.render("index", { title: "Weather App", name: "Thien Nguyen" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About", name: "Thien Nguyen" });
});

app.get("/help", (req, res) => {
  res.render("help", { title: "Help", content: "This is the help page." });
});

app.get("/weather", (req, res) => {
  res.send({ forcast: "50 degree", location: "HCM" });
});

app.get("*", (req, res) => {
  res.send("404");
});

app.listen(3005, () => {
  console.log("Server is up on port 3005");
});
