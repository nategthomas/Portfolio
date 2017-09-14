$(document).ready(function() {
  var target = document.getElementById("projectSection");
  $("#projectTag").click(function() {
    $(window).scrollTo(target, 1000);
  })
  var aboutTarget = document.getElementById("aboutSection")
  $("#aboutTag").click(function() {
    $(window).scrollTo(aboutTarget, 1000);
  })
  var homeTarget = document.getElementById("homeSection")
  $("#homeTag").click(function() {
    $(window).scrollTo(homeTarget, 1000);
  })
});
