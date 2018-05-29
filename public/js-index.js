$(document).ready(function() {
  console.log("Ready")
  // Background Parallax
  let parralax = $(".parallax");
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll >= 400) {
      parralax.removeClass('display-none')
      console.log("Removed")
    } else {
      parralax.addClass("display-none")
      console.log("added")
    }
  });
  // search toggle
  $("#search-toggle").click(function() {
    $("#search-input").toggleClass('display-none');
    $(".icon-container").toggleClass('display-none');
    $("#ml").toggleClass('ml-auto');
  })

});