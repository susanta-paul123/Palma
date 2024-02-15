(function ($) {
    'use strict';

    AOS.init({
        once: true,
    });

    var a = 0;
    $(window).scroll(function () {
        var sticky = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 200) {
            sticky.addClass('sticky-nav');
            $("body").addClass("scrollingheader");
        }else {
            sticky.removeClass('sticky-nav');
            $("body").removeClass("scrollingheader");
        }


   /////////////////////////////////////////////////////////////////////////////////////////////////////////


   if( $('.counter-section').length > 0){
    var oTop = $(".counter-box").offset().top - window.innerHeight;
   }

    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },

                {
                    duration: 850,
                    easing: "swing",
                    step: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );

                        $this.addClass('zoom-text')
                    }
                }
            );
        });

        $(".counter2").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },

                {
                    duration: 850,
                    easing: "swing",
                    step: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );

                        $this.addClass('zoom-text')
                    }
                }
            );
        });

        a = 1;
    }

   

    });

    jQuery(document).ready(function ($) {
       
        $('.header li.dropdown').click(function (e) {
            // e.preventDefault();
            window.location = $(this).find('a').attr('href');
        });

        // Start Counter


        

        $('.home-banner .owl-carousel').owlCarousel({
            items: 1,
            // loop: true,
            autoplay: false,
            animateIn: 'animate__fadeIn',
            animateOut: 'animate__fadeOut',
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: true,
            items: 1,
        });

      
        
        $('.news-carusel .owl-carousel').owlCarousel({
            items: 2,
            loop: true,
            autoplay: true,
            margin: 40,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            nav:true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1
                },
                1000: {
                    items: 2
                }
            }
        });


     
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        $('.op-carousel .owl-carousel').owlCarousel({
            loop: false,
            // autoplay: true,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: true,
            items: 1,
            margin:30,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });

        $('.rp-carousel .owl-carousel').owlCarousel({
            loop: false,
            // autoplay: true,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: true,
            items: 1,
            margin:30,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });


        $('.pm-carousel .owl-carousel').owlCarousel({
            loop: true,
            // autoplay: true,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: true,
            items: 1,
            margin:30,
            center:true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });

        $('.hfs-carousel .owl-carousel').owlCarousel({
            loop: true,
            // autoplay: true,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: true,
            items: 1,
            margin:15
        });

        $('.carousel_20 .owl-carousel').owlCarousel({
            loop: true,
            // autoplay: true,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: true,
            items: 1,
            margin:0,
            
        });

        
        $('.unit-avilable-carousel .owl-carousel').owlCarousel({
            loop: true,
            // autoplay: true,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: true,
            items: 1,
            margin:0
        });

        

        $('.uc-carusel .owl-carousel').owlCarousel({
            loop: true,
            // autoplay: true,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: true,
            items: 1,
            margin:30,
            center:true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });

        //
        $('.award-carousel .owl-carousel').owlCarousel({
            loop: true,
            // autoplay: true,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: true,
            autoplayHoverPause: true,
            nav: false,
            items: 1,
            margin:30,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });

        
        //
        $('.search-community .owl-carousel').owlCarousel({
            loop: true,
            // autoplay: true,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: true,
            autoplayHoverPause: true,
            nav: false,
            items: 1,
            margin:30,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
        

        

        $('.fb-carusel .owl-carousel').owlCarousel({
            loop: true,
            // autoplay: true,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: true,
            items: 1,
            margin:0
        });

        

        $('.ids .owl-carousel').owlCarousel({
            loop: true,
            // autoplay: true,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: true,
            items: 1,
            margin:0,
        });

      

        

       if ($('.horizontal-timeline').length>0){
            $('#palmaMilestone').horizontalTimeline({
                dateDisplay: "year",
                useNavBtns: false,
                autoplay: true,
                useScrollBtns: false,
                autoplayPause_onHover:true,
            });
       }

       if ($('.horizontal-timeline').length>0){
        $('#palmaMilestone2').horizontalTimeline({
            dateDisplay: "year",
            useNavBtns: false,
            autoplay: true,
            useScrollBtns: false,
            autoplayPause_onHover:true,
        });
   }
       

        $('.show-more-field').on('click', function(){
            $('.more-field').slideToggle()
        })

        
if ($('div').hasClass('rightimg-carousel')) {
    var rightimgCarousel = $('#rightimgCarousel');

    rightimgCarousel.owlCarousel({

            loop: true,
            // nav:true,
            dots:false,
            margin: 30,
            autoplay: false,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            touchDrag:false,
            slideBy: 1,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

    $(".pwNext").click(function() {
        rightimgCarousel.trigger('next.owl.carousel');
    });
    $(".pwPrev").click(function() {
        rightimgCarousel.trigger('prev.owl.carousel');
    });
}

//


// 27-02-2023//

$('.leasign-listing .owl-carousel').owlCarousel({
    loop: true,
    // autoplay: true,
    autoplayTimeout: 6000,
    autoplaySpeed: 1500,
    smartSpeed: 1500,
    responsiveClass: true,
    dots: false,
    autoplayHoverPause: true,
    nav: true,
    items: 1,
    margin:0,
    responsive: {
        0: {
            items: 1,
        }
    }
});

//360 rotate

function myFunction(){
    var panorama, viewer, container, infospot, panel;
        
    container = document.querySelector('#tsbox');
    panel = document.querySelector('#panel');
    
    // panorama = new PANOLENS.ImagePanorama('https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg');

    panorama = new PANOLENS.ImagePanorama('https://nexatestwp.com/html/palma/ui/media/images/ll-banner.jpg');
    
    infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
    infospot.position.set(0, -2000, -5000);
    infospot.addHoverElement(panel, 150);
    
    panorama.add(infospot);
    
    viewer = new PANOLENS.Viewer({ container: container });
    viewer.add(panorama);
    
    var renderer, camera, scene, box;
    
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xffffff);
    renderer.setSize(panel.clientWidth, panel.clientHeight);
    camera = new THREE.PerspectiveCamera(45, panel.clientWidth / panel.clientHeight, 1, 2000);
    scene = new THREE.Scene();
    console.log(infospot.element);
    infospot.element.appendChild(renderer.domElement);
    
    box = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), new THREE.MeshNormalMaterial());
    box.position.z = -20;
    scene.add(box);
    
    viewer.addUpdateCallback(function () {
      renderer.render(scene, camera);
      box.rotation.y += 0.03;
    });
}

        // myFunction()

        $("#action360").click(function(){
            $(this).css({'pointer-events':'none'})
            $('.poster').hide();
            myFunction(); 
        });

//end//

//

// $( function() {
//     var dateFormat = "mm/dd/yy",
//     from = $( "#from" )
//         .datepicker({
//         defaultDate: "+1w",
//         changeMonth: true,
//         numberOfMonths: 1
//         })
//         .on( "change", function() {
//         to.datepicker( "option", "minDate", getDate( this ) );
//         }),
//     to = $( "#to" ).datepicker({
//         defaultDate: "+1w",
//         changeMonth: true,
//         numberOfMonths: 1
//     })
//     .on( "change", function() {
//         from.datepicker( "option", "maxDate", getDate( this ) );
//     });

//     function getDate( element ) {
//     var date;
//     try {
//         date = $.datepicker.parseDate( dateFormat, element.value );
//     } catch( error ) {
//         date = null;
//     }

//     return date;
//     }
// });

////

$('.asideToggle-btn').click(function(e){
    e.preventDefault();
    $(".aside-wrapper").addClass('open');
    $( "body" ).append( "<div class='page-overlay'></div>" );
})

$('.aside-close').click(function(){
    $(".aside-wrapper").removeClass('open');
    $('.page-overlay').remove();
})

//////

 //faq

 $('.faq-block').eq(0).children('.question').addClass('active').next('.answer').show();

 $('.question').click(function(){
    $(this).parents('.faq-block').siblings('.faq-block').children('.question').next().slideUp();
    $(this).parents('.faq-block').siblings('.faq-block').children('.question').removeClass('active');
    $(this).toggleClass('active');
    $(this).next('.answer').slideToggle();
});

$("#phone").intlTelInput({})
$("#phone2").intlTelInput({})
$("#phone3").intlTelInput({})
$("#phone4").intlTelInput({})

$("#phone, #phone2, #phone3, #phone4").val('')


//

// $("#country_selector").countrySelect({
//     defaultCountry: "jp",
//     onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
//     responsiveDropdown: true,
//     preferredCountries: ['ca', 'gb', 'us']
// });

if($('.join-form-section').length > 0){
    $("#country_selector").countrySelect({
        preferredCountries: ["xx"]
      });
    
      blankFlag.call(this);
    
      $("#country_selector").on('change', blankFlag);
    
      function blankFlag(e) {
        if ($('.flag').hasClass('xx')) {
    
          $('.xx').addClass('blank');
    
         } else {
    
           return false;
         }
      }
    
}



//

(function() {
    $(function() {
      return $('.file-upload__input').on('change', function() {
        return $('.file-upload__label').html([this.files.length, 'Files to upload'].join(' '));
      });
    });
  
  }).call(this);

  $(".chat-open").click(function(){
    $(this).hide();
    $(".chat-close").show()
    $('.contact-media').fadeIn();
  })

  $(".chat-close").click(function(){
    $(this).hide();
    $(".chat-open").show()
    $('.contact-media').fadeOut();
  })


  //

  if($('.pdp-gallery-section').length>0){
    $('.gallery-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.gallery-slider-nav'
        // adaptiveHeight: true,
      });

      $('.gallery-slider-nav').slick({
        vertical: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrow: false,
        focusOnSelect: true, 
        asNavFor: '.gallery-slider-for',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow:3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      });
  
  }



    //side menu acrrodion
    $(function() {
        $("ul.aside-menu li:has(ul)").prepend('<span class="down"></span>');
        $(".toggle-icon").click(function() {
            $(this).toggleClass("close");
            $(".aside-menu").toggleClass("leftSlide");
            $("body").toggleClass("toggleLeft");
        });
        $('ul.aside-menu li span.down').click(function() {
            $(this).toggleClass('up');
            //alert("hi");
            $(this).siblings('ul').delay(20).slideToggle(200);
            $(this).parents('li').siblings('li').children('ul').slideUp();
            $(this).siblings('ul').children('li').children('ul').slideUp();
            $(this).parents('li').siblings('li').children('span').removeClass('up');
            $(this).siblings('ul').children('li').children('span').removeClass('up');
           });
    });
  

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        

        $(".list-locations a").on("click",function(e) {
            e.preventDefault();
            // var $this = $(this).attr('value');
            var $location = $(this).attr('data-id');
            $(this).parent().toggleClass('active').siblings().removeClass('active')    
            
            $('.list-pins li').each(function() {
                var data = $(this).attr('data-id'); 
                if(data == $location){
                    console.log("data" + data)
                    $(this).toggleClass('active').siblings().removeClass('active') 
                }
            });

            $('.box-list .box').each(function() {
                var data2 = $(this).attr('data-id'); 
                if(data2 == $location){
                    $(this).toggleClass('active').siblings().removeClass('active') 
                }
            });

        })

     //
     $("ul.dropdown-menu li:has(ul)").children('.dropdown-menu').addClass('submenu');

     $('.header li.dropdown').click(function (e) {
        
        window.location = $(this).find('a').attr('href');
        
    });

    //  $('ul.dropdown-menu li.menu-item-506 ul.dropdown-menu').addClass('submenu'); 

    // development page range slider
    
            $('#price-range-submit').hide();

            $("#min_price,#max_price").on('change', function () {

            $('#price-range-submit').show();

            var min_price_range = parseInt($("#min_price").val());

            var max_price_range = parseInt($("#max_price").val());

            if (min_price_range > max_price_range) {
                $('#max_price').val(min_price_range);
            }

            $("#slider-range").slider({
                values: [min_price_range, max_price_range]
            });
            
            });


            $("#min_price,#max_price").on("paste keyup", function () {                                        

            $('#price-range-submit').show();

            var min_price_range = parseInt($("#min_price").val());

            var max_price_range = parseInt($("#max_price").val());
            
            if(min_price_range == max_price_range){

                    max_price_range = min_price_range + 100;
                    
                    $("#min_price").val(min_price_range);		
                    $("#max_price").val(max_price_range);
            }

            $("#slider-range").slider({
                values: [min_price_range, max_price_range]
            });

            });


            $(function () {
            $("#slider-range").slider({
                range: true,
                orientation: "horizontal",
                min: 1100000,
                max: 175000000,
                values: [1100000, 175000000],
                step: 100,

                slide: function (event, ui) {
                if (ui.values[0] == ui.values[1]) {
                    return false;
                }
                
                $("#min_price").val(ui.values[0]);
                $("#max_price").val(ui.values[1]);
                }
            });

            $("#min_price").val($("#slider-range").slider("values", 0));
            $("#max_price").val($("#slider-range").slider("values", 1));

            });

            $("#slider-range,#price-range-submit").click(function () {

            var min_price = $('#min_price').val();
            var max_price = $('#max_price').val();

            $("#searchResults").text("Here List of products will be shown which are cost between " + min_price  +" "+ "and" + " "+ max_price + ".");
            });

    // development page range slider

    });

    // jarallax(document.querySelectorAll(".jarallax"));
			  
    // jarallax(document.querySelectorAll(".jarallax-keep-img"), {
    //   keepImg: true,
    // });

  


}(jQuery));

