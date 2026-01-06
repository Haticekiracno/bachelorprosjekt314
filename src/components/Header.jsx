import React from 'react'

export default function Header({ navigate }){
  return (
    <header className="site-header">
      <div className="brand">Bachelorprosjekt — Gruppe 20</div>
      <nav>
        <button onClick={() => navigate('home')}>Hjem</button>
        <button onClick={() => navigate('team')}>Om oss</button>
        <button onClick={() => navigate('project')}>Prosjekt</button>
        <button onClick={() => navigate('status1')}>Status 1</button>
        <button onClick={() => navigate('status2')}>Status 2</button>
        <button onClick={() => navigate('contact')}>Kontakt</button>
      </nav>
    </header>
  )
}
import React from 'react'

export default function Header({ onNavigate }) {
  return (
    <header>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',maxWidth:900,margin:'0 auto'}}>
        <h1 style={{margin:0,fontSize:'1.3rem'}}>Bachelorprosjekt — Gruppe på 20</h1>
        <nav>
          <button onClick={() => onNavigate('home')}>Hjem</button>
          <button onClick={() => onNavigate('team')}>Om oss</button>
          <button onClick={() => onNavigate('project')}>Prosjekt</button>
          <button onClick={() => onNavigate('status1')}>Status 1</button>
          <button onClick={() => onNavigate('status2')}>Status 2</button>
          <button onClick={() => onNavigate('contact')}>Kontakt</button>
        </nav>
      </div>
    </header>
  )
}
