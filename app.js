$(document).ready(function () {
    $('.nut1').click(function (e) { 
        e.preventDefault();
        
        $('html').animate({
            scrollTop : $('.about').offset().top
        }, 400);
    });
   
    $('.nut2').click(function (e) { 
        e.preventDefault();
        
        $('html').animate({
            scrollTop : $('.RESUME').offset().top
        }, 400);
    });
   
    $('.nut3').click(function (e) { 
        e.preventDefault();
        
        $('html').animate({
            scrollTop : $('.portfolio').offset().top
        }, 400);
    });
    $('.nutf').click(function (e) { 
        e.preventDefault();
        
        $('html').animate({
            scrollTop : $('.khoi-carousel').offset().top
        }, 400);
    });
   
    $('.nut4').click(function (e) { 
        e.preventDefault();
        
        $('html').animate({
            scrollTop : $('.contact2').offset().top
        }, 400);
    });


    $('.chiacot').click(function (e) { 
        e.preventDefault();

        
       if ($(this).hasClass('active')) {
$(this).removeClass('active');
} else {




        $('p.active').removeClass('active');
        $(this).addClass('active');

}

        
    });
     time =  setInterval(() => {
        
        

        if ($('li.slide:last').hasClass('active')) {

            $('li.slide:last').removeClass('active');
            $('li.slide:first').addClass('active');
            
        } else {
            var slide_active = $('li.active');
        $(slide_active).removeClass('active');
        $(slide_active).next().addClass('active');

        }

        

    }, 3000);

    $('.icon-next').click(function (e) { 
        e.preventDefault();
        
        if ($('li.slide:last').hasClass('active')) {

            $('li.slide:last').removeClass('active');
            $('li.slide:first').addClass('active');
            
        } else {
            var slide_active = $('li.active');
        $(slide_active).removeClass('active');
        $(slide_active).next().addClass('active');

        }
        clearInterval(time)

    });
    $('.icon-prev').click(function (e) { 
        e.preventDefault();
        
        if ($('li.slide:first').hasClass('active')) {

            $('li.slide:first').removeClass('active');
            $('li.slide:last').addClass('active');
            
        } else {
            var slide_active = $('li.active');
        $(slide_active).removeClass('active');
        $(slide_active).prev().addClass('active');

        }
        clearInterval(time)

    });
    
   
    });
   