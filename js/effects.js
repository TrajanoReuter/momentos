$(document).ready(function() {
        $('button.know-more').on('mouseover', function(){
            $(this).addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass('animated flipInX');
            });
        });
        $('button.start').on('mouseover', function(){
            $(this).addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass('animated flipInX');
            });
        });
        $('button.menu-btn').on('click',function(){
            $('#menu-mobile').toggleClass('active');
            $('body').toggleClass('active');
        });
});