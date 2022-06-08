async function fetchItem(sku) {
if (!sku) {
  return new Error('You must provide an url');
}
  const ENDPOINT = `https://api.mercadolibre.com/items/${sku}`;
  const response = await fetch(ENDPOINT);
  const result = await response.json();
  return result;
}

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
