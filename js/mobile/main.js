$(document).ready(function() {

    var topup = $('.top-up');

    topup.on('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    $('.mm-chevron').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).parents('.nav-item').toggleClass('mega-menu-open');
    })

    var sync1 = $("#carousel-1");
    var sync2 = $("#carousel-2");
    var slidesPerPage = 3;
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 3000,
        nav: false,
        autoplay: true,
        lazyLoad:true,
        autoplayTimeout: 2000,
        dots: true,
        dotsContainer: '#carousel-custom-dots',
        loop: true,
        responsiveRefreshRate: 200,
        onChanged: syncPosition,
    });

    sync2.owlCarousel({
        items: 3,
        dots: false,
        nav: false,
        smartSpeed: 200,
        slideSpeed: 500,
        responsive : {
            768 : {
                items : 5,                
            },
        },
        slideBy: slidesPerPage,
        responsiveRefreshRate: 100,
        onInitialized: function() {
            sync2.find(".owl-item").eq(0).addClass("synced");
        },
        onChanged: syncPosition2
    });

    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        sync2.find(".owl-item").removeClass("synced").eq(current).addClass("synced");
        sync2.trigger('to.owl.carousel', [current, 100, true]);
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.trigger('to.owl.carousel', [number, 100, true]);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.trigger('to.owl.carousel', [number, 100, true]);
    });

    var dp_owl = $('.dp-owl-carousel');

    dp_owl.owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        items: 2,
        lazyLoad:true,
        responsive : {
            600 : {
                items : 4,                
            },
            1024: {
                items : 6,
            }
        },
        autoplay: true,
        dotsContainer: '#carousel-dots',
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    //Chi tiet san pham
    var owl_pi = $('.owl-product-images');
    owl_pi.owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        lazyLoad:true,
        items: 1,
        nav: true,
        navText: [$('.opi-next'), $('.opi-prev')]
    });

    var dp_owl_2 = $('.dp-owl-carousel-2');
    var dp_owl_3 = $('.dp-owl-carousel-3');

    dp_owl_2.owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        items: 2,
        lazyLoad:true,
        responsive : {
            600 : {
                items : 4,                
            },
            1024: {
                items : 6,
            }
        },
        autoplay: true,
        dotsContainer: '#carousel-dots-2',
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    dp_owl_3.owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        items: 2,
        lazyLoad:true,
        responsive : {
            600 : {
                items : 4,                
            },
            1024: {
                items : 6,
            }
        },
        autoplay: true,
        dotsContainer: '#carousel-dots-3',
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });


    $('#tech-show').on('click', function(event) {
        event.preventDefault();
        var tr = $('.ts-table ul li:nth-child(n+6)');
        if(tr.css('display') == 'none'){
            tr.css('display', 'flex');
            $(this).html('Thu gọn <i class="fas fa-chevron-up font-12" style="margin-left: 16px;" aria-hidden="true"></i>')
        } else {
            tr.css('display', 'none');
            $(this).html('Xem thêm <i class="fas fa-chevron-down font-12" style="margin-left: 16px;" aria-hidden="true"></i>')
        }
    });

    $('.show-hide-text .show-more').on('click', 'a', function(event) {
        event.preventDefault();
        var h_text = $('.show-hide-text p');
        if (h_text.css('display') == '-webkit-box') {
            h_text.css('display', 'block');
            $(this).html('Thu gọn <i class="fas fa-chevron-up font-12 ml-3"></i>');
        } else {
            h_text.css('display', '-webkit-box');
            $(this).html('Xem thêm <i class="fas fa-chevron-down font-12 ml-3"></i>');
        }
    });

    $('.step-show').on('click', function(event) {
        event.preventDefault();
        $('.steps div').css('height', '100%');
        $(this).css('display', 'none');
    });

    // Gio hang
    $('.decrement').on('click', function(e) {
        e.preventDefault();
        var self = $(this);
        var input = self.closest('div.quantity-wrapper').find('input.quantity');
        var value = parseInt(input.val());
        if (value > 1) {
            value = value - 1;
        } else {
            value = 0;
        }
        input.val(value);
    });

    $('.increment').on('click', function(e) {
        e.preventDefault();
        var self = $(this);
        var input = self.closest('div.quantity-wrapper').find('input.quantity');
        var value = parseInt(input.val());
        input.val(value + 1);
    });

    // Trang tin tuc 
    var owl_video = $('.video-carousel');
    owl_video.owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: true,
        lazyLoad:true,
        navText: [$('.v-next'), $('.v-prev')],
        items: 1,
        responsive : {
            768 : {
                items : 2,
                margin: 30,                
            },
            1024: {
                items : 3,
                margin: 30,
            }
        },
        dotsContainer: '#v-dots-container',
    });

    $('.video-carousel .item').on('click', function(event) {
        event.preventDefault();
        $("#app-v-preview").css('width', '100%');
    });

    // Trang danh muc
    $('.show-ads').on('click', function(event) {
        event.preventDefault();
        $('.p-ads-compact').css('display', 'none');
        $('.p-ads-full').css('height', '100%');
    });

});

function openNav() {
    $("#app-v-preview").css('width', '100%');
}

function closePopup() {
    $("#app-v-preview").css('width', '0%');
}