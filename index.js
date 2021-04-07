$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            $('.bar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
            $('.bar').removeClass("sticky");
        }
    })
})

