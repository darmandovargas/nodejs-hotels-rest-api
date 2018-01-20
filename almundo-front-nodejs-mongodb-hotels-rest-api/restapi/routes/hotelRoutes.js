'use strict';

module.exports = function(app) {
    var hotel = require('../controllers/hotelsCtrl');
    app.route('/hotels')
        .get(hotel.hotels)
        .post(hotel.add);
    app.route('/hotels/:hotelId')
        .get(hotel.gethotel)
        .put(hotel.update)
        .delete(hotel.delete);
    app.route('/hotelsByName/:hotelName')
        .get(hotel.gethotelbyname)
        .put(hotel.update)
        .delete(hotel.delete);
};