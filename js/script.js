$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            $('.navbar').addClass("bg-dark");
        }else{
            $('.navbar').removeClass("sticky");
            $('.navbar').removeClass("bg-dark");
        }
    });
});

// typing animation script
var typed = new Typed(".typing", {
    strings: ["Happy Birthday <b>Sweetest Woman</b> i've ever seen😘."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});