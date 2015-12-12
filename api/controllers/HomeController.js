/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function(req, res) {

        var obj = {
            title: 'Batman',
            desc: 'I\'m Batman'
        };

        return res.view("home/index", {
            vm: obj
        });
    }

};
