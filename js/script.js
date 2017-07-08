$().fancybox({
  selector : '[data-fancybox="images"]',
  thumbs   : false,
  hash     : false,
});

$(".main-slider").click({
  slidesToShow   : 3,
  slidesToScroll : 3,
  infinite   : true,
  dots       : false,
  arrows     : false,
  responsive : [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});