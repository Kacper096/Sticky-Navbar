// Tutaj umieść kod.
$(document).ready(
function(){
    $(window).on('scroll',function()
                {
        if($(window).scrollTop())
            {
                $('nav').addClass('black');
            }
        else
            {
                $('nav').removeClass('black');
            }
    })
    
    $(".social").on({
        mouseenter: function(){
            $(this).animate({left:0+'px'})
        },
        mouseleave: function(){
            $(".social").animate({left:-240+'px'})
        }
    })
})