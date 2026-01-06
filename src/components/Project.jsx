import React from 'react'

export default function Project(){
  return (
    <section style={{maxWidth:720, margin:'1.5rem auto'}}>
      <h2 style={{textAlign:'center'}}>Prosjekt</h2>
      <h3>Problemstilling</h3>
      <p>Vi ønsker å utvikle en Smart Notification Engine som forbedrer brukeropplevelsen ved å sende relevante og personaliserte varsler basert på historikk og sanntidsdata.</p>

      <h3>Forslag</h3>
      <p>Design og implementer logikk for mønstergjenkjenning, beslutningsregler og enkle personaliseringsstrategier. Fokuser på evaluerbarhet og målbare KPIer.</p>
    </section>
  )
}
import React from 'react'

export default function Project(){
  return (
    <section>
  <h2 style={{textAlign: 'center', fontSize: '1.8rem', marginBottom: '0.5rem'}}>Prosjektet</h2>

      <h3>Problemstilling</h3>
      <p>
        Fishbuddy-brukere genererer store mengder data hver dag, blant annet gjennom fangstregistreringer, søk og kartinteraksjoner. Denne informasjonen utnyttes i dag i liten grad til å gi personlige og relevante varsler. Det finnes ingen løsning som analyserer brukeratferd og oversetter dette til konkrete anbefalinger for den enkelte bruker.
      </p>

      <h3>Prosjektforslag</h3>
      <p>
        Vi ønsker å utvikle en Smart Notification Engine – et regelbasert og delvis AI-drevet system som analyserer brukermønstre og sender tilpassede varsler. Løsningen skal bidra til en mer personlig, engasjerende og verdiskapende brukeropplevelse.
      </p>

      <h4>Eksempler på varsler</h4>
      <ul>
        <li>«Det er høy aktivitet i området der du vanligvis fisker.»</li>
        <li>«Arten du nylig søkte etter observeres nå oftere i område X.»</li>
        <li>«Temperaturfallet kan gi bedre forhold for sjøørret i dag.»</li>
      </ul>

      <h3>Mål</h3>
      <ul>
        <li>Designe og implementere en regeldrevet arkitektur med mulighet for maskinlæringsstøtte.</li>
        <li>Bygge en prototype som kan analysere historiske og sanntidsbrukerdata for å generere relevante varsler.</li>
        <li>Evaluere løsningen med fokus på relevans og brukerengasjement.</li>
      </ul>

      <h3>Metode</h3>
      <p>
        Vi vil kombinere regelbaserte metoder for rask prototyping med enklere AI-komponenter (f.eks. mønstergjenkjenning eller klassifisering) der det gir verdi. Arbeidet inkluderer datainnsamling og -rensing, implementasjon av varslingslogikk, og brukertesting for å måle effekt og forbedre reglene/modellene.
      </p>
    </section>
  )
}
