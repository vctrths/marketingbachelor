import { useState } from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import './Features.css'

const features = [
  {
    number: '01',
    title: 'Slimme tuinmatch',
    description: 'Koppelt tuinzoekers aan de meest geschikte tuineigenaars op basis van locatie, interesses en beschikbaarheid.',
  },
  {
    number: '02',
    title: 'Vertrouwde profielen',
    description: 'Geverifieerde gebruikersprofielen met beoordelingen zorgen voor een veilige en betrouwbare community.',
  },
  {
    number: '03',
    title: 'Direct communiceren',
    description: 'Ingebouwde berichtenfunctie om afspraken te maken en je samenwerking soepel te laten verlopen.',
  },
  {
    number: '04',
    title: 'Afspraken & agenda',
    description: 'Plan tuinsessies en beheer je samenwerking via een overzichtelijke kalenderweergave.',
  },
  {
    number: '05',
    title: 'Tuinlogboek',
    description: 'Documenteer je groeiproces en volg de evolutie van je gedeelde tuin over de seizoenen.',
  },
  {
    number: '06',
    title: 'Buurtcommunity',
    description: 'Ontdek andere tuiniers in jouw buurt en bouw aan een groenere, hechtere buurt.',
  },
]

function FeatureItem({ feature }) {
  const [open, setOpen] = useState(false)
  const panelId = `feature-panel-${feature.number}`
  const buttonId = `feature-btn-${feature.number}`

  return (
    <div className="features__accordion-item">
      <button
        id={buttonId}
        className="features__accordion-header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <div className="features__accordion-left">
          <div className="features__item-number">
            <span>{feature.number}</span>
          </div>
          <h3 className="features__item-title">{feature.title}</h3>
        </div>
        <svg
          className={`features__accordion-chevron ${open ? 'features__accordion-chevron--open' : ''}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        id={panelId}
        className="features__accordion-body"
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
      >
        <p className="features__item-description">{feature.description}</p>
      </div>
    </div>
  )
}

export default function Features() {
  const topRow = features.slice(0, 3)
  const bottomRow = features.slice(3)

  return (
    <section className="features">
      <div className="features__content">
        <SectionHeader
          label="Kernfunctionaliteit"
          title="Alles wat je nodig hebt om te groeien"
          description="Van matching tot community, eenvoudig, toegankelijk en menselijk ontworpen."
        />
        {/* Desktop grid */}
        <div className="features__grid-wrapper">
          <div className="features__grid-border">
            <div className="features__grid">
              <div className="features__row">
                {topRow.map((feature) => (
                  <div className="features__item" key={feature.number}>
                    <div className="features__item-number">
                      <span>{feature.number}</span>
                    </div>
                    <div className="features__item-content">
                      <h3 className="features__item-title">{feature.title}</h3>
                      <p className="features__item-description">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="features__row">
                {bottomRow.map((feature) => (
                  <div className="features__item" key={feature.number}>
                    <div className="features__item-number">
                      <span>{feature.number}</span>
                    </div>
                    <div className="features__item-content">
                      <h3 className="features__item-title">{feature.title}</h3>
                      <p className="features__item-description">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Tablet accordion */}
        <div className="features__accordion">
          {features.map((feature) => (
            <FeatureItem key={feature.number} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
