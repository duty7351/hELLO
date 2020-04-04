$(document).ready(function () {
  return $('#loader').fadeOut(500);
});$(document).ready(function () {
  return $('.menu_toolbar').each(function (_, $menu) {
    return $('#sidebar2 > aside').append($menu);
  });
});var $metainfo = $('#nav > #metainfo');
$('#post > header > *').each(function (_, $h) {
  return $metainfo.append($($h).clone());
});Array('#sidebar1', '#sidebar2').forEach(function (menubar, i) {
  var $menubar = $('#nav > #s' + ++i + ' > a');
  UIkit.util.on(menubar, 'beforeshow', function () {
    return $menubar.addClass('uk-animation-fade uk-animation-fast uk-animation-reverse');
  });
  UIkit.util.on(menubar, 'hidden', function () {
    return $menubar.removeClass();
  });
});$('#tags').contents().filter(function () {
  return this.nodeType === 3;
}).remove();hljs.initHighlightingOnLoad();var $l = $('#comment');
$l.on('click', '.rp .body', function (e) {
  var $t = $(e.target);
  $t.prev().fadeIn(200);
  $t.parents('.rp').css('zIndex', 9999);
  $l.find('#comment-overlay').fadeIn(200);
});
Array('#comment-overlay', '.rp .action').forEach(function (t) {
  return $l.on('click', t, function (e) {
    var $rp = $('.rp');
    Array($l.find('#comment-overlay'), $rp.find('.action')).forEach(function ($h) {
      return $h.fadeOut(200);
    });
    setTimeout(function () {
      return $rp.css('zIndex', 1);
    }, 200);
  });
});