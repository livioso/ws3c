var menu = document.querySelector(".menu a");
var search = document.querySelector(".search");
var searchWidth = 0;

menu.onclick = function(e) {
    e.preventDefault();

  if (parseInt($(search).css("right")) !== 0) {
    searchWidth = -$(search).width() - 60;

    $(search).css({
      right: searchWidth
    });

    $(search).animate({
      right: 0
    });
  } else {
    $(search).animate({
      right: searchWidth - 500
    });
  }

};

$(document).ready(function() {
  $(".fancybox").fancybox({
    prevEffect : 'none',
    nextEffect : 'none',
    padding    : '0'
  });
});
