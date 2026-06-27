// Contacto.jsx
// The contact form. This is where React state comes in for the first time.
//
// useState is how React remembers things between renders.
// Every time you type in a field, we update the state, and React re-renders
// just that part of the page automatically.
//
// The form currently uses a placeholder action. In the next step we'll
// connect it to Formspree so submissions go to your dad's email.

import { useState } from 'react'

const initialForm = {
  tipo: '',      // 'candidato' or 'empresa'
  nombre: '',
  email: '',
  telefono: '',
  mensaje: '',
}

export default function Contacto() {
  // useState returns [currentValue, functionToUpdateIt]
  const [form, setForm] = useState(initialForm)
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  // This function runs every time the user types in any field.
  // The "spread" operator (...form) keeps existing values and only updates the one that changed.
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault() // prevents the page from refreshing
    setEnviando(true)

    const response = await fetch('https://formspree.io/f/xnjkdlkp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form),
    })

    if (response.ok) {
      setEnviado(true)
      setForm(initialForm)
    }
    setEnviando(false)
  }

  return (
    <section id="contacto" className="contacto">
      <div className="contacto__inner">
        <div className="contacto__text">
          <p className="section-eyebrow">Hablemos</p>
          <h2 className="section-title">El primer paso es el más importante</h2>
          <p className="contacto__sub">
            Cuéntanos qué necesitas y te respondemos a la brevedad.
            Sin compromiso, sin formularios complicados.
          </p>
        </div>

        <div className="contacto__form-wrap">
          {enviado ? (
            <div className="contacto__success">
              <span>✓</span>
              <h3>¡Mensaje recibido!</h3>
              <p>Nos pondremos en contacto contigo pronto.</p>
            </div>
          ) : (
            <form className="contacto__form" onSubmit={handleSubmit}>
              {/* Radio buttons to identify who is writing */}
              <div className="form-group">
                <label className="form-label">Soy...</label>
                <div className="form-radios">
                  <label className={`radio-btn ${form.tipo === 'candidato' ? 'radio-btn--active' : ''}`}>
                    <input
                      type="radio"
                      name="tipo"
                      value="candidato"
                      checked={form.tipo === 'candidato'}
                      onChange={handleChange}
                    />
                    Candidato en búsqueda de empleo
                  </label>
                  <label className={`radio-btn ${form.tipo === 'empresa' ? 'radio-btn--active' : ''}`}>
                    <input
                      type="radio"
                      name="tipo"
                      value="empresa"
                      checked={form.tipo === 'empresa'}
                      onChange={handleChange}
                    />
                    Empresa buscando talento
                  </label>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="nombre">Nombre completo</label>
                  <input
                    id="nombre"
                    className="form-input"
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Correo electrónico</label>
                  <input
                    id="email"
                    className="form-input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@correo.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="telefono">Teléfono (opcional)</label>
                <input
                  id="telefono"
                  className="form-input"
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="+1 (000) 000-0000"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="mensaje">¿Cómo podemos ayudarte?</label>
                <textarea
                  id="mensaje"
                  className="form-input form-textarea"
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos un poco sobre lo que buscas..."
                  rows={4}
                  required
                />
              </div>

              <button className="btn btn--submit" type="submit" disabled={enviando}>
                {enviando ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
