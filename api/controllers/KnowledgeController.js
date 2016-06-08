/**
 * KnowledgeController
 *
 * @description :: Server-side logic for managing knowledges
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var _ = require('lodash');

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
    },

    postLabel: function(req, res) {

        var param = req.body;

        if (param == undefined || param.drug_name == undefined)
            return res.badRequest();

        // drug_name
        // term_of_use
        // warning_label
        // text_label
        // remark

        DrugLabelService.findByName(param.drug_name)
            .then(function(result) {
                return res.json(result);
            });

        // return res.json(result);
    }
};
