"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const methodOverride = require('method-override');
const express     = require("express");
const bodyParser  = require("body-parser");
const app         = express();


app.set("view engine", "ejs");
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));


// Mount all resource routes


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
