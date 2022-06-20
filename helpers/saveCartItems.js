const saveCartItems = (carrinho) => localStorage.setItem('cartItems', carrinho);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
