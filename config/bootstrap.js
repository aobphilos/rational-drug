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
var _ = require('lodash');
var Q = require('q');

module.exports.bootstrap = function(cb) {

    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

    // user constant
    var userList = [
        { userName: "admin", password: "panda" },
        { userName: "siriraj", password: "password" },
        { userName: "rajavithi", password: "password" },
        { userName: "children", password: "password" },
        { userName: "vajira", password: "password" },
        { userName: "phramongkut", password: "password" },
        { userName: "thammasat", password: "password" },
        { userName: "msmchos", password: "password" },
        { userName: "chulahos", password: "password" },
        { userName: "songkla", password: "password" },
        { userName: "ramathibodi", password: "password" },
        { userName: "srinagarind", password: "password" },
        { userName: "naresuan", password: "password" },
        { userName: "burapha", password: "password" },
    ]


    var qInsert = _.map(userList, UserService.findOrCreateUser);

    Q.all(qInsert)
        .then(function() {

            cb();
        });



};
