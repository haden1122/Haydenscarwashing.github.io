const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '✕' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = '☰';
}));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('booking-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Car wash booking request — ${form.get('name')}`);
  const body = encodeURIComponent(
    `Booking request for Hayden Ireland Auto Wash\n\nName: ${form.get('name')}\nContact: ${form.get('contact')}\nVehicle: ${form.get('vehicle') || 'Not specified'}\nService: ${form.get('service')}\nPreferred date/details: ${form.get('date') || 'Not specified'}\n\nPlease contact me to confirm.`
  );
  // Replace this placeholder with Hayden's business email when supplied.
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});
