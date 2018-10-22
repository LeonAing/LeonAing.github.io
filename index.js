$(document).ready(main);

function main() {
  $('#all-contents').hide();
  $('#all-contents').fadeIn(1000);
  $('.interest').hide();
  $('.interest-button').on('click', function() {
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Viewed');
  });
}