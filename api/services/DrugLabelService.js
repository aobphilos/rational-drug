var _ = require('lodash');
var Q = require('q');
var xlsx = require('excel');


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

var loadData = function(excel) {

    var deferred = Q.defer();

    if (excel) {
        deferred.resolve(excel);
    } else {

        // Read Excel Sheet
        xlsx('./assets/data/label.xlsx', function(err, data) {

            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(convertToJSON(data));
            }

        });

    }

    return deferred.promise;

};

module.exports = {

    excelData: null,

    findByName: function(drugName) {

        var deferred = Q.defer();

        var find = function(data) {

            var result = _.find(data, function(item) {
                return _.startsWith(item.drug_name.toLowerCase(), drugName.toLowerCase());
            });

            if (!result)
                result = _.find(data, { drug_name: "" });

            DrugLabelService.excelData = data;

            deferred.resolve(result);
        }

        loadData(DrugLabelService.excelData).then(find);

        return deferred.promise;
    }

};
