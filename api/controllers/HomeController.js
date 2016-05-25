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
    },

    keys: function(req, res) {

        var vm = {
            title: 'Keys',
            desc: 'I\'m Batman'
        };

        return res.view("home/keys", vm);
    },

    downloads: function(req, res) {

        var vm = {
            title: 'Download',
            desc: 'I\'m Batman'
        };

        return res.view("home/downloads", vm);
    },

    multimedia: function(req, res) {

        var vm = {
            title: 'Multimedia',
            desc: 'I\'m Batman'
        };

        return res.view("home/multimedia", vm);
    }

};
