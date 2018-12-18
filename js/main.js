jQuery(document).ready(function($) {
  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });


  var owl1 = $('.owl-projects');
  owl1.owlCarousel({
    loop:true,
    nav: false,
    dots: false,
    margin:50,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
      },
      600:{
        items:3,
      },
      1000:{
        items:4,
        loop:false
      }
    }
  });

// Go to the next item
  $('.ourProjects .arrow-right').after().click(function() {
    owl1.trigger('next.owl.carousel');
  });
// Go to the previous item
  $('.ourProjects .arrow-left').before().click(function() {
    owl1.trigger('prev.owl.carousel');
  });


  $('.owl-videos').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:true
      },
      600:{
        items:3,
        nav:false
      }
    }
  });

});
