$(function() {
    
    /*filter*/
   let filter = $("[data-filter]");
       filter.on("click", function(event) {
       event.preventDefault();
       let cat = $(this).data('filter');
       if(cat == 'all') {
           $("[data-cat]").removeClass('hide');
       } else {
               $("[data-cat]").each(function() {
               let workCat = $(this).data('cat');
              if(workCat !=cat) {
                  $(this).addClass('hide');
              } else {
                  $(this).removeClass('hide');
              }
           });
       }
   })
    
    /*modal*/
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    modalCall.on("click", function(event) {
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data('modal');
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        
        setTimeout(function() {
            $(modalId).find(".modal__dialog").css( {
            transform: "rotateX(0)"
        });
        }, 200);
        
        $('[data-slider="slick"]').slick('setPosition');
    });
    
    modalClose.on("click", function(event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents('.modal');
        
        modalParent.find(".modal__dialog").css( {
            transform: "rotateX(90deg)"
        });
    
        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });
    
    $(".modal").on("click", function(event) {
        let $this = $(this);
        $this.find(".modal__dialog").css( {
            transform: "rotateX(90deg)"
        });
        
        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });
    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });
    
    
    /*Slider*/
   $('[data-slider="slick"]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
        });
    
    $(".slickPrev").on('click', function() {
        event.preventDefault();
        
        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
        currentSlider.slick("slickPrev");
        
    });
    
    $(".slickNext").on('click', function() {
        event.preventDefault();
        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
        currentSlider.slick("slickNext"); 
    });
    
    
    $('.reviewsSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        fade: true,
    });
    
    /*Mpbile nav*/
    const navToggle = $("#navToggle");
    const nav = $("#nav");
    navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    })
    
    /*smooth scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elemendOffset = $(elementId).offset().top;
        
        nav.removeClass("show");
        
        $("html, body").animate({
            scrollTop: elemendOffset - 40
        }, 1100);
        
    });    
});




