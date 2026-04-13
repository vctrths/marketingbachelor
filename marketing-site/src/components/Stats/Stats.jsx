import './Stats.css'

const stats = [
  { value: '73', unit: '%', label: 'Privétuinen onderbenut' },
  { value: '1 op 3', unit: '', label: 'Stadsbewoners zonder tuin' },
  { value: '2', unit: 'jr', label: 'Iteratief onderzoek' },
  { value: '100', unit: '%', label: 'Lokaal & gemeenschapsgericht' },
]

export default function Stats() {
  return (
    <div className="stats__dividers">
      <div className="stats__line" />
      <div className="stats__items">
        {stats.map((stat, i) => (
          <div className="stats__item" key={i}>
            <span className="stats__value">
              {stat.value}
              {stat.unit && <span className="stats__value-unit">{stat.unit}</span>}
            </span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="stats__line" />
    </div>
  )
}
