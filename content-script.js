const subdue = (element) => {
  element.style.opacity = '0.2';
}

document.querySelectorAll('.s-card-container, .a-carousel-container').forEach( element => {
  if(element.querySelector('.s-sponsored-label-text') || element.querySelector('.sp_desktop_sponsored_label')) {
    subdue(element)
  }
})

document.querySelectorAll('.AdHolder').forEach(element => {
  subdue(element)
})
