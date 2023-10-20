// js for background images
const text = document.getElementById('text');
const bird1 = document.getElementById('bird1');
const bird2 = document.getElementById('bird2');
const forest = document.getElementById('forest');
const btn = document.getElementById('btn');
const rocks = document.getElementById('rocks');
const header = document.getElementById('header');
// for scroll button
const scrollToTopButton = document.getElementById('scrollToTopButton');
// for contact form
const form = document.getElementById('form');
const name = document.getElementById('user');
const email = document.getElementById('email');
const message = document.getElementById('message');

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

/**
 * when the user scrolls down 100px fro the top of the document, the button appears
 */

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
}

// Smooth scrolling to the top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
  scrollToTopSmoothly();
});

function scrollToTopSmoothly() {
  const scrollToTop = () => {
    const currentPosition =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (currentPosition > 0) {
      // Calculate how far to scroll
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentPosition - currentPosition / 8);
    }
  };

  scrollToTop();
}

// JS for contact form
form.addEventListener('submit', function (event) {
  //event.preventDefault(); // Prevent the default form submission behavior
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const nameValue = user.value.trim();
  const emailValue = email.value.trim();

  if (nameValue === '') {
    setError(user, 'Name is a required field.');
  } else {
    setSuccess(user);
  }

  if (emailValue === '') {
    setError(email, 'Email is a required field.');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Please provide a valid email address');
  } else {
    setSuccess(email);
  }
};
