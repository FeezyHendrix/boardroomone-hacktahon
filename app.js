require('dotenv').config();
const express = require('express');
const app = express();
const helmet = require('helmet');
const compression = require('compression');
const { errorConverter, errorHandler} = require('./middleware/error');
const morgan = require('./utils/morgan');
const router = require('./router');
const ApiError = require('./utils/ApiError');
const httpStatus = require('http-status');
const path = require('path');

app.set('view engine', 'ejs');

/**
 * If node environment isn't test environment 
 * Log http requests to console
 */
 if (process.env.NODE_ENV !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

/**
 * Middlewares
 */
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.use('/', router);
app.use('/static', express.static(path.join(__dirname, './static')))


// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;





