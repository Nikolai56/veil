jQuery(document).ready(function($) {
  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });


  var owl1 = $('.owl-projects');
  owl1.owlCarousel({
    loop:true,
    nav:false,
    dots:false,
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
      }
    }
  });

// Go to the next item
  $('.ourProjects .arrow-right').click(function() {
    owl1.trigger('next.owl.carousel');
  });
// Go to the previous item
  $('.ourProjects .arrow-left').click(function() {
    owl1.trigger('prev.owl.carousel');
  });


  var owl2 = $('.owl-videos');
  owl2.owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    margin:10,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
      },
      600:{
        items:3,
      }
    }
  });

  // Go to the next item
  $('.videos .arrow-right').click(function() {
    owl2.trigger('next.owl.carousel');
  });
// Go to the previous item
  $('.videos .arrow-left').click(function() {
    owl2.trigger('prev.owl.carousel');
  });


  var owl3 = $('.owl-diplomas');
  owl3.owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    margin:38,
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
      }
    }
  });

// Go to the next item
  $('.diplomas .arrow-right').click(function() {
    owl3.trigger('next.owl.carousel');
  });
// Go to the previous item
  $('.diplomas .arrow-left').click(function() {
    owl3.trigger('prev.owl.carousel');
  });




});
