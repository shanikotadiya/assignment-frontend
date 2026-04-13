"use client";

import Link from "next/link";
import { logout, getToken } from "../lib/auth";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [token, setToken] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    setToken(getToken());
  }, [pathname]); // 👈 re-check on route change

  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link href="/products">Products</Link> |{" "}
      <Link href="/create-order">Create Order</Link> |{" "}
      <Link href="/orders">Orders</Link> |{" "}
      <Link href="/create-product">Create Product</Link> |{" "}

      {token ? (
        <button
          onClick={() => {
            logout();
            setToken(null); // 👈 instant update
          }}
        >
          Logout
        </button>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </nav>
  );
}