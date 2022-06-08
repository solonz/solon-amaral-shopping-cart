async function fetchProducts(produto) {
  if (!produto) {
    return new Error('You must provide an url');
  }
  const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;

  const response = await fetch(ENDPOINT);
  const results = await response.json();
  return results;
}

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
} 
