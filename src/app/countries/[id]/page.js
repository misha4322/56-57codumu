import Link from 'next/link'
import { countries } from '../../../data/countries'

export default async function CountryPage({ params }) {
  const { id } = await params
  const country = countries.find(c => c.id === parseInt(id))

  if (!country) {
    return (
      <div className="container">
        <div className="not-found">
          <h2>Страна не найдена</h2>
          <Link href="/countries" className="back-button">
            ← Назад к списку стран
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="container">
      <Link href="/countries" className="back-button">
        ← Назад к списку стран
      </Link>

      <div className="country-detail">
        <div className="country-header">
          <h1>{country.name}</h1>
          <div className="country-stats">
            <div className="stat">
              <span className="stat-label">Официальный язык</span>
              <span className="stat-value">{country.language}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Площадь</span>
              <span className="stat-value">{country.area.toLocaleString()} км²</span>
            </div>
            <div className="stat">
              <span className="stat-label">Население</span>
              <span className="stat-value">{country.population.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="cities-section">
          <h2>Города {country.name}</h2>
          <div className="cities-grid">
            {country.cities.map(city => (
              <Link
                key={city.id}
                href={`/countries/${country.id}/cities/${city.id}`}
                className="city-card"
              >
                <h4 className="city-name">{city.name}</h4>
                <p className="city-stats">
                  {city.area} км² • {city.population.toLocaleString()} чел.
                </p>
                <p className="city-year">
                  Основан в {city.foundingYear > 0 ? city.foundingYear + ' году' : Math.abs(city.foundingYear) + ' году до н.э.'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}