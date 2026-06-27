// Hero.jsx
// The first thing visitors see. Big headline, a tagline, and two call-to-action buttons.
// One for job seekers, one for companies. This sets the tone for the whole site.

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__inner">
        <p className="hero__eyebrow">Conexiones que transforman carreras</p>
        <h1 className="hero__title">
          El trabajo ideal,<br />
          <span>para cada persona.</span>
        </h1>
        <p className="hero__subtitle">
          Ayudamos a candidatos a encontrar oportunidades que realmente encajan con su perfil,
          y a empresas a encontrar el talento que necesitan para crecer.
        </p>
        <div className="hero__actions">
          <a href="#contacto" className="btn btn--primary">Busco empleo</a>
          <a href="#contacto" className="btn btn--outline">Busco candidatos</a>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="hero__bg-shape" aria-hidden="true" />
    </section>
  )
}
