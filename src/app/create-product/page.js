"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { apiFetch } from "@/lib/api";

export default function CreateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const createProduct = async () => {
    try {
      const data = await apiFetch("/products", {
        method: "POST",
        body: JSON.stringify({
          name,
          price: Number(price),
          stock: Number(stock),
        }),
      });

      alert(data.message || "Product created");

      // clear form
      setName("");
      setPrice("");
      setStock("");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <ProtectedRoute>
      <div style={{ maxWidth: "400px", margin: "auto" }}>
        <h2>Create Product</h2>

        <input
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          placeholder="Stock"
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />

        <button onClick={createProduct}>Create</button>
      </div>
    </ProtectedRoute>
  );
}