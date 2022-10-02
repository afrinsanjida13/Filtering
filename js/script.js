// jQuery

// isotope start===================


var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

$('.filter button').on("click", function() {
  var value = $(this).attr('data-name');
  $grid.isotope({ 
    filter: value
});
});