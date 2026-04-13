"use client";

import constants from "./constent";

export const apiFetch = async (url, options = {}) => {
  console.log("API URL:", constants.API_URL + url);
  const res = await fetch(constants.API_URL + url, {
    ...options,
    credentials: "include", // 🔥 VERY IMPORTANT
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};