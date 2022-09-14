define([
        "jquery",
        "slick"
    ], function($, slick){
        "use strict";
        $(document).ready(function () {
            $('#subcategory-slider').slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: true,
                    focusOnSelect: true,
                    variableWidth: true
            });
        });
    }
)
