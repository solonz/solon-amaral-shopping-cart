const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('checks if localStorage.getItem is called in getSavedCartItems', () => {
    expect.assertions(1);

    getSavedCartItems();

    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('checks if localStorage.getItem is called when cartItems is given as argument', () => {
    expect.assertions(1);

    getSavedCartItems();

    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
