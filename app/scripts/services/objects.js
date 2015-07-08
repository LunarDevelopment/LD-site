'use strict';

/**
 * @ngdoc service
 * @name smcmsApp.Objects
 * @description
 * # Objects
 * Factory in the smcmsApp.
 */
angular.module('smcmsApp')
    .factory('Objects', function () {
        // Service logic
        // ...

        var mailer = function (mailing_name, further_info, date_design_required, date_print_required, send_date, status, distribution) {
            return {
                mailing_name: mailing_name,
                further_info: further_info,
                date_design_required: date_design_required,
                date_print_required: date_print_required,
                send_date: send_date,
                status: status,
                distribution: distribution
            }
        };
        var setMailer = function (mailer) {
            return {
                mailing_name: mailer.mailing_name,
                further_info: mailer.further_info,
                date_design_required: mailer.date_design_required,
                date_print_required: mailer.date_print_required,
                send_date: mailer.send_date,
                status: mailer.status,
                distribution: mailer.distribution
            }
        };
        // Public API here
        return {
            mailer: mailer,
            setMailer: setMailer
        };
    });