const express = require("express");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const cors = require('cors');

connectDB();

const app = express();

app.use(cors()); // Add this line before your route handlers

app.use(express.urlencoded({ extended: true }));

app.use("/api/products", require("./routes/products"));
app.use("/api/users", require("./routes/users"));
app.use("/api/cart", require("./routes/cart"));

app.use(express.json());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));