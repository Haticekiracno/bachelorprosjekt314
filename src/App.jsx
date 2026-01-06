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
    <div>
      <Header navigate={navigate} />
      <main style={{padding: '1rem'}}>
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
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Team from './components/Team'
import Project from './components/Project'
import Contact from './components/Contact'
import Status1 from './components/Status1'
import Status2 from './components/Status2'

export default function App() {
  const [page, setPage] = React.useState('home')

  // navigate setter that also scrolls to top for better UX when
  // switching to the Hjem (home) side.
  const navigate = (p) => {
    setPage(p)
    // Scroll to top so the user always sees the top of the selected page.
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      <Header onNavigate={navigate} />
      <main>
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
