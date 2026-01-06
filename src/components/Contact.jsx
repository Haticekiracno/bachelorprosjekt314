import React, { useRef, useState } from 'react'

export default function Contact(){
  const form = useRef(null)
  const [sent, setSent] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    // For now just log and show success locally — email integration can be re-added later
    const fd = new FormData(form.current)
    const obj = {}
    for (const [k,v] of fd.entries()) obj[k]=v
    // eslint-disable-next-line no-console
    console.log('Contact form submit:', obj)
    setSent(true)
    form.current.reset()
  }

  return (
    <section style={{maxWidth:480, margin:'1rem auto'}}>
      <h2 style={{textAlign:'center'}}>Kontakt oss</h2>
      <p style={{textAlign:'center'}}>Har du spørsmål eller ønsker mer informasjon, send oss en melding:</p>

      <form ref={form} onSubmit={handleSubmit}>
        <label>Navn</label>
        <input name="from_name" type="text" placeholder="Ditt navn" required />
        <label>E-post</label>
        <input name="reply_to" type="email" placeholder="din@email.no" required />
        <label>Melding</label>
        <textarea name="message" rows={5} placeholder="Skriv meldingen her..." required />
        <div style={{marginTop:12}}>
          <button className="cta" type="submit">Send</button>
        </div>
      </form>

      {sent && <div style={{color:'green', marginTop:12}}>Takk! Meldingen ble registrert (lokalt).</div>}
    </section>
  )
}
