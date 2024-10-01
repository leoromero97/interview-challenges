import {useEffect, useState} from "react";
import api from "./api";
import { Product } from "./types";
import './styles.css'

function ProductListApp() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    api.search(query);
  }, [query]);

  return (
    <main>
      <h1>Tienda digital</h1>
      <input name="text" placeholder="tv" type="text" onChange={(e) => setQuery(e.target)} />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <span>$ {product.price}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ProductListApp;