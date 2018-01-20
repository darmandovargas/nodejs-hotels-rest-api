'use strict';

module.exports = function(app) {
    var hotel = require('../controllers/taskCtrl');
    app.route('/tasks')
        .get(hotel.tasks)
        .post(hotel.add);
    app.route('/tasks/:taskId')
        .get(hotel.gettask)
        .put(hotel.update)
        .delete(hotel.delete);
    app.route('/tasksByName/:taskName')
        .get(hotel.gettaskbyname)
        .put(hotel.update)
        .delete(hotel.delete);
};