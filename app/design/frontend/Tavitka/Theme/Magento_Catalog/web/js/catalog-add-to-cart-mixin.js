define([
    'jquery',
    'mage/translate',
    'jquery/ui',
], function($, $t, alert){
    'use strict';
    return function(originalWidget) {
        $.widget('mage.catalogAddToCart', $['mage']['catalogAddToCart'], {
            disableAddToCartButton: function (form) {
                var addToCartButtonTextWhileAdding = this.options.addToCartButtonTextWhileAdding || $t(addToCartButtonTextWhileAdding),
                    addToCartButton = $(form).find(this.options.addToCartButtonSelector);

                addToCartButton.addClass(this.options.addToCartButtonDisabledClass);
                addToCartButton.find('span').text(addToCartButtonTextWhileAdding);
                addToCartButton.prop('title', addToCartButtonTextWhileAdding);
            },
            /**
             * @param {String} form
             */
            enableAddToCartButton: function (form) {
                var addToCartButtonTextAdded = this.options.addToCartButtonTextAdded || $t(addToCartButtonTextAdded),
                    self = this,
                    addToCartButton = $(form).find(this.options.addToCartButtonSelector);

                addToCartButton.find('span').text(addToCartButtonTextAdded);
                addToCartButton.prop('title', addToCartButtonTextAdded);

                setTimeout(function () {
                    var addToCartButtonTextDefault = self.options.addToCartButtonTextDefault || $t(addToCartButtonTextAdded);

                    addToCartButton.removeClass(self.options.addToCartButtonDisabledClass);
                    addToCartButton.find('span').text(addToCartButtonTextDefault);
                    addToCartButton.prop('title', addToCartButtonTextDefault);
                }, 1000);
            }

        });
        return $.mage.catalogAddToCart;
    };
});
