"use client";

import { useState } from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import { apiFetch } from "@/lib/api";

export default function CreateOrder() {
  const [productId, setProductId] = useState("");
  const [qty, setQty] = useState("");

  const createOrder = async () => {
    try {
      const data = await apiFetch("/orders", {
        method: "POST",
        body: JSON.stringify({
          items: [
            {
              product_id: Number(productId),
              quantity: Number(qty),
            },
          ],
        }),
      });

      alert(data.message || "Order created");

    } catch (err) {
      console.error(err.message);

      // 👉 handle like login
      if (err.message === "Unauthorized") {
        router.push("/login"); // token missing/expired
      } else {
        alert(err.message);
      }
    }
  };

  return (
    <ProtectedRoute>
      <h2>Create Order</h2>

      <input
        placeholder="Product ID"
        onChange={(e) => setProductId(e.target.value)}
      />

      <input
        placeholder="Quantity"
        onChange={(e) => setQty(e.target.value)}
      />

      <button onClick={createOrder}>Order</button>
    </ProtectedRoute>
  );
}