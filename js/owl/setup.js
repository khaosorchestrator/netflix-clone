$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:6
    }
  }
})

$('button#button-id').click(event => {
  event.preventDefault()
  $('div#buttons').a
  $('div#buttons').html('<iframe style="margin-top: 2px; padding-top:2px; padding-left: 3px; padding-bottom: 150px" width="400" height="380" src="https://www.youtube.com/embed/RqZkit-aCTo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameborder=0></iframe>');
})