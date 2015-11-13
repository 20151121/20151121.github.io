function vwpx(x) {
  var vw = $(window).outerWidth() / 100 * x
  var vh = $(window).outerHeight() / 100 * x * 0.7
  return Math.max(vw, vh)
}

$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionSelector: 'section',
    navigation:      true
  })

  var setFontSize = function() {
    $('h1').css({fontSize: vwpx(4)+'px'})
    $('p').css({fontSize:  vwpx(2.5)+'px'})
  }

  setFontSize()
  $(window).resize(function() {
    setFontSize()
  });
})
