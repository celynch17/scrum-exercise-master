///Beers Swipe
var beers = ["RiverfrontFrontF_resize.png","RoyalteaFrontF_resize.png","SlackWaterFrontF_resize.png","StoryvilleFrontF_resize.png"];

$(document).ready(function() {

    mobileMenu()
    beersSwipe()
    boxSlide()
});

function archText(){

    const circleType = new CircleType(document.getElementById('master-brewed'));
    circleType.radius(130).dir(1);

}

function pageLoad(){
    $('.middle-parent').removeClass('hidden');
    archText()
    $('.middle-parent').addClass('slide-from-side-bar');
}


function boxSlide(){
    $('.box').removeClass('hidden');    
    $('.box').addClass('slide-in-box');
    setTimeout(pageLoad, 150);
}


function beersSwipe(){

        $('.beers').mouseenter(function(){
            $('#featured-beer-image').addClass('slide-out');        
            var firstElement = beers[0];
            beers.shift()
            beers.push(firstElement);
            setTimeout(slideInFunc, 300);
        });
}    

function slideInFunc() {
    console.log('slide in func being called');
    $('#featured-beer-image').attr('src','assets/beers/'+beers[0]);
    $('#featured-beer-image').removeClass('slide-out'); 
    $('#featured-beer-image').addClass('slide-in');  
}


function mobileMenu(){

    ///Mobile Menu
    var isOpened = 0;
    $(".menu-item").click(function(){
        if(isOpened == 0){
            isOpened = 1;
            $('.side-bar').css('z-index','10');
            $('.main-content').css('left','200px');
            $('#menu-asset').removeClass('fa-bars');
            $('#menu-asset').addClass('fa-times');
        }else{
            isOpened = 0;
            $('.side-bar').css('z-index','0');
            $('.main-content').css('left','0px');
            $('#menu-asset').removeClass('fa-times');
            $('#menu-asset').addClass('fa-bars');
        }
    });
}