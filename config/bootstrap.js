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
        { username: "admin", password: "panda" },
        { username: "siriraj", password: "password" },
        { username: "rajavithi", password: "password" },
        { username: "children", password: "password" },
        { username: "vajira", password: "password" },
        { username: "phramongkut", password: "password" },
        { username: "thammasat", password: "password" },
        { username: "msmchos", password: "password" },
        { username: "chulahos", password: "password" },
        { username: "songkla", password: "password" },
        { username: "ramathibodi", password: "password" },
        { username: "srinagarind", password: "password" },
        { username: "naresuan", password: "password" },
        { username: "burapha", password: "password" },
    ];


    var qInsert = _.map(userList, UserService.findOrCreateUser);

    Q.all(qInsert)
        .then(function() {

            cb();

        });

};
