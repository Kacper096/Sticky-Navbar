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
    
   $(".navi",this).on(
        {
            click: function(event){
            /*Usuwamy obiekt downArrow*/
             if(event.target == document.getElementById('login'))
                 $('span.downArrow').fadeOut(1000,"swing",
                     function()
                    {
                     $(this).remove();
                    });
                /*Tworzymy obiekt downArrow*/
             if( !($("span.downArrow").length) && 
                (event.target != document.getElementById('login')))
                 {
                   $(document.body).append($('<span>',{class: 'downArrow'}).append($('<a>',{href: '#content'})));
                 }
             if( $(".navi").hasClass("active"))
                 {
                     $(".navi").removeClass("active");
                 }
                
            $(this).toggleClass("active");
        }
    })
   
})


        
