/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

 var xlsx = require('excel');

module.exports.bootstrap = function(cb) {

    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

    var convertToJSON = function(array) {
        var first = array[0].join()
        var headers = first.split(',');

        var jsonData = [];
        for (var i = 1, length = array.length; i < length; i++) {

            var myRow = array[i].join();
            var row = myRow.split(',');

            var data = {};
            for (var x = 0; x < row.length; x++) {
                data[headers[x]] = row[x];
            }
            jsonData.push(data);

        }
        return jsonData;
    };

    // Read Excel Sheet
    xlsx('./assets/data/label.xlsx', function(err, data) {
        if (err) throw err;
        // console.log(JSON.stringify(convertToJSON(data)));
        sails.session['excel'] = convertToJSON(data);
    });

    cb();
};
