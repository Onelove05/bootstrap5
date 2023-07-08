$('input.input-qty').each(function() {
    var $this = $(this),
      qty = $this.parent().find('.is-form'),
      min = Number($this.attr('min')),
      max = Number($this.attr('max'))
    if (min == 0) {
      var d = 0
    } else d = min
    $(qty).on('click', function() {
      if ($(this).hasClass('minus')) {
        if (d > min) d += -1
      } else if ($(this).hasClass('plus')) {
        var x = Number($this.val()) + 1
        if (x <= max) d += 1
      }
      $this.attr('value', d).val(d)
    })
  })
  //]]></script>

//   $('.slick-image1').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav'
//   });
//   $('.slick-image2').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
//   });