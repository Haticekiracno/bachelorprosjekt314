import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div style={{maxWidth:900,margin:'0 auto'}}>
        <small>© {new Date().getFullYear()} Gruppe på 20 — Bachelorprosjekt.</small>
      </div>
    </footer>
  )
}
