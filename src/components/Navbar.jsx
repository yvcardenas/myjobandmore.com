// Navbar.jsx
// This is a React "component" — a reusable piece of UI.
// Components are just functions that return HTML-like code (called JSX).

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#inicio" className="navbar__logo">
          My Job <span>&amp;</span> More
        </a>
        <ul className="navbar__links">
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#como-funciona">Cómo Funciona</a></li>
          <li><a href="#por-que">Por Qué Nosotros</a></li>
          <li><a href="#contacto" className="navbar__cta">Contáctanos</a></li>
        </ul>
      </div>
    </nav>
  )
}
