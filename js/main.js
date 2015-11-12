function vwpx(vw) {
  return $(window).outerWidth() / 100 * vw
}

$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionSelector: 'section',
    navigation:      true
  })

  $('h1').css({fontSize: vwpx(4)+'px'})
  $('p').css({fontSize:  vwpx(2.5)+'px'})
})
