import React from 'react'

export default function Home(){
  return (
    <section>
      <div className="hero">
        <h2>Velkommen til vårt bachelorprosjekt</h2>
        <p>Dette er en presentasjonsside for en gruppe på fire studenter som jobber med et bachelorprosjekt. Her finner du informasjon om teamet, prosjektets mål og hvordan du kan kontakte oss.</p>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Mål</h3>
          <p>Utvikle en brukervennlig løsning som løser et konkret problem innen vårt fagfelt.</p>
        </div>
        <div className="card">
          <h3>Teknologi</h3>
          <p>React, Vite, moderne JavaScript, og relevante biblioteker for databehandling og UI.</p>
        </div>
        <div className="card">
          <h3>Tidsplan</h3>
          <p>Planlagt leveranse og milepæler gjennom semesteret, med jevnlige møter og demoer.</p>
        </div>
      </div>

      <section style={{maxWidth:920, margin:'2rem auto'}}>
        <h2 style={{textAlign:'center'}}>Smart Notification Engine — Oversikt</h2>

        <p>Vi skal utvikle en Smart Notification Engine som:</p>
        <ul>
          <li>analyserer historiske og løpende brukerdata</li>
          <li>identifiserer mønstre i brukeratferd</li>
          <li>genererer kontekstuelle og personlige varsler</li>
        </ul>

        <h3>Fokus</h3>
        <p>Fokuset ligger på logikk, regler, datagrunnlag og beslutningsmekanismer – ikke på ferdig produksjonssetting.</p>

        <h3>Viktige kvalitetsaspekter</h3>
        <ul>
          <li><strong>Relevans:</strong> Varslene må oppleves som nyttige for brukeren</li>
          <li><strong>Personalisering:</strong> Varsler tilpasses individuelle preferanser og atferd</li>
          <li><strong>Timing:</strong> Varsler sendes til riktig tidspunkt</li>
          <li><strong>Datakvalitet:</strong> Beslutninger baseres på pålitelig og oppdatert data</li>
          <li><strong>Brukertillit:</strong> Varsler skal ikke oppleves som støy eller spam</li>
        </ul>

        <h3>Hvorfor disse kvalitetene er viktige</h3>
        <p>Relevante og personlige varsler øker brukerengasjement og tillit til løsningen. Dårlig kvalitet kan føre til at brukere slår av varsler eller slutter å bruke applikasjonen. Kvalitet er derfor direkte knyttet til verdiskaping for både bruker og plattform.</p>

        <h3>Hvordan måler vi kvalitet</h3>
        <p>Eksempler på indikatorer:</p>
        <ul>
          <li>Klikkfrekvens på varsler</li>
          <li>Antall app-åpninger etter mottatt varsel</li>
          <li>Andel varsler som deaktiveres</li>
          <li>Endring i daglig og ukentlig aktiv bruk</li>
          <li>Repetert interaksjon med samme varselstype</li>
        </ul>

        <h3>Plan, backlogg og ressurskontroll</h3>
        <p>Prosjektet struktureres ved hjelp av:</p>
        <ul>
          <li>Produkt-backlogg med user stories og prioriteringer</li>
          <li>Sprintplaner med tydelige leveranser</li>
          <li>Estimater i story points eller timer</li>
          <li>Oversikt over ressursbruk og ansvar i gruppen</li>
        </ul>

        <h3>Kvalitetssikring av plan</h3>
        <ul>
          <li>Klare mål og avgrenset scope</li>
          <li>Regelmessige sprintgjennomganger</li>
          <li>Sammenligning av planlagt og faktisk fremdrift</li>
          <li>Tidlig identifisering av risiko og avvik</li>
        </ul>

        <h3>Kvalitetssikring av backlogg</h3>
        <ul>
          <li>Tydelige user stories med akseptansekriterier</li>
          <li>Kontinuerlig backlog refinement</li>
          <li>Prioritering basert på verdi og kompleksitet</li>
          <li>Testbarhet som krav for alle oppgaver</li>
        </ul>

        <h3>Ressursvurdering</h3>
        <p>Vi vurderer ressursutnyttelse basert på:</p>
        <ul>
          <li>Andel planlagte oppgaver fullført per sprint</li>
          <li>Jevn arbeidsbelastning i gruppen</li>
          <li>Lite omarbeid og få blokkeringer</li>
          <li>At oppgaver fordeles etter kompetanse</li>
        </ul>
      </section>
    </section>
  )
}
