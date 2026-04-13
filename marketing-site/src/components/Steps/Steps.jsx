import SectionHeader from '../SectionHeader/SectionHeader'
import './Steps.css'

const steps = [
  {
    number: '01',
    title: 'Maak een profiel aan',
    description: 'Registreer je als tuineigenaar of tuinzoeker en vertel ons wat je zoekt of aanbiedt.',
  },
  {
    number: '02',
    title: 'Vind jouw match',
    description: 'Bekijk beschikbare tuinen of geïnteresseerde tuiniers in jouw buurt op de kaart.',
  },
  {
    number: '03',
    title: 'Maak een afspraak',
    description: 'Chat en maak een eerste vrijblijvende kennismaking in de tuin.',
  },
  {
    number: '04',
    title: 'Begin met tuinieren',
    description: 'Start je samenwerking en bouw aan een duurzame groene verbinding.',
  },
]

export default function Steps() {
  return (
    <section className="steps" id="hoe-werkt-het">
      <div className="steps__inner">
        <SectionHeader
          label="Stappenplan"
          title="Hoe werkt Groene Vingers"
          description="In 4 stappen van registratie tot groenende samenwerking."
          variant="light"
        />
        <div className="steps__grid">
          {steps.map((step) => (
            <div className="steps__item" key={step.number}>
              <div className="steps__item-header">
                <span className="steps__item-dot" />
                <span className="steps__item-number">{step.number}</span>
              </div>
              <div className="steps__item-content">
                <h3 className="steps__item-title">{step.title}</h3>
                <p className="steps__item-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
