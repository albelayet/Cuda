$(document).ready(function(){

    $(".js-sticky").waypoint(function(direction){
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });


    //portfoio section
    var  mixer = mixitup('.container');
});

function openNav() {
    document.getElementById("mynav").style.width = "100%";
}
function closeNav() {
    document.getElementById("mynav").style.width = "0%";
}







