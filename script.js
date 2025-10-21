// ===== MENU TOGGLE FOR MOBILE =====
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.createElement('div');
menuIcon.classList.add('menu-icon');
menuIcon.innerHTML = '&#9776;'; // hamburger icon
document.querySelector('.navbar').prepend(menuIcon);

// Toggle menu visibility on click
menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    navLinks.classList.remove('active'); // close menu after click (mobile)
  });
});

// ===== CONTACT FORM HANDLER =====
const form = document.getElementById('contactForm');
const thankYou = document.getElementById('thankyouMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  });
  if (response.ok) {
    thankYou.style.display = 'block';
    form.reset();
  } else {
    alert('Oops! Something went wrong.');
  }
});
