/* SCROLLS FOR HEADER MENU */

(function () {
  $('a[href^="#lifestyle"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800);
    }
  });

  $('a[href^="#photodiary"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800);
    }
  });

  $('a[href^="#travel"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 600);
    }
  });
})();

/* FORM SUBMIT */

(function () {
  let form = document.getElementById('form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log (event);
  });
})();
