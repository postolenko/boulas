var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {

    getMapParams();

    // getPromoParams();

    // ------------------------------

    $(".card .card-content").css({
        "height" : "0"
    });

    $(".show_card").addClass("show");

    // ------------------------------

});

$(window).resize(function() {

    getMapParams();

    // getPromoParams();

});

$(document).ready(function() {

    $(".navigation a").click(function(e) {

        e.preventDefault();

        var hrefAttr = $(this).attr("href");

        var visibleBlock = $(hrefAttr);

        $(".navigation a").removeClass("active");
        $(".navigation").find("a[href = '"+ hrefAttr +"']").addClass("active");

        $('html, body').stop().animate({
            'scrollTop': visibleBlock.offset().top - 20
        }, 800);

        // var navigationWrapp = $(this).closest(".naigation");
        // $(".respmenubtn[data-nav-btn = '"+ navigationWrapp.attr("data-nav") +"']").removeClass("active");
        // navigationWrapp.fadeOut(300);

    });

    // ---------------------------------

    $(".show_popup").click(function(e) {

        e.preventDefault();

        popupName = $(this).attr("data-popup-name");
        popupBlock = $("[data-popup = '"+ popupName +"']");

        popupBlock.fadeIn(400);

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

            if ( $(".popup_wrapp").is(":visible") ) {

                $(".popup_wrapp").fadeOut(300);

            }

        }

    });

    $(".close-popup").click(function() {

        popupBlock = $(this).closest(".popup_wrapp");

        popupBlock.fadeOut(300);

    });

    $(document).mouseup(function (e){

        hide_element = $('.popup');

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            hide_element.closest(".popup_wrapp").fadeOut(300);
        }

    });

    // -------------------------------

    $(function() {

        $(".count-box button").click(function(e) {

            e.preventDefault();

            parentBlock= $(this).closest(".count-box");

            var countInput = parentBlock.find(".count-num input");

            var countVal = countInput.val();

            if(countVal == "") {

                countVal = 1;

            }

            if( $(this).hasClass("minus-btn") && countVal > 1 ) {

                countVal--;

            } else if( $(this).hasClass("plus-btn")) {

                countVal++;

            }

            countInput.val(countVal);

        });

    });


    // -------------------------------

    $("input[type='tel']").mask("+7 (999) 999-99-99");

    // -------------------------------

    $(".del-btn").click(function(e) {

        e.preventDefault();

        parentBlock = $(this).closest(".table-row");

        parentBlock.remove();

    });

    $(".show_card").click(function(e) {

        e.preventDefault();

        parentBlock = $(this).closest(".card");

        var cardContent = parentBlock.find(".card-content");

        if( cardContent.height() > 0 ) {            

            cardContent.css({
                "height" : "0"
            });

            $(this).addClass("show");

        } else {

            cardContent.css({
                "height" : "auto"
            });

            $(this).removeClass("show");

        }

    });

});

function getMapParams() {

    if( $(".map-sect").length > 0 ) {

        $(".map-sect").find("#map").css({
            "width" : $(".map-sect").find(".contacts_content").offset().left + "px"
        });

    }

}

// function getPromoParams() {

//     $("#promo").css({
//         "padding-top" : $(".header-site").height() + "px"
//     });

// }