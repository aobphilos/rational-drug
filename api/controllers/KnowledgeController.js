/**
 * KnowledgeController
 *
 * @description :: Server-side logic for managing knowledges
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    people: function(req, res) {

        var vm = {
            title: 'People',
            desc: 'I\'m Batman'
        };

        return res.view("knowledges/people", vm);
    },

    healthcare: function(req, res) {

        var vm = {
            title: 'Healthcare',
            desc: 'I\'m Batman'
        };

        return res.view("knowledges/healthcare", vm);
    },

    label: function(req, res) {

        var vm = {
            title: 'Label',
            desc: 'I\'m Batman'
        };

        return res.view("knowledges/label", vm);
    }
};
