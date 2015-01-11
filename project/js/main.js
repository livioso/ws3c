var menu = document.querySelector(".menu a");
var search = document.querySelector(".search");

menu.onclick = function() {
  if (search.style.display == "block") {
    search.style.display = "none";
  } else {
    search.style.display = "block";
  }
};

$(document).ready(function() {
  $(".fancybox").fancybox({
    prevEffect : 'none',
    nextEffect : 'none',
    padding    : '0'
  });
});
