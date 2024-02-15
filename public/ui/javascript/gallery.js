//popup1

$('#popup-image-gallery').on('shown.bs.modal', function () {
    $('.popup-slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.popup-slider-nav'
      // adaptiveHeight: true,
    });

    $('.popup-slider-nav').slick({
        vertical: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrow: false,
        focusOnSelect: true, 
        asNavFor: '.popup-slider-for'
      });
  
  });
  var $status = $('.pagingInfo');
  var $slickElement = $('.popup-slider-for');
  
  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
  });


  //popup2

  $('#popup-image-gallery2').on('shown.bs.modal', function () {
    $('.popup-slider-for2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.popup-slider-nav2'
      // adaptiveHeight: true,
    });
    $('.popup-slider-nav2').slick({
      vertical: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrow: false,
      focusOnSelect: true, 
      asNavFor: '.popup-slider-for2'
    });
  
  });

  var $status2 = $('.pagingInfo2');
  var $slickElement2 = $('.popup-slider-for2');
  
  $slickElement2.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status2.text(i + '/' + slick.slideCount);
  });


  //popup3

  $('#popup-image-gallery3').on('shown.bs.modal', function () {
    $('.popup-slider-for3').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.popup-slider-nav3'
      // adaptiveHeight: true,
    });
    $('.popup-slider-nav3').slick({
      vertical: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrow: false,
      focusOnSelect: true, 
      asNavFor: '.popup-slider-for3' 
    });
  
  });

  var $status3 = $('.pagingInfo3');
  var $slickElement3 = $('.popup-slider-for3');
  
  $slickElement3.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status3.text(i + '/' + slick.slideCount);
  });


  //popup4

  $('#popup-image-gallery4').on('shown.bs.modal', function () {
    $('.popup-slider-for4').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.popup-slider-nav4'
      // adaptiveHeight: true,
    });
    $('.popup-slider-nav4').slick({
      vertical: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrow: false,
      focusOnSelect: true, 
      asNavFor: '.popup-slider-for4' 
    });
  
  });

  var $status4 = $('.pagingInfo4');
  var $slickElement4 = $('.popup-slider-for4');
  
  $slickElement4.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status4.text(i + '/' + slick.slideCount);
  });

  //popup5

  $('#popup-image-gallery5').on('shown.bs.modal', function () {
    $('.popup-slider-for5').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.popup-slider-nav5'
      // adaptiveHeight: true,
    });
    $('.popup-slider-nav5').slick({
      vertical: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrow: false,
      focusOnSelect: true, 
      asNavFor: '.popup-slider-for5' 
    });
  
  });

  var $status5 = $('.pagingInfo5');
  var $slickElement5 = $('.popup-slider-for5');
  
  $slickElement5.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status5.text(i + '/' + slick.slideCount);
  });

  //popup6

  $('#popup-image-gallery6').on('shown.bs.modal', function () {
    $('.popup-slider-for6').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.popup-slider-nav6'
      // adaptiveHeight: true,
    });
    $('.popup-slider-nav6').slick({
      vertical: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrow: false,
      focusOnSelect: true, 
      asNavFor: '.popup-slider-for6' 
    });
  
  });

  var $status6 = $('.pagingInfo6');
  var $slickElement6 = $('.popup-slider-for6');
  
  $slickElement6.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status6.text(i + '/' + slick.slideCount);
  });

  //popup7

  $('#popup-image-gallery7').on('shown.bs.modal', function () {
    $('.popup-slider-for7').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.popup-slider-nav7'
      // adaptiveHeight: true,
    });
    $('.popup-slider-nav7').slick({
      vertical: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrow: false,
      focusOnSelect: true, 
      asNavFor: '.popup-slider-for7' 
    });
  
  });

  var $status7 = $('.pagingInfo7');
  var $slickElement7 = $('.popup-slider-for7');
  
  $slickElement7.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status7.text(i + '/' + slick.slideCount);
  });

  //popup8

  $('#popup-image-gallery8').on('shown.bs.modal', function () {
    $('.popup-slider-for8').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.popup-slider-nav8'
      // adaptiveHeight: true,
    });
    $('.popup-slider-nav8').slick({
      vertical: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrow: false,
      focusOnSelect: true, 
      asNavFor: '.popup-slider-for8' 
    });
  
  });

  var $status8 = $('.pagingInfo8');
  var $slickElement8 = $('.popup-slider-for8');
  
  $slickElement8.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status8.text(i + '/' + slick.slideCount);
  });

  //popup9

  $('#popup-image-gallery9').on('shown.bs.modal', function () {
    $('.popup-slider-for9').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.popup-slider-nav9'
      // adaptiveHeight: true,
    });
    $('.popup-slider-nav9').slick({
      vertical: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrow: false,
      focusOnSelect: true, 
      asNavFor: '.popup-slider-for9' 
    });
  
  });

  var $status9 = $('.pagingInfo9');
  var $slickElement9 = $('.popup-slider-for9');
  
  $slickElement9.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status9.text(i + '/' + slick.slideCount);
  });

  //popup10

  $('#popup-image-gallery10').on('shown.bs.modal', function () {
    $('.popup-slider-for10').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.popup-slider-nav10'
      // adaptiveHeight: true,
    });
    $('.popup-slider-nav10').slick({
      vertical: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrow: false,
      focusOnSelect: true, 
      asNavFor: '.popup-slider-for10' 
    });
  
  });

  var $status10 = $('.pagingInfo10');
  var $slickElement10 = $('.popup-slider-for10');
  
  $slickElement10.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status10.text(i + '/' + slick.slideCount);
  });


  //popup11

  $('#popup-image-gallery11').on('shown.bs.modal', function () {
    $('.popup-slider-for11').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.popup-slider-nav11'
      // adaptiveHeight: true,
    });
    $('.popup-slider-nav11').slick({
      vertical: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrow: false,
      focusOnSelect: true, 
      asNavFor: '.popup-slider-for11' 
    });
  
  });

  var $status11 = $('.pagingInfo11');
  var $slickElement11 = $('.popup-slider-for11');
  
  $slickElement11.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status11.text(i + '/' + slick.slideCount);
  });

  //popup12

  $('#popup-image-gallery12').on('shown.bs.modal', function () {
    $('.popup-slider-for12').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.popup-slider-nav12'
      // adaptiveHeight: true,
    });
    $('.popup-slider-nav12').slick({
      vertical: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrow: false,
      focusOnSelect: true, 
      asNavFor: '.popup-slider-for12' 
    });
  
  });

  var $status12 = $('.pagingInfo12');
  var $slickElement12 = $('.popup-slider-for12');
  
  $slickElement12.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status12.text(i + '/' + slick.slideCount);
  });

  //popup13

  $('#popup-image-gallery13').on('shown.bs.modal', function () {
    $('.popup-slider-for13').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.popup-slider-nav13'
      // adaptiveHeight: true,
    });
    $('.popup-slider-nav13').slick({
      vertical: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrow: false,
      focusOnSelect: true, 
      asNavFor: '.popup-slider-for13' 
    });
  
  });

  var $status13 = $('.pagingInfo13');
  var $slickElement13 = $('.popup-slider-for13');
  
  $slickElement13.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status13.text(i + '/' + slick.slideCount);
  });


  //popup14

  $('#popup-image-gallery14').on('shown.bs.modal', function () {
    $('.popup-slider-for14').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.popup-slider-nav14'
      // adaptiveHeight: true,
    });
    $('.popup-slider-nav14').slick({
      vertical: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrow: false,
      focusOnSelect: true, 
      asNavFor: '.popup-slider-for14' 
    });
  
  });

  var $status14 = $('.pagingInfo14');
  var $slickElement14 = $('.popup-slider-for14');
  
  $slickElement14.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status14.text(i + '/' + slick.slideCount);
  });




