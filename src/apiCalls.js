export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const addOrder = async (newOrder) => {
  const url = 'http://localhost:3001/api/v1/orders';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newOrder)
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Could not add order.');
  }
  return response.json();
}