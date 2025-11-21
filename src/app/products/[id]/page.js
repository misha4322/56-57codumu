import Link from 'next/link'
import { products } from '../../../data/products'

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="container">
        <div style={{ textAlign: 'center', padding: '100px 0' }}>
          <h2>Товар не найден</h2>
          <Link href="/" className="back-button">
             магазин
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="container">
      <Link href="/" className="back-button">
        ← Назад к витрине
      </Link>

      <div className="product-page">
        <div className="product-detail">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="product-detail-image"
            />
          </div>
          <div className="product-detail-info">
            <h1>{product.name}</h1>
            <p className="product-detail-price">
              {product.price.toLocaleString()} ₽
            </p>
            <p className="product-detail-description">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}