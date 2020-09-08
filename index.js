const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
app.use(cors());
app.use(express.json());

const api = require("./routes");

app.use("/api/pay", api);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});
