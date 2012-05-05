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
            (function (){
                var offset = parseInt($(elem).css('bottom'));

                offset += o.nyanSpeed;
                if (offset >=  (o.frameHeight + o.nyanHeight)) {
                    offset = -1 * o.nyanHeight;
                    $(elem).css('left', Math.floor(Math.random() * (o.frameWidth - o.nyanWidth)) + 'px');
                }
                $(elem).css('bottom', offset + 'px');
                setTimeout(arguments.callee, 50);
            })();
        })();

        return this;
    };
})(jQuery);

$(function(){
    //$('.first').stupidrainbow({crazyBlink: true});
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
        console.log('trololo');
        ev.stopPropagation();
    });
    $(document).on('click', function() {
        $('.shareWrapper.hover').removeClass('hover');
    });
});
