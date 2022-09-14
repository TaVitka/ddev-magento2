define([
    "jquery",
    "slick"
], function ($, slick){
        "use strict";
        $(document).ready(function (){
            $('#main-slider-subcat').slick({
                slidesToShow: 9,
                slidesToScroll: 3,
                infinite: false,
                speed: 500,
            });
        });
    })
