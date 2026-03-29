document.addEventListener('DOMContentLoaded', function () {
  const footerHTML = `
    <div class="wrapper clbg-dark">
      <div class="grid-container footer-content">
        <div class="footer-logo-container">
          <img class="footer-logo" src="assets/img/logo_white.svg">
          <div class="footer-text">© 2026 HAKAMAKI Dynamics. All rights reserved.</div>
        </div>
        <nav class="footer-nav">
          <a class="footer-nav-button" href="about.html">About</a>
          <a class="footer-nav-button" href="contact.html">Contact</a>
        </nav>
      </div>
    </div>
  `;

  const footer = document.querySelector('footer');
  if (footer) {
    footer.innerHTML = footerHTML;
  }
});
