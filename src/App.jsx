import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Team from './components/Team'
import Project from './components/Project'
import Status1 from './components/Status1'
import Status2 from './components/Status2'
import Contact from './components/Contact'

export default function App(){
  const [page, setPage] = useState('home')

  function navigate(to){
    setPage(to)
    window.scrollTo(0,0)
  }

  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Header navigate={navigate} />
      <main style={{padding: '1rem', flex: 1}}>
        {page === 'home' && <Home />}
        {page === 'team' && <Team />}
        {page === 'project' && <Project />}
        {page === 'status1' && <Status1 />}
        {page === 'status2' && <Status2 />}
        {page === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  )
}
