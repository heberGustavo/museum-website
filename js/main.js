$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(scroll)
    if (scroll >= 100) {
        $("header").addClass("bg-black", 500);
    }
    else {
        $("header").removeClass("bg-black", 500);
    }
});