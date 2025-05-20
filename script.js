document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.querySelector('input[type="text"]').value.trim();
  const email = document.querySelector('input[type="email"]').value.trim();
  const message = document.querySelector('textarea').value.trim();

  // Construct the WhatsApp message
  const whatsappMessage = `Hello Asif, I'm interested in your services.%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

  // Redirect to WhatsApp using wa.link
  window.location.href = `https://wa.link/zzvpht?text=${encodeURIComponent(whatsappMessage)}`;
});
