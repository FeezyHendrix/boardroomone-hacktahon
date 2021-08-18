require('dotenv').config();
const express = require('express');
const app = express();
const helmet = require('helmet');
const compression = require('compression');
const { errorConverter, errorHandler} = require('./middleware/error');
const morgan = require('./utils/morgan');

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

/**
 * If node environment isn't test environment 
 * Log http requests to console
 */
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}
// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;





