$(document).ready(function() {
  // Background Parallax
  let parralax = $(".parallax");
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll >= 180) {
      parralax.removeClass('display-none')
    } else {
      parralax.addClass("display-none")
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
    columnWidth: 4,
    percentPosition: true,
  });

  $('.grid-dash').masonry({
    itemSelector: '.grid-item-dash',
    columnWidth: 185,
    percentPosition: true,

  });

  $('.grid-posts').masonry({
    itemSelector: '.grid-item-post',
    columnWidth: 41,
    percentPosition: true,

  });

});