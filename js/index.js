$(function() {
  let $m =  $('.project-items>.item>.mask');
  $m.append(`<b> Enter </b>`);
  $('.project-items>.item').hover(function() {
    let $m = $(this).find('.mask');
    $m.stop().slideDown('fast');
  },function() {
    let $m = $(this).find('.mask');
    $m.stop().slideUp('fast');
  })

})