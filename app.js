$(document).ready(function() {
  var navHeight = 55;
  var hometarget = $("#homeSection").offset().top;
  var homeTarget = hometarget - navHeight;
  $("#homeTag").click(function() {
    $(window).scrollTo(homeTarget, 1000);
  })
  var targetproj = $(".container-prj").offset().top;
  var targetProj = targetproj - navHeight;
  $("#projectTag").click(function() {
    $(window).scrollTo(targetProj, 1000);
  })
  var abouttarget = $("#aboutSection").offset().top;
  var aboutTarget = abouttarget - navHeight;
  $("#aboutTag").click(function() {
    $(window).scrollTo(aboutTarget, 1000);
  })
  var contacttarget = $("#gform").offset().top;
  var contactTarget = contacttarget - navHeight;
  $("#contactTag").click(function() {
    $(window).scrollTo(contactTarget, 1000);
  })
});
