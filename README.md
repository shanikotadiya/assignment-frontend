# 🌐 Order Allocation System – Frontend

## 📌 Overview

This is the **frontend application** for the Order Allocation System.

It provides a simple UI for:

* User authentication (Login / Signup)
* Viewing available products
* Creating orders
* Viewing orders with pagination
* Cancelling orders

The frontend communicates with the backend APIs and handles user interaction, loading states, and error handling.

---

## 🛠️ Tech Stack

* Next.js (App Router)
* React.js
* Fetch API
* JavaScript (ES6+)

---

## 📁 Project Structure

```id="a2k91s"
frontend/
│── app/
│   ├── login/
│   ├── signup/
│   ├── products/
│   ├── orders/
│   ├── create-order/
│── lib/
│   ├── api.js        # API helper
│── components/
│── public/
│── package.json
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash id="n9d1xp"
git clone <your-repo-url>
cd frontend
```

---

### 2. Install Dependencies

```bash id="9k1t0c"
npm install
```

---

### 3. Run Development Server

```bash id="2m5n1r"
npm run dev
```

App will run on:

```id="t3w4mc"
http://localhost:3000
```

---

## 🔗 Backend Connection

Update API base URL in:

```id="z0d7gq"
lib/api.js
```

```js id="x9u8mn"
const BASE_URL = "http://localhost:5000";
```

---

## 🔐 Authentication Flow

### Login

* User enters email & password
* API call → `/auth/login`
* JWT token stored in `localStorage`

```js id="b1l0wr"
localStorage.setItem("token", token);
```

---

### Protected APIs

Token is sent in headers:

```js id="p4q9zs"
Authorization: <JWT_TOKEN>
```

---

## 📦 Features & Pages

### 1. Login Page

* User authentication
* Stores JWT token
* Redirects to products page

---

### 2. Product Listing Page

* Fetches products from backend
* Displays:

  * Name
  * Price
  * Stock

---

### 3. Create Order Page

* Select product(s)
* Enter quantity
* Submit order

Handles:

* Multiple items
* API integration

---

### 4. Orders Page

* Displays user orders
* Shows:

  * Order ID
  * Total price
  * Status

---

### 5. Cancel Order

* Calls:

```id="3v9e8x"
PATCH /orders/:id/cancel
```

* Updates UI after cancellation

---

## ⚡ API Integration

All API calls are handled via helper:

```js id="g2z8pn"
// lib/api.js

export const api = async (url, method = "GET", body, token) => {
  const res = await fetch(`${BASE_URL}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: token }),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data;
};
```

---

## ⏳ Loading & Error Handling

* Loading states handled using React state
* Errors handled using `try-catch`
* User-friendly alerts shown on failure

---

## 🚫 Edge Case Handling

* Insufficient stock → error shown
* Unauthorized access → blocked
* Invalid input → handled via validation

---

## 🧠 Design Decisions

* Used Next.js App Router for clean structure
* Centralized API handling
* Kept UI simple (functionality over design)
* Used Cookies for JWT

---

## 🚀 Future Improvements

* Better UI
* Token expiry handling
* Protected routes (middleware)

---

## 👨‍💻 Author

**Shani Kotadiya**
