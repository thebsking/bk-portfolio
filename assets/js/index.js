

//mobile menu event listener
$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function(event) {
      event.preventDefault();
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });

});

const sections = document.querySelectorAll('section')
for (let i =0; i < sections.length; i++) {
  let header = document.createElement('h2')
  header.classList.add('section-header');
  header.textContent = (sections[i].id).toUpperCase();
  sections[i].insertBefore(header, sections[i].firstChild)
}