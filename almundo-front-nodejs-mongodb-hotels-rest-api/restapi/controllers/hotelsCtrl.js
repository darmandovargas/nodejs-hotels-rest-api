'use strict';

var mongoose = require('mongoose'),
    Hotels = mongoose.model('Hotels');

exports.hotels = function(req, res) {
    Hotels.find({}, function(err, hotel) {
        if (err)
            res.send(err);
        var response = {
            hotels: hotel
        };
        //res.json(response);
        res.json(hotel);
    });
};

exports.add = function(req, res) {
    var new_hotel = new Hotels(req.body);
    new_hotel.save(function(err, hotel) {
        if (err)
            res.send(err);
        res.json(hotel);
    });
};

exports.gethotel = function(req, res) {
    Hotels.findById(mongoose.Types.ObjectId(req.query.hotelId), function(err, hotel) {
        if (err)
            res.send(err);
        res.json(hotel);
    });
};


exports.gethotelbyname = function(req, res) {
    Hotels.find({"name":{$regex: req.query.hotelName}}).exec(function(err, hotel) {
        if (err)
            res.send(err);
        res.json(hotel);
    });
};

exports.update = function(req, res) {
    var id = mongoose.Types.ObjectId(req.query.hotelId);
    Hotels.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, hotel) {
        if (err)
            res.send(err);
        res.json(hotel);
    });
};

exports.delete = function(req, res) {
    var id = mongoose.Types.ObjectId(req.query.hotelId);
    Hotels.remove({
        _id: id
    }, function(err, hotel) {
        if (err)
            res.send(err);
        res.json({ message: 'Hotel deleted successfully' });
    });
};
