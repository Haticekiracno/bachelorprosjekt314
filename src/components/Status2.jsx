import React from 'react'

export default function Status2(){
  return (
    <section style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'3rem'}}>
      <div style={{maxWidth:600,background:'#f0f7ff',border:'1px solid #cfe8ff',padding:'1.25rem 1.5rem',borderRadius:8,textAlign:'center'}}>
        <strong style={{display:'block',fontSize:'1.1rem',marginBottom:6}}>Ikke lagt til ennå</strong>
        <small style={{color:'#666'}}>Denne delen er ikke fylt ut ennå.</small>
      </div>
    </section>
  )
}