//popup property details page

$('#property-details-popup').on('shown.bs.modal', function () {
    $('.property-details-popup-for3').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.property-details-popup-nav3'
      // adaptiveHeight: true,
    });
    $('.property-details-popup-nav3').slick({
      vertical: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      arrow: false,
      focusOnSelect: true, 
      asNavFor: '.property-details-popup-for3'
    });
  
  });
  var $status3 = $('.pagingInfo3');
  var $slickElement3 = $('.property-details-popup-for3');
  
  $slickElement3.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status3.text(i + '/' + slick.slideCount);
  });


  
  //pd-gallery-popup1

    $('#pd-gallery-popup1').on('shown.bs.modal', function () {
      $('.pd-gellery-for1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.pd-gallery-nav1'
        // adaptiveHeight: true,
      });
      $('.pd-gallery-nav1').slick({
        vertical: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrow: false,
        focusOnSelect: true, 
        asNavFor: '.pd-gellery-for1' 
      });
    
    });
  
    var $counter1 = $('.pd-gallery-pagingInfo1');
    var $slickElementPD1 = $('.pd-gellery-for1');
    
    $slickElementPD1.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $counter1.text(i + '/' + slick.slideCount);
    });


    //pd-gallery-popup2

    $('#pd-gallery-popup2').on('shown.bs.modal', function () {
      $('.pd-gellery-for2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.pd-gallery-nav2'
        // adaptiveHeight: true,
      });
      $('.pd-gallery-nav2').slick({
        vertical: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrow: false,
        focusOnSelect: true, 
        asNavFor: '.pd-gellery-for2' 
      });
    
    });
  
    var $counter2 = $('.pd-gallery-pagingInfo2');
    var $slickElementPD2 = $('.pd-gellery-for2');
    
    $slickElementPD2.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $counter2.text(i + '/' + slick.slideCount);
    });

     //pd-gallery-popup3

     $('#pd-gallery-popup3').on('shown.bs.modal', function () {
      $('.pd-gellery-for3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.pd-gallery-nav3'
        // adaptiveHeight: true,
      });
      $('.pd-gallery-nav3').slick({
        vertical: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrow: false,
        focusOnSelect: true, 
        asNavFor: '.pd-gellery-for3' 
      });
    
    });
  
    var $counter3 = $('.pd-gallery-pagingInfo3');
    var $slickElementPD3 = $('.pd-gellery-for3');
    
    $slickElementPD3.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $counter3.text(i + '/' + slick.slideCount);
    });

    //pd-gallery-popup4

    $('#pd-gallery-popup4').on('shown.bs.modal', function () {
      $('.pd-gellery-for4').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.pd-gallery-nav4'
        // adaptiveHeight: true,
      });
      $('.pd-gallery-nav4').slick({
        vertical: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrow: false,
        focusOnSelect: true, 
        asNavFor: '.pd-gellery-for4' 
      });
    
    });
  
    var $counter4 = $('.pd-gallery-pagingInfo4');
    var $slickElementPD4 = $('.pd-gellery-for4');
    
    $slickElementPD4.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $counter4.text(i + '/' + slick.slideCount);
    });

    
    //pd-gallery-popup5

    $('#pd-gallery-popup5').on('shown.bs.modal', function () {
      $('.pd-gellery-for5').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.pd-gallery-nav5'
        // adaptiveHeight: true,
      });
      $('.pd-gallery-nav5').slick({
        vertical: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrow: false,
        focusOnSelect: true, 
        asNavFor: '.pd-gellery-for5' 
      });
    
    });
  
    var $counter5 = $('.pd-gallery-pagingInfo5');
    var $slickElementPD5 = $('.pd-gellery-for5');
    
    $slickElementPD5.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $counter5.text(i + '/' + slick.slideCount);
    });

    //pd-gallery-popup6

    $('#pd-gallery-popup6').on('shown.bs.modal', function () {
      $('.pd-gellery-for6').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.pd-gallery-nav6'
        // adaptiveHeight: true,
      });
      $('.pd-gallery-nav6').slick({
        vertical: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrow: false,
        focusOnSelect: true, 
        asNavFor: '.pd-gellery-for6' 
      });
    
    });
  
    var $counter6 = $('.pd-gallery-pagingInfo6');
    var $slickElementPD6 = $('.pd-gellery-for6');
    
    $slickElementPD6.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $counter6.text(i + '/' + slick.slideCount);
    });





  