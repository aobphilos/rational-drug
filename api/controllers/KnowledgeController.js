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

        // console.log('param: ', param.drug_name);

        var excel = sails.session['excel'];
        // console.log(excel[0].warning_label);

        var result = _.find(excel, function(xls) {
            return _.startsWith(xls.drug_name.toLowerCase(), param.drug_name.toLowerCase());
        });

        if (!result)
            result = _.find(excel, { drug_name: "" });

        // drug_name
        // term_of_use
        // warning_label
        // text_label
        // remark
        return res.json(result);
    }
};
