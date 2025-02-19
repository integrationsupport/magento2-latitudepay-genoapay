define([
 'jquery'
], function ($) {
    'use strict';
    $(document).ready(function(){
        $('input[name="groups[latitude_section][groups][latitude][fields][payment_terms][value]"]').addClass('validate-payment-terms');
    })
    return function (target) {
        $.validator.addMethod(
            'validate-payment-terms',
            function (value) {
                if($('#payment_us_latitude_section_latitude_payment_services').val() == 'LPAY'){
                    return true;
                }

                return $('input[name="groups[latitude_section][groups][latitude][fields][payment_terms][value][]"]:checked').length;
            },
            $.mage.__('At least 1 payment term is required.')
        );
        return target;
    };
});