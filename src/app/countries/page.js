import Link from 'next/link'
import { countries } from '../../data/countries'

export default function CountriesPage() {
  return (
    <main className="container">
      <div className="page-header">
        <h1>Страны мира</h1>
        <p>Выберите страну для просмотра подробной информации</p>
      </div>

      <div className="countries-grid">
        {countries.map(country => (
          <Link
            key={country.id}
            href={`/countries/${country.id}`}
            className="country-card"
          >
            <div className="country-info">
              <h3 className="country-name">{country.name}</h3>
              <p className="country-language">Язык: {country.language}</p>
              <p className="country-stats">
                {country.area.toLocaleString()} км² • {country.population.toLocaleString()} чел.
              </p>
              <p className="cities-count">
                Городов: {country.cities.length}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}