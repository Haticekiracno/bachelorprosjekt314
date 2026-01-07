import React from 'react'

export default function Team(){
  const teamMembers = [
    {
      name: 'Furkan Murat Kara',
      role: 'Scrum Master',
      image: '/images/furkan.jpg',
      color: '#50C878'
    },
    {
      name: 'Herman Hansen',
      role: 'Backend Utvikler',
      image: '/images/ahmet.jpg',
      color: '#4A90E2'
    },
    {
      name: 'Ömer Sen',
      role: 'Frontend Utvikler',
      image: '/images/omer.jpg',
      color: '#FF6B4A'
    },
    {
      name: 'Hatice Kirac',
      role: 'Fullstack Utvikler',
      image: '/images/IMG_9932.jpg',
      color: '#9B59B6'
    }
  ]

  return (
    <section style={{maxWidth:1250, margin:'2rem auto', padding:'0 1rem'}}>
      <div style={{textAlign:'center', marginBottom:'3rem'}}>
        <h2 style={{fontSize:'2.5rem', marginBottom:'0.5rem', color:'#222'}}>Om oss</h2>
        <p style={{fontSize:'1.1rem', color:'#666', maxWidth:600, margin:'0 auto'}}>
          Vi er en gruppe på fire studenter som jobber med dette bachelorprosjektet. 
          Hver av oss bidrar med unike ferdigheter og ekspertise.
        </p>
      </div>

      <div style={{
        display:'grid', 
        gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', 
        gap:'2rem',
        marginTop:'3rem'
      }}>
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            style={{
              background:'white',
              borderRadius:'16px',
              padding:'2rem',
              boxShadow:'0 4px 20px rgba(0,0,0,0.08)',
              transition:'transform 0.3s ease, box-shadow 0.3s ease',
              textAlign:'center',
              borderTop:`4px solid ${member.color}`,
              position:'relative',
              overflow:'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
            }}
          >
            <div style={{
              width:'140px',
              height:'140px',
              margin:'0 auto 1.5rem',
              borderRadius:'50%',
              overflow:'hidden',
              border:`4px solid ${member.color}`,
              boxShadow:`0 4px 15px ${member.color}40`,
              position:'relative'
            }}>
              <img 
                src={member.image} 
                alt={member.name}
                style={{
                  width:'100%',
                  height:'100%',
                  objectFit:'cover'
                }}
              />
            </div>
            <h3 style={{
              fontSize:'1.4rem',
              marginBottom:'0.5rem',
              color:'#222',
              fontWeight:600
            }}>
              {member.name}
            </h3>
            <div style={{
              display:'inline-block',
              padding:'0.4rem 1rem',
              borderRadius:'20px',
              background:`${member.color}15`,
              color:member.color,
              fontSize:'0.95rem',
              fontWeight:500,
              marginTop:'0.5rem'
            }}>
              {member.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
