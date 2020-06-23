jQuery(function(){
    jQuery.fn.animate2 = function (properties, duration, ease) {
        ease = ease || 'ease';
        let cssOrig = { transition: this.css('transition') };
        return this.queue(next => {
            properties['transition'] = 'all ' + duration + 'ms ' + ease;
            this.css(properties);
            setTimeout(function () {
                this.css(cssOrig);
                next();
            }, duration);
        });
    };

    let duration = 300;
    let Aside = jQuery('#nav-drawer aside');
    let Close = jQuery('#nav-close');

    jQuery('.button').on('click',function(){
        Aside.stop(true).animate2({
            transform: 'translateX(0%)'
        }, duration, 'easeOutBack');
        Close.stop(true).css('display','block').animate({
            opacity: 0.5
        },100);
    })
    jQuery('.my-parts, #nav-close').on('click',function(){
        Aside.stop(true).animate2({
            transform: 'translateX(125%)'
        },duration, 'easeInBack');
        Close.stop(true).css('display','none');
    });
});
