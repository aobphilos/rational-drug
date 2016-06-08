var _ = require('lodash');
var Q = require('q');

module.exports = {

  findUser: function(u) {

    var deferred = Q.defer();

    // find user data
    User.findOne({ username: u.username, password: u.password })
      .exec(function(err, data) {

        if (err) {
          deferred.reject(err);
        } else {
          deferred.resolve(data);
        }

      });


    return deferred.promise;
  },

  findOrCreateUser: function(u) {

    var deferred = Q.defer();

    // find user data
    User.findOne({ username: u.username, password: u.password })
      .exec(function(err, data) {

        if (err) {
          deferred.reject(err);
        } else {
          if (data) {
            deferred.resolve(data);
          } else {
            UserService.createUser(u)
              .then(function(user) {
                deferred.resolve(user);
              })
              .fail(function(userError) {
                deferred.reject(userError);
              });
          }
        }

      });


    return deferred.promise;
  },

  createUser: function(u) {

    var deferred = Q.defer();

    // create user data
    User.create(u)
      .exec(function(err, data) {

        if (err) {
          deferred.reject(err);
        } else {
          deferred.resolve(data);
        }

      });

    return deferred.promise;
  }

};
