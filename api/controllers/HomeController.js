/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function(req, res) {

        var vm = {
            title: 'Home',
            desc: 'I\'m Batman'
        };

        return res.view("home/index", vm);
    },

    faq: function(req, res) {

        var vm = {
            title: 'Faq',
            desc: 'I\'m Batman'
        };

        return res.view("home/faq", vm);
    },

    contactus: function(req, res) {

        var vm = {
            title: 'Contactus',
            desc: 'I\'m Batman'
        };

        return res.view("home/contactus", vm);
    }

};
