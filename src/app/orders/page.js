"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "../../lib/api";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    apiFetch("/orders").then((res) => setOrders(res.data));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const cancelOrder = async (id) => {
    await apiFetch(`/orders/${id}/cancel`, {
      method: "PATCH",
    });

    fetchOrders();
  };

  return (
    <ProtectedRoute>
      <h2>Orders</h2>

      {orders.map((o) => (
        <div key={o.id}>
          #{o.id} - ₹{o.total_price} - {o.status}

          {o.status !== "CANCELLED" && (
            <button onClick={() => cancelOrder(o.id)}>
              Cancel
            </button>
          )}
        </div>
      ))}
    </ProtectedRoute>
  );
}