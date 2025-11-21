import Link from 'next/link'
import { countries } from '@/data/countries'

export default async function CityPage({ params }) {
    const { id, cityId } = await params
    const country = countries.find(c => c.id === parseInt(id))
    const city = country?.cities.find(ct => ct.id === parseInt(cityId))

    if (!country || !city) {
        return (
            <div className="container">
                <div style={{ textAlign: 'center', padding: '100px 0' }}>
                    <h2>Город не найден</h2>
                    <Link href="/countries" className="back-button">
                        ← Назад к списку стран
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <main className="container">
            <div className="breadcrumbs">
                <Link href="/countries" className="back-button">Список стран</Link>
                <span> / </span>
                <Link href={`/countries/${country.id}`} className="back-button">{country.name}</Link>
            </div>

            <div className="city-detail">
                <div className="city-header">
                    <h1>{city.name}</h1>
                    <p className="city-country">Город в {country.name}</p>
                </div>

                <div className="city-stats-grid">
                    <div className="city-stat">
                        <span className="stat-label">Площадь города</span>
                        <span className="stat-value">{city.area} км²</span>
                    </div>
                    <div className="city-stat">
                        <span className="stat-label">Население</span>
                        <span className="stat-value">{city.population.toLocaleString()} человек</span>
                    </div>
                    <div className="city-stat">
                        <span className="stat-label">Год основания</span>
                        <span className="stat-value">
                            {city.foundingYear > 0 ? city.foundingYear + ' год' : Math.abs(city.foundingYear) + ' год до н.э.'}
                        </span>
                    </div>
                </div>

                <div className="country-link">
                    <Link href={`/countries/${country.id}`} className="back-button">
                        ← Вернуться к информации о {country.name}
                    </Link>
                </div>
            </div>
        </main>
    )
}