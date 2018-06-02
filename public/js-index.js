$(document).ready(function() {
  console.log("Ready")
  // Background Parallax
  let parralax = $(".parallax");
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll >= 180) {
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



  //masonry
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 90,
    percentPosition: true,
    isFitWidth: true
  });

  $('.grid-dash').masonry({
    itemSelector: '.grid-item-dash',
    columnWidth: 120,
    percentPosition: true,
    isFitWidth: true
  });

  $('.grid-posts').masonry({
    itemSelector: '.grid-item-post',
    columnWidth: 99,
    percentPosition: true,
    isFitWidth: true
  });


});