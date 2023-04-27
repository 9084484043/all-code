const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const multer = require('multer')
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const server = require('http').createServer();
const globalErrHandler = require('./controllers/errorController');
const path = require("path");
var fs = require('fs');
const rout = require('./modules/apply/applyRoutes')
const hire = require('./modules/hiring/hiringRoutes')
// const AppError = require('./utils/appError');

const app = express();

app.use('/', rout)
app.use('/', hire)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const io = require("socket.io")(server);

// Allow Cross-Origin requests
app.use(cors());

// Set security HTTP headers
app.use(helmet());

// Limit request from the same API 
const limiter = rateLimit({
    max: 150,
    windowMs: 60 * 60 * 1000,
    message: 'Too Many Request from this IP, please try again in an hour'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({
    limit: '15kb'
}));

// Data sanitization against Nosql query injection
app.use(mongoSanitize());

// Data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

// Routes
// app.use('/api/v1/users', userRoutes);

// handle undefined Routes


app.use(globalErrHandler);


require('dotenv').config();


process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION!!! shutting down...');
    console.log(err.name, err.message);
    console.log(err)
    process.exit(1);
});

const routes = require('./routes/web');
const connection = require('./config/connection');
console.log('connection ',connection)
routes.configure(app, io, connection.connectToDb());

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION!!!  shutting down ...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});

 
