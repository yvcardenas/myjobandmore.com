// PorQueElegirnos.jsx
// Trust-building section. Highlights what makes this service different.
// Your dad has a lot of experience, so we lead with that.

const razones = [
  {
    titulo: 'Años de experiencia',
    desc: 'Con muchos años conectando personas con oportunidades, conocemos el mercado y sabemos cómo navegar cada industria.',
  },
  {
    titulo: 'Trato personal',
    desc: 'No somos una plataforma automatizada. Somos personas reales que se toman el tiempo de conocerte a ti.',
  },
  {
    titulo: 'Resultados comprobados',
    desc: 'Nuestros candidatos y empresas vuelven porque el servicio funciona. La confianza se gana con resultados.',
  },
  {
    titulo: 'Red de contactos sólida',
    desc: 'Años de relaciones con empresas de distintos sectores nos permiten abrir puertas que de otra forma estarían cerradas.',
  },
]

export default function PorQueElegirnos() {
  return (
    <section id="por-que" className="por-que">
      <div className="por-que__inner">
        <p className="section-eyebrow">Por qué nosotros</p>
        <h2 className="section-title">La diferencia está en el trato</h2>

        <div className="por-que__grid">
          {razones.map((r) => (
            <div key={r.titulo} className="razon">
              <div className="razon__bar" />
              <h3 className="razon__titulo">{r.titulo}</h3>
              <p className="razon__desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
