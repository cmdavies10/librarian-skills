// require relevant NPM packages
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3000;
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// varibale builds
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Define API routes here which relates to the routes from other files
app.use(routes);

// Connect MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
