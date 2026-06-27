// ComoFunciona.jsx
// A simple 3-step process section. Shows customers how easy it is to get started.
// The steps array uses the same .map() pattern as Servicios — data first, render second.

const pasos = [
  {
    numero: '01',
    titulo: 'Nos cuentas tu situación',
    desc: 'Nos contactas y te hacemos las preguntas correctas. Queremos entender quién eres, qué buscas y qué te importa, no solo tu currículum.',
  },
  {
    numero: '02',
    titulo: 'Trabajamos para ti',
    desc: 'Buscamos activamente oportunidades o candidatos que encajen contigo. No esperamos a que lleguen solos.',
  },
  {
    numero: '03',
    titulo: 'Hacemos la conexión',
    desc: 'Presentamos las mejores opciones, te preparamos para el siguiente paso y acompañamos el proceso hasta el final.',
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="como-funciona">
      <div className="como-funciona__inner">
        <p className="section-eyebrow">El proceso</p>
        <h2 className="section-title">Simple, directo y personalizado</h2>

        <div className="como-funciona__steps">
          {pasos.map((paso, index) => (
            <div key={paso.numero} className="paso">
              <div className="paso__numero">{paso.numero}</div>
              {index < pasos.length - 1 && <div className="paso__linea" aria-hidden="true" />}
              <h3 className="paso__titulo">{paso.titulo}</h3>
              <p className="paso__desc">{paso.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
