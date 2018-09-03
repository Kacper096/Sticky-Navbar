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
    
    
    /*Przełączanie do innej strony*/
    $(".active").click(function(e){
        var content = $(".wrapper");
        const href = $(this).attr('href');
        $.ajax({
            url:href,
            
            beforeSend:fucntion(){
            content.empty();
        },
            success:function(result){
            content.html(result);
        },
            error:function(){
                content.html("<p> Przepraszamy, ale strony nie udało się połączyć z serwerem.</p>");
            }
        });
    e.preventDefault();
    })
})