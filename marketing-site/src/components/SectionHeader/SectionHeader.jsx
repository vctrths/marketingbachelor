import './SectionHeader.css'

export default function SectionHeader({ label, title, description, variant = 'default', wide = false }) {
  const isLight = variant === 'light'
  const isBrand = variant === 'brand'

  return (
    <div className={`section-header ${wide ? 'section-header--wide' : ''}`}>
      <div className="section-header__label">
        <span className="section-header__line" />
        <span
          className={`section-header__label-text ${
            isLight ? 'section-header__label-text--light' : isBrand ? 'section-header__label-text--brand' : ''
          }`}
        >
          {label}
        </span>
      </div>
      <div className="section-header__content">
        <h2 className={`section-header__title ${isLight ? 'section-header__title--light' : ''}`}>{title}</h2>
        {description && (
          <p className={`section-header__description ${isLight ? 'section-header__description--light' : ''}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
