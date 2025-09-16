// Load navbar dynamically and set toggle event
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    // Now the navbar exists, attach toggle event
    const menu = document.querySelector('.menu');
    const toggle = document.getElementById('toggle');

    if (toggle && menu) {
      toggle.addEventListener('click', function () {
        menu.classList.toggle('active');
      });
    }
  });

// Splide initialization
window.onload = function () {
  new Splide('.MySplide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 2.5,
    gap: '2rem',
    pagination: false,
    autoScroll: {
      speed: 1,
    },
  }).mount({ AutoScroll: window.splide.Extensions.AutoScroll });
};
