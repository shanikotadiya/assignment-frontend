"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "../../lib/api";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    apiFetch("/products").then(setProducts);
  }, []);

  return (
    <ProtectedRoute>
      <h2>Products</h2>

      {products.map((p) => (
        <div key={p.id}>
          {p.name} - ₹{p.price} - Stock: {p.stock}
        </div>
      ))}
    </ProtectedRoute>
  );
}