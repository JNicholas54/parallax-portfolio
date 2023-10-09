// js for the parallax background image
const text = document.getElementById('text');
const bird1 = document.getElementById('bird1');
const bird2 = document.getElementById('bird2');
const forest = document.getElementById('forest');
const btn = document.getElementById('btn');
const rocks = document.getElementById('rocks');
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  text.style.top = 50 + value * -0.5 + '%';
  bird1.style.top = value * -1.5 + 'px';
  bird1.style.left = value * 2 + 'px';
  bird2.style.top = value * -1.5 + 'px';
  bird2.style.left = value * -5 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  rocks.style.top = value * -0.12 + 'px';
  forest.style.top = value * 0.25 + 'px';
  header.style.top = value * 0.5 + 'px';
});

// js for smooth scrolling upon navbtn clicked
// Select all links with hashes
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth', // Use smooth scrolling
      });
    }
  });
});
