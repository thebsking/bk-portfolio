

//mobile menu event listener - function from bulma docs
$(document).ready(function () {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function (event) {
    event.preventDefault();
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });

});

//close mobile menu on list item click
$('.navbar-item').on('click', ()=>{
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

})

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

//click event modal for resume download
$('a[href="#resume"]').on('click', (event) => {
  event.preventDefault();
  $('.modal').toggleClass('is-active')
})
$('.delete').on('click', ()=>{
  $('.modal').toggleClass('is-active')
})

//resume click event
$('.button').on('click', ()=>{
  window.open('https://docs.google.com/document/d/1nUsxrHn9PZ-BwllVZIf3E_WzUYsq3fumdbjhvhNSQvY/edit?usp=sharing')
})

//experimenting with typerwriter effect
const typewriter = function(element, rotate, period) {
  this.rotate = rotate;
  this.element = element;
  this.loopNum = 0
  this.period = parseInt(period, 10) || 2000;
  this.txt = ''
  this.tick();
  this.isDeleting = false;
};
typewriter.prototype.tick = function() {
  let i = this.loopNum % this.rotate.length;
  let fullText = this.rotate[i];
  if (this.isDeleting) {
    this.txt = fullText.substring(0, this.txt.length -1);
  } else {
    this.txt = fullText.substring(0, this.txt.length + 1);
  }
  this.element.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  let that = this;
  let delta = 300 - Math.random() * 100;

  if(this.isDeleting) {
    delta /= 2;
  }
  if (!this.isDeleting && this.txt === fullText) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++
    delta = 500;
  }
  setTimeout(()=>{
    that.tick();
  }, delta);
};

window.onload = ()=> {
  let elements = $('.text-rotate');
  for (let i = 0; i < elements.length; i++) {
    let rotate = elements[i].getAttribute('data-rotate');
    let period = elements[i].getAttribute('data-period');
    if (rotate) {
      new typewriter(elements[i], JSON.parse(rotate), period);
    }
  }
};