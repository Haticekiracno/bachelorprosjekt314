import React from 'react'

export default function Team(){
  return (
    <section style={{maxWidth:720, margin:'1.5rem auto'}}>
      <h2 style={{textAlign:'center'}}>Om oss</h2>
      <p>Vi er en gruppe på fire studenter som jobber med dette bachelorprosjektet. Teamet består av:</p>
      <ul style={{listStyle:'none', padding:0, display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:12}}>
        <li style={{display:'flex', alignItems:'center', gap:12}}>
          <img src="/images/ahmet.jpg" alt="Ahmet" style={{width:64, height:64, objectFit:'cover', borderRadius:8}} />
          <div>
            <strong>Herman Hansen</strong>
            <div>Banckend Utvikler</div>
          </div>
        </li>
        <li style={{display:'flex', alignItems:'center', gap:12}}>
          <img src="/images/furkan.jpg" alt="Furkan" style={{width:64, height:64, objectFit:'cover', borderRadius:8}} />
          <div>
            <strong>Furkan Murat Kara</strong>
            <div>Scrum Master</div>
          </div>
        </li>
        <li style={{display:'flex', alignItems:'center', gap:12}}>
          <img src="/images/omer.jpg" alt="Ömer" style={{width:64, height:64, objectFit:'cover', borderRadius:8}} />
          <div>
            <strong>Ömer Sen</strong>
            <div>Frontend Utvikler</div>
          </div>
        </li>
        <li style={{display:'flex', alignItems:'center', gap:12}}>
          <img src="/images/IMG_9932.jpg" alt="Hatice" style={{width:64, height:64, objectFit:'cover', borderRadius:8}} />
          <div>
            <strong>Hatice Kirac</strong>
            <div>Fullstack Utvikler</div>
          </div>
        </li>
      </ul>
    </section>
  )
}
