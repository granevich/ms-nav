/**
 * Created by granevich on 06.05.2016.
 */
$( document ).ready(function() {
    $('.store').on('click', function () {
       $('.store').each(function () {
           $(this).removeClass('store-active');
       });
        if($(this).data('role')=='store'){
            $(this).toggleClass('store-active');
            $('.sub_nav.store').slideToggle(200).addClass('active');
            $('.sub_nav.products').slideUp(200).removeClass('active');

        }
        else if($(this).data('role')=='products') {

            $(this).toggleClass('store-active');
            $('.sub_nav.products').slideToggle(200).addClass('active');
            $('.sub_nav.store').slideUp(200).removeClass('active');
        }
    });
   $('.sub-sub-menu').css({
       'height':'241px'
   });
   $(document).on('click', function (e) {
       $(function(){
           $(document).click(function(event) {
               if ($(event.target).closest(".store").length) return;
               $(".active").slideUp(200);
               $('.store').each(function () {
                   $(this).removeClass('store-active');
               });
               event.stopPropagation();
           });
       });
   });

$('.colp_search').on('click', function () {
    var windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth<=1024){
        $(this).toggleClass('bg-active');
        $('.nav-collapse').toggleClass('active-nav');
    }


});


$('.humb').on('click', function () {
    var navsmall = $('.nav-small');
    $(this).toggleClass('humb-active');

    if(navsmall.data('see')==='hide'){
        navsmall.animate({
            right:'0'
        }, 50);
        navsmall.show();
        navsmall.data('see', 'show')
    }
    else if(navsmall.data('see')==='show'){
        $('.second-level-menu').slideUp();
        $('.third-level-menu').slideUp();
        navsmall.animate({
            right:'-275px'
        }, 200);
        navsmall.hide();
        navsmall.data('see', 'hide')

    }

});


$('.open a').on('click', function (e) {
   if ($(this).data('colp')==='store'){
           $('.prod-small').slideUp();
           $('.store-small').slideToggle();
   }
   else if($(this).data('colp')==='prod'){
       $('.store-small').slideUp();
       $('.prod-small').slideToggle();

   }

});


$('.sub-menu').on('click', function () {
    if ($(this).data('colp')==='office'){
        $('.progr').slideUp();
        $('.games').slideUp();
        $('.windows').slideUp();
        $('.office').slideToggle();

    }
    else if($(this).data('colp')==='windows'){
        $('.progr').slideUp();
        $('.games').slideUp();

        $('.office').slideUp();
        $('.windows').slideToggle();
    }
    else if($(this).data('colp')==='progr'){
        $('.games').slideUp();
        $('.windows').slideUp();
        $('.office').slideUp();
        $('.progr').slideToggle();
    }
    else if($(this).data('colp')==='games'){
        $('.windows').slideUp();
        $('.progr').slideUp();
        $('.office').slideUp();
        $('.games').slideToggle();
    }
    else if($(this).data('colp')==='services'){
        $('.xbox').slideUp();
        $('.business').slideUp();
        $('.develop').slideUp();
        $('.edu').slideUp();
        $('.sevices').slideToggle();
    }
    else if($(this).data('colp')==='xbox'){
        $('.sevices').slideUp();
        $('.business').slideUp();
        $('.develop').slideUp();
        $('.edu').slideUp();
        $('.xbox').slideToggle();

    }
    else if($(this).data('colp')==='business'){
        $('.sevices').slideUp();
        $('.xbox').slideUp();
        $('.develop').slideUp();
        $('.edu').slideUp();
        $('.business').slideToggle();
    }
    else if($(this).data('colp')==='develop'){
        $('.sevices').slideUp();
        $('.xbox').slideUp();
        $('.business').slideUp();
        $('.edu').slideUp();
        $('.develop').slideToggle();
    }
    else if($(this).data('colp')==='edu'){
        $('.sevices').slideUp();
        $('.develop').slideUp();
        $('.xbox').slideUp();
        $('.business').slideUp();
        $('.edu').slideToggle();
    }



});




});