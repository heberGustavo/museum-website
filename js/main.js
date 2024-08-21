$(document).ready(function() {
    var widthPage = $(window).width();
    if(widthPage <= 1198){
        $(".newsletter .form").removeClass("col-md-6").addClass("row");
    }

    $("ul li a").click(function(e){
        e.preventDefault();
        alert("Estou sem ação. Sou de demonstração");
    });
});



$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    
    if (scroll >= 100) {
        $("header").addClass("bg-black", 500);
    }
    else {
        $("header").removeClass("bg-black", 500);
    }
});