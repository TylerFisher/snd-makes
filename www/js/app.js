var $slides;
var $sections;
var $video;
var $titlecardButtons;

var setUpFullPage = function() {
    $.fn.fullpage({
        autoScrolling: false,
        verticalCentered: false,
        resize: false,
        css3: true,
        scrollingSpeed: 100,
        loopHorizontal: false,
        easing: 'swing',
        afterSlideLoad: autoplayVideo,
        onSlideLeave: stopVideo
    });
};

var autoplayVideo = function(anchor, index, slideAnchor, slideIndex) {
    var $el;
    _.each($slides, function(slide) {
        if ($(slide).data('anchor') === slideAnchor) {
            $el = $(slide);
        }
    });

    $el.find('video')[0].play();

}

var stopVideo = function(anchor, i, slideIndex, direction) {
    var $el;

    $el = $($slides[slideIndex + 1]);

    $el.find('video')[0].pause();

}

$(document).ready(function() {

    /*
    * Define vars
    */

    $slides = $('.section, .slide');
    $sections = $('.section');
    $video = $('.video');
    $titlecardButtons = $('.btn-play');
    if (window.location.hash) {
        slug = window.location.hash.substring(1);
    }

    // init chapters

    setUpFullPage();
});