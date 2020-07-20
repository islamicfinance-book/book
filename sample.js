$(document).ready(function(){

  $("ul ul").hide();
  $("nav > ul > li").each(function(num, doc) {
    if (window.location.pathname.length > 4 && $(doc).find("a").attr("href").indexOf(window.location.pathname) !== -1) {
      $(doc).find("ul").show();
      return;
    }
    if (num && num !== 5 && num !== 7) {
      var expand = $("<button>").text("+"),
          clicked = false;
      expand.click(function(e){
        clicked = !clicked;
        expand.text(clicked ? "-" : "+");
        var menu = $(doc).find("ul");
        clicked ? menu.show() : menu.hide();
      });
      $(doc).prepend(expand)
    }
  });
  $(".book-header button").click(function(e){
    $(".book-summary").show();
  });
});
