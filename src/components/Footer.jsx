import React from 'react'

export default function Footer(){
  return (
    <footer style={{textAlign:'center', padding:'1rem 0', marginTop:40}}>
      © 2026 Gruppe på 20 — Bachelorprosjekt. Alle rettigheter reservert.
    </footer>
  )
}
import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div style={{maxWidth:900,margin:'0 auto'}}>
        <small>© {new Date().getFullYear()} Gruppe på 20 — Bachelorprosjekt. Alle rettigheter reservert.</small>
      </div>
    </footer>
  )
}
