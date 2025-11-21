import Link from 'next/link'
import { products } from '../data/products'

export default function Home() {
  return (
    <main className="container">
      <div className="products-grid">
        {products.map(product => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="product-card"
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price.toLocaleString()} ₽</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}