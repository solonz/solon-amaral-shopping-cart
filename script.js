const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItem = document.querySelector('.cart__items');

const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(cartItem);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  document.querySelector('ol.cart__items').appendChild(li);
  saveCartItems(cartItem.innerText);
};

const addButtonsListeners = () => {
  const buttons = document.querySelectorAll('.item__add');
  buttons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      const productId = getSkuFromProductItem(event.target.parentNode);
      const productIdData = await fetchItem(productId);
      const { id, title, price } = productIdData;
      createCartItemElement({ sku: id, name: title, salePrice: price });
    });
  });
};

const getProductsElements = async (product) => {
  const { results } = await fetchProducts(product);
  const products = results.map((produto) => ({
    sku: produto.id,
    name: produto.title,
    image: produto.thumbnail,
  }));
  products.forEach((element) => document.querySelector('.items')
    .appendChild(createProductItemElement(element)));
  addButtonsListeners();
};

// ***OU***

// const getProductsElements = async (product) => {
//   const { results } = await fetchProducts(product);
//   results.forEach((produto) => {
//     const { id, title, thumbnail } = produto;
//     const objeto = {
//       sku: id,
//       name: title,
//       image: thumbnail,
//     };
//     document.querySelector('.items')
//       .appendChild(createProductItemElement(objeto));
//   });
// };

const itemsLocalStorage = () => {
  const itemsLS = getSavedCartItems();
  cartItem.innerText = itemsLS;
  const novaLi = document.querySelectorAll('.cart__item');
  novaLi.forEach((item) => item.addEventListener('click', (event) => event.target.remove()));
};

window.onload = () => {
  getProductsElements('computador');
  itemsLocalStorage();
};
