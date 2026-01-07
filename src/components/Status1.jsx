import React from 'react'

export default function Status1(){
  return (
    <section style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'3rem'}}>
      <div style={{maxWidth:600,background:'#fff8f0',border:'1px solid #ffd6b5',padding:'1.25rem 1.5rem',borderRadius:8,textAlign:'center'}}>
        <strong style={{display:'block',fontSize:'1.1rem',marginBottom:6}}>Ikke lagt til ennå</strong>
        <small style={{color:'#666'}}>Denne delen er ikke fylt ut ennå.</small>
      </div>
    </section>
  )
}
