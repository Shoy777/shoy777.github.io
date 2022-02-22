
$(document).ready(function() {
    $('a.toggle-bottom').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 2000);
    });
});