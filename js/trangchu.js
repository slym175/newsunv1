$(function() {

    // Chung
    var topup = $('.top-up');

    topup.on('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // var cate = $('.cate');
    // cate.parent('div').hover(function () {
    //         $('.cate-field').css('display', 'block');
    //     }, function () {
    //         // $('.cate-field').css('display', 'none');
    //     }
    // );

    // Trang chu
    var dp_owl = $('.dp-owl-carousel');

    dp_owl.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: [
            '<img class="img-fluid" src="assets/next(1).svg" alt="Next Status">',
            '<img class="img-fluid" src="assets/next(2).svg" alt="Previous Status">'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        },
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });

    var sync1 = $("#carousel-1");
    var sync2 = $("#carousel-2");
    var slidesPerPage = 5; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        onChanged: syncPosition,
    });

    sync2.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        },
        dots: false,
        nav: false,
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
        responsiveRefreshRate: 100,
        onInitialized: function() {
            sync2.find(".owl-item").eq(0).addClass("synced");
        },
        onChanged: syncPosition2
    });

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //end block
        
        sync2.find(".owl-item").removeClass("synced").eq(current).addClass("synced");
        // var onscreen = sync2.find('.owl-item.active').length - 1;
        // var start = sync2.find('.owl-item.active').first().index();
        // var end = sync2.find('.owl-item.active').last().index();
        sync2.trigger('to.owl.carousel', [current, 100, true]);
        // if (current > end) {
        //     sync2.trigger('to.owl.carousel', [current, 100, true]);
        // }
        // if (current < start) {
        //     sync2.trigger('to.owl.carousel', [current - onscreen, 100, true]);
        // }
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

    // Trang tin tuc
    var news_owl = $('.news-owl-carousel');
    news_owl.owlCarousel({
        items: 2,
        loop: true,
        margin: 30,
        // autoplay: true,
        // autoplayTimeout: 2000,
        // autoplayHoverPause: true
    });

    $('.messenger').click(function(event) {
        event.preventDefault();
        $('#myForm').css('display', 'block');
    });

    $('.cancel').click(function(event) {
        event.preventDefault();
        $('#myForm').css('display', 'none');
    });

    $('.o-video-popup').on('click', function(event) {
        event.preventDefault();
        $(this).children('.video-popup').css('display', 'block');
    });

    var vp = $('#video-popup');

    $('a.video-pop').on('click', function(event) {
        event.preventDefault();
        vp.css('width', '100%');
    });

    $('.news-owl-carousel .h-news').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        var data = $(this).data('id-video');
        vp.css('width', "100%");
        $('.v-id').html(data);
        // $("body").css({"position": "sticky", "overflow": "hidden"});
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

    // Trang san pham
    var p = $('.pre-img-carousel');
    p.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        items: 1,
    });

    var p_img = $('#pills-images .pre-img-carousel');
    var p_vd = $('#pills-videos .pre-img-carousel');

    p_img.on('click', '.item', function(e){
        e.preventDefault();
        $('#img-preview').css('display', 'block');
    });

    p_vd.on('click', '.item', function(e){
        e.preventDefault();
        $('#video-preview').css('display', 'block');
    });

    $('#img-preview').on('click', '.close', function(e){
        e.preventDefault();
        $('#img-preview').css('display', 'none');
    });

    $('#video-preview').on('click', '.close', function(e){
        e.preventDefault();
        $('#video-preview').css('display', 'none');
    });

    var pre = $('.pre-carousel');
    pre.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoHeight:true,
        navText: [
            '<i class="fas fa-arrow-left"></i>',
            '<i class="fas fa-arrow-right"></i>'
        ],
        dots: false,
        items: 1,
    });

    $('#tech-show').on('click', function(event) {
        event.preventDefault();
        var tr = $('.tech-section .ts-table ul li:nth-child(n+6)');
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
        $('.show-hide-text p').css('display', 'block');
        $(this).css('display', 'none');
    });

    // Loc san pham
    $('.m-tab-menu .nav-link').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.m-tab-menu .nav-link.active ~ .nav-submenu').toggleClass('d-block');
    });

    $('.m-tab-menu .nav-submenu .nav-link').on('click', function(e){
        e.preventDefault();
        $('.m-tab-menu .nav-link').removeClass('active');
        $(this).addClass('active');
        $('.m-tab-menu .nav-submenu').removeClass('d-block');
        $(this).parent().addClass('d-block');
    });
});

function PopDown() {
    $('#video-popup').css('width', "0%");
    // $("body").css({"position": "static", "overflow": "auto"});
}