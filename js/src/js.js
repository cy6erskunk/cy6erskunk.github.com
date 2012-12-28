/*global $:false*/
(function () {
    $.fn.evilbgslider = function (elem,options) {
        var o = $.extend({
                nyanSpeed: 10,
                frameWidth: parseInt($(this).css('width'),10),
                frameHeight: parseInt($(this).css('height'),10),
                nyanWidth: parseInt($(elem).css('width'),10),
                nyanHeight: parseInt($(elem).css('height'),10)
            }, options);

        $(elem).show().css({'position': 'absolute', 'bottom': '-' + o.nyanHeight + 'px', 'left' : Math.floor(Math.random() * (o.frameWidth - o.nyanWidth)) + 'px'});

        (function (){
            var nyan = function (){
                var offset = parseInt($(elem).css('bottom'), 10);

                offset += o.nyanSpeed;
                if (offset >=  (o.frameHeight + o.nyanHeight)) {
                    offset = -1 * o.nyanHeight;
                    $(elem).css('left', Math.floor(Math.random() * (o.frameWidth - o.nyanWidth)) + 'px');
                }
                $(elem).css('bottom', offset + 'px');
                setTimeout(nyan, 50);
            };
            nyan();
        })();

        return this;
    };
})(jQuery);

var lolkeys = [], sublime = "73,68,68,81,68", jsguide = "73,68,75,70,65";
$(document).keydown(function(e) {
    lolkeys.push( e.keyCode );
    if ( lolkeys.toString().indexOf( sublime ) >= 0 ) {
        window.location = '/sublime.html';
    } else if ( lolkeys.toString().indexOf (jsguide ) >= 0) {
        window.location = '/js.html';
    }
});

$(function(){
    $('.first').stupidrainbow({
        arr: [ 0, 255, 0],
        pos: 2,
        sign: 1,
        timeout: 40
    });
    $('.second').stupidrainbow({
        arr: [ 255, 0, 0],
        pos: 1,
        sign: 1,
        timeout: 60
    });
    $('.third').stupidrainbow({
        arr: [ 0, 0, 255],
        pos: 0,
        sign: 1
    });
    //$('.third').stupidrainbow({crazyBlink: true});

    $('body').evilbgslider('.nyan_type_vertical');

    $('.shareWrapper').on('click', function (ev) {
        $(this).toggleClass('hover');
        ev.stopPropagation();
    });
    $(document).on('click', function() {
        $('.shareWrapper.hover').removeClass('hover');
    });

    $('.nyan').bind('click', function() {window.location.href = encodeURI('/yas/?searchid=1948392&text=котики&web=0');});
});
