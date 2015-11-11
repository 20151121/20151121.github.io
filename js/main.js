$(document).ready(function() {
  var images = [
    'IMG_0392.jpg',
    null,
    'DSCF3381.jpg',
    'DSCF3390.jpg',
    'IMG_0205.jpg',
    'DSCF3421.jpg',
    'DSCF3543.jpg',
    'IMG_0240.jpg',
    'IMG_0246.jpg',
    'IMG_0304.jpg',
    'IMG_0331.jpg',
    'DSCF3598.jpg',
    'IMG_0377.jpg',
    'IMG_0394.jpg',
    // 'DSCF3395-2.jpg',
    // 'IMG_0051.jpg',
    // 'IMG_0093.jpg',
    // 'IMG_0345.jpg',
    // 'DSCF3482.jpg',
    null,
  ]

  $.each(images, function(i, img) {
    if (img != null)
      $('section:nth-of-type('+(i+1)+')')
        .css('background', 'url("images/'+img+'") no-repeat center / 85% auto')
  })

  $('#fullpage').fullpage({
    sectionSelector: 'section',
    navigation:      true
  })
})
