// Basic site JavaScript: mobile nav toggle and simple contact mail handler
document.addEventListener('DOMContentLoaded', ()=>{
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  if(navToggle && siteNav){
    navToggle.addEventListener('click', ()=>{
      const shown = siteNav.style.display === 'block';
      siteNav.style.display = shown ? 'none' : 'block';
    });
  }

  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = contactForm.querySelector('[name="name"]').value.trim();
      const email = contactForm.querySelector('[name="email"]').value.trim();
      const message = contactForm.querySelector('[name="message"]').value.trim();
      if(!name || !email || !message) return alert('Please fill all fields');
      const subject = encodeURIComponent('Inquiry from ORLED 9 website');
      const body = encodeURIComponent(`Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`);
      window.location.href = `mailto:oripartuk@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
