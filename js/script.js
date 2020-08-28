document.querySelector(".right ul li").addEventListener("click", function() {
    this.classList.toggle("active");
});

$(document).ready(function() {
    $('.mile_run').hide();
});

$('.topic_img').mouseover(function() {
    $(this).children('.mile_run').show();
});

$('.topic_img').mouseout(function() {
    $(this).children('.mile_run').hide();
});