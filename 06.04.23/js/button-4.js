let $blocks_4 = $('.block-card_empl');

$('.filter-btn_empl').on('click', e => {
  let $btn = $(e.target).addClass('active');
  $btn.siblings().removeClass('active');
  
  let selector = $btn.data('target');
  $blocks_4.removeClass('active').filter(selector).addClass('active');
});