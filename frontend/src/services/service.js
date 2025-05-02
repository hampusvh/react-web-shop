const API_BASE_URL = "http://localhost:5001/api";

export async function registerUser(username, password) {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Registrering misslyckades");
  }

  return data;
}

export async function loginUser(username, password) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Fel vid inloggning");
  }

  return data;
}

export async function getProducts() {
  const response = await fetch(`${API_BASE_URL}/products`);

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Kunde inte hämta produkter");
  }

  return data;
}

export async function getProductById(id) {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Kunde inte hämta produkt");
  }

  return data;
}

export async function submitOrder(cart, token) {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ items: cart }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Kunde inte skicka beställning");
  }

  return data;
}

export async function getOrders(token) {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Kunde inte hämta beställningar");
  }

  return data;
}

export async function changePassword(token, currentPassword, newPassword) {
  const response = await fetch(`${API_BASE_URL}/users/change-password`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ currentPassword, newPassword }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Fel vid lösenordsbyte");
  }

  return data;
}
