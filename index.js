
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const hotelData = require("./allData/hotelData.json")
app.use(cors());

app.get("/", (req, res) => {
    res.send("Travel guru is running")
})
app.get("/hotelData", (req, res) => {
    res.send(hotelData);
})

app.listen(port, () => {
    console.log(`Travel guru Api is running on port ${port}`);
})