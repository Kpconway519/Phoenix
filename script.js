function fadeLetters() {
    $(".phoenixLetterEven").addClass("fadeOutLeft")
    $(".phoenixLetterOdd").addClass("fadeOutRight")

    setTimeout(function() {
        $(".phoenixLetter").css("display", "none")
     }, 3000)
}


setTimeout(function() { 

    fadeLetters();

    $([document.documentElement, document.body]).animate({
        scrollTop: $(".phoenixImg").offset().top
    }, 2000);

 }, 1000);

