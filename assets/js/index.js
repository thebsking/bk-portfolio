

//mobile menu event listener
$(document).ready(function () {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function (event) {
    event.preventDefault();
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });

});

//add section headers
const sections = document.querySelectorAll('section')
for (let i = 0; i < sections.length; i++) {
  let header = document.createElement('h2')
  header.classList.add('section-header');
  header.textContent = (sections[i].id).toUpperCase();
  sections[i].insertBefore(header, sections[i].firstChild)
}

//style contact icons
const iconSpans = $('.icon')
for (const span of iconSpans) {
  $(span).addClass('is-large')
}
const iconImage = $('i');
for (const icon of iconImage) {
  $(icon).addClass('fa-3x')
}

const cards = $('.card');
//cards click events
for (const childCard of cards) {
  $(childCard).on('click', (event) => {
    event.preventDefault();
    window.open(`https://thebsking.github.io/${$(childCard).attr('id')}`)
  })
}


//media query changes
// const mediaQuery = (screen) => {
//   if(screen.matches) {
//     cards.css('width', '75%');
//   } else {
//     //resize cards AFTER the 1st one
//     for (let x = 1; x < cards.length; x++) {
//     $(cards[x]).css('width', '40%')
// }

//   }
// }
// const smallScreen = window.matchMedia("(max-width:700px)")
// mediaQuery(smallScreen)