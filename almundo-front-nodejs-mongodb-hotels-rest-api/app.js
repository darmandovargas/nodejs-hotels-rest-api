var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./restapi/models/hotelModel'),
  bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/onlinestore', { useMongoClient: true });

var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./restapi/routes/hotelRoutes');
routes(app);

app.use(cors());

app.use(function(req, res) {
    //res.status(404).send({url: req.originalUrl + ' not found'})

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');//, OPTIONS, PUT, PATCH, DELETE

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    //res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    //next();
});

app.listen(port);

console.log('Al Mundo Hotels Website -  RESTful web services with Nodejs started on: ' + port);
