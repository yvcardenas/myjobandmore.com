// Footer.jsx
// Simple footer with the company name and a note about what they do.
// Placeholders for contact info — your dad can fill these in.

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__logo">My Job <span>&amp;</span> More</p>
          <p className="footer__tagline">
            Conexiones que transforman carreras y empresas.
          </p>
        </div>

        <div className="footer__contact">
          <p className="footer__contact-label">Contáctanos</p>
          <a href="tel:+10000000000">+1 (000) 000-0000</a>
          <a href="mailto:info@myjobandmore.com">info@myjobandmore.com</a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {year} My Job &amp; More. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
