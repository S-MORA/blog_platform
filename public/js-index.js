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

  //masonry
  $('.grid').imagesLoaded().done(function() {
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 4,
      percentPosition: true,
    });
  })

  $('.grid-dash').imagesLoaded().done(function() {
    $('.grid-dash').masonry({
      itemSelector: '.grid-item-dash',
      columnWidth: 185,
      percentPosition: true,

    });
  })

  $('.grid-posts').imagesLoaded().done(function() {
    $('.grid-posts').masonry({
      itemSelector: '.grid-item-post',
      columnWidth: 41,
      percentPosition: true,

    });
  })

  // search toggle
  $("#search-toggle").click(function() {
    $("#search-input").toggleClass('display-none');
    $(".icon-container").toggleClass('display-none');
    $("#ml").toggleClass('ml-auto');
  })

});