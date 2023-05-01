
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const destinationData = require("./allData/destinationData.json")
const hotelData = require("./allData/hotelData.json")
app.use(cors());

app.get("/", (req, res) => {
    res.send("Travel guru is running")
})
app.get("/destination", (req, res) => {
    res.send(destinationData);
})
app.get("/destination/:id", (req, res) => {
    const id = req.params.id;
    const filterData = hotelData.filter(hd => hd.id === +id);
    res.send(filterData);
})

app.listen(port, () => {
    console.log(`Travel guru Api is running on port ${port}`);
})