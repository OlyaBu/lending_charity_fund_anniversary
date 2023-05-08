let $blocks_5 = $('.block-card_children');

$('.setion-5_button').on('click', e => {
  let $btn = $(e.target).addClass('active');
  $btn.siblings().removeClass('active');
  
  let selector = $btn.data('target');
  $blocks_5.removeClass('active').filter(selector).addClass('active');
});