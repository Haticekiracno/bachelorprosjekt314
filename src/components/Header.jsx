import React from 'react'

export default function Header({ navigate }){
  return (
    <header className="site-header">
      <div style={{width:1000, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0.7rem 1rem'}}>
        <div className="brand">Bachelorprosjekt — Gruppe 20</div>
        <nav>
          <button onClick={() => navigate('home')}>Hjem</button>
          <button onClick={() => navigate('team')}>Om oss</button>
          <button onClick={() => navigate('project')}>Prosjekt</button>
          <button onClick={() => navigate('status1')}>Status 1</button>
          <button onClick={() => navigate('status2')}>Status 2</button>
          <button onClick={() => navigate('contact')}>Kontakt</button>
        </nav>
      </div>
    </header>
  )
}
