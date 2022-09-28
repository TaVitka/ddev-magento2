define([
    "jquery",
    "slick"
], function ($, slick) {
    "use strict";
    $(document).ready(function () {
        let looksSlider = $('.main-looks__wrapper > .pagebuilder-column-group');
        if (looksSlider.length) {
            looksSlider.slick({
                slidesToScroll: 1,
                slidesToShow: 6,
                infinite: false,
            });
        }
    });
});
