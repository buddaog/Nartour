function createHeader() {
  const header = document.createElement('header');
  header.className = 'header';
  
  header.innerHTML = `
    <a href="index.html" class="header-logo">
      <img src="assets/logo.png" alt="Nar Tour">
      <h1>Nar Tour</h1>
    </a>
    <div class="controls">
      <select id="langSelect" onchange="setLanguage()">
        <option value="az">AZ</option>
        <option value="ru" selected>RU</option>
        <option value="en">EN</option>
      </select>
      <select id="currencySelect" onchange="setCurrency()">
        <option value="AZN">AZN</option>
        <option value="USD">USD</option>
      </select>
    </div>
  `;
  
  document.body.insertBefore(header, document.body.firstChild);
}

// Add WhatsApp button
function addWhatsAppButton() {
  const button = document.createElement('a');
  button.href = 'https://wa.me/yourphonenumber';
  button.className = 'whatsapp-button';
  button.target = '_blank';
  button.innerHTML = `
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/WhatsApp_logo_2023.png" alt="WhatsApp">
  `;
  document.body.appendChild(button);
}

// Initialize header and WhatsApp button
document.addEventListener('DOMContentLoaded', () => {
  createHeader();
  addWhatsAppButton();
});