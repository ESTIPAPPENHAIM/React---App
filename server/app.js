const express = require('express');
const globalErrorController = require('./error/globalErrorController');
const app = express();
const imageRouter = require('./routes/imageRouter');

app.use(express.json());
app.use("/image", imageRouter);
app.use(globalErrorController);


module.exports = app;






