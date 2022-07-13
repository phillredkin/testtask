$(document).ready(function() {
    $('.close_btn').on("click", function () {
        $('.warning').addClass('hide');
    });

    $('.header_burger').on("click", function () {
        $('.mobile_menu_links').toggleClass('responsive');
    });
});