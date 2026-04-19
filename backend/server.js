require('dotenv').config();   // MUST BE FIRST LINE

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

console.log("MONGO_URI:", process.env.MONGO_URI);  // DEBUG LINE

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

app.listen(5001, () => console.log("Server running"));
