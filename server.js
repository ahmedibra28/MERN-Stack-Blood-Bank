const express = require("express");
const connectDB = require("./config/db");
const morgan = require("morgan");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/users", require("./routers/api/users"));
app.use("/api/auth", require("./routers/api/auth"));
app.use("/api/blood-request", require("./routers/api/bloodRequest"));
app.use("/api/blood-store", require("./routers/api/bloodStore"));
app.use("/api/blood-issue", require("./routers/api/bloodIssue"));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
