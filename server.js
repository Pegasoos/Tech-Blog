const express = require("express");
const path = require("path");

const app = express();

const sequelize = require("./config/connection");
const PORT = process.env.PORT || 3001;

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () =>{console.log(`Serving at http://localhost:${PORT}`)})
});