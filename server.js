const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

const routes = require('./routes')

app.use(express.json());

//Importing routes
app.use('/api/children', routes.childrenRoutes)

app.listen(port, function () {
    console.log(`Server is running on http://localhost:${port}`);
})