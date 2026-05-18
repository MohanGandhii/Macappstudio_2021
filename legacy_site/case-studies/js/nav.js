$(window).scroll(function () {
     var sc = $(window).scrollTop()
    if (sc > 30) {
        $("#header").addClass("smaller")
    } else {
        $("#header").removeClass("smaller")
    }
});


//mobile responsive toggle
var mobilclickcount = 0;
$('.togglebtn').click(function(){
    if ($('.togglebtn').hasClass('mobiletogglemenu')) {
        $('.togglebtn').removeClass('mobiletogglemenu');
        $('.navigation').removeClass('mobiletogglelist');
        $('.navigation').css('display','none');
        $('body').css({'overflow':'scroll'});
    }
    else{
       $('.navigation').css('display','block');
       $('.navigation').addClass('mobiletogglelist');
        $('.togglebtn').addClass('mobiletogglemenu');
        $('body').css({'overflow':'hidden'});
        mobilclickcount = 1;
    }
});
    
$('.navigation a').click(function(){
      if ($('.navigation').hasClass('mobiletogglelist')) {
        $('.navigation').removeClass('mobiletogglelist');
        $('.togglebtn').removeClass('mobiletogglemenu');
        $('.navigation').css('display','none');
        $('body').css({'overflow':'scroll'});
      if ($('html').hasClass('mobiletogglelist')) {
    $('.navigation').removeClass('mobiletogglelist');
    $('.navigation').css('display','none');
    $('.togglebtn').removeClass('mobiletogglemenu');
    $('body').css({'overflow':'scroll'});
    }
    }
    else{

    }  
});
    
$('.bclose').click(function(){
    if ($('.navigation').hasClass('mobiletogglelist')) {
        console.log(mobilclickcount);
        if(mobilclickcount == 1){
            $('.navigation').removeClass('mobiletogglelist');
            $('.togglebtn').removeClass('mobiletogglemenu');
             $('.navigation').css('display','none');
            $('body').css({'overflow':'scroll'});
        }
        else{
            mobilclickcount--;
        }
    }
    else{
    }
});

    

    $(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 0); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});




       