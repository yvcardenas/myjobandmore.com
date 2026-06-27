// Servicios.jsx
// Two-column layout — one side for job seekers, one for companies.
// We use an array of objects to define the service cards. This is a common
// React pattern: store data in JS, then use .map() to render it as HTML.

const candidatoServicios = [
  {
    icon: '🎯',
    titulo: 'Búsqueda Personalizada',
    desc: 'No enviamos currículums a ciegas. Conocemos tu perfil, tus metas y buscamos el puesto que realmente te conviene.',
  },
  {
    icon: '🤝',
    titulo: 'Acompañamiento Directo',
    desc: 'Tienes acceso directo a nosotros durante todo el proceso. Sin intermediarios, sin correos genéricos.',
  },
  {
    icon: '📋',
    titulo: 'Preparación para Entrevistas',
    desc: 'Te preparamos para que llegues seguro y listo a cada entrevista.',
  },
]

const empresaServicios = [
  {
    icon: '🔍',
    titulo: 'Búsqueda de Talento',
    desc: 'Identificamos candidatos que encajan con la cultura y necesidades específicas de tu empresa.',
  },
  {
    icon: '⚡',
    titulo: 'Proceso Ágil',
    desc: 'Reducimos el tiempo de contratación sin sacrificar calidad. Candidatos listos para empezar.',
  },
  {
    icon: '✅',
    titulo: 'Candidatos Verificados',
    desc: 'Cada candidato que presentamos ya pasó por una evaluación previa de experiencia y compatibilidad.',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="servicios">
      <div className="servicios__inner">
        <p className="section-eyebrow">Lo que hacemos</p>
        <h2 className="section-title">Un servicio para cada necesidad</h2>

        <div className="servicios__grid">
          {/* Column 1: Job seekers */}
          <div className="servicios__col">
            <div className="servicios__col-header">
              <span className="servicios__tag">Para candidatos</span>
              <h3>Encuentra el trabajo que mereces</h3>
            </div>
            <div className="servicios__cards">
              {candidatoServicios.map((s) => (
                <div key={s.titulo} className="servicios__card">
                  <span className="servicios__icon">{s.icon}</span>
                  <div>
                    <h4>{s.titulo}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Companies */}
          <div className="servicios__col">
            <div className="servicios__col-header">
              <span className="servicios__tag servicios__tag--empresa">Para empresas</span>
              <h3>Encuentra el talento que necesitas</h3>
            </div>
            <div className="servicios__cards">
              {empresaServicios.map((s) => (
                <div key={s.titulo} className="servicios__card">
                  <span className="servicios__icon">{s.icon}</span>
                  <div>
                    <h4>{s.titulo}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
