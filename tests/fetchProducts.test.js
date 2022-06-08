require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {

  it('verify if fetchProducts is a function', () => {
    expect.assertions(1);
    const func = fetchProducts;
    expect(typeof func).toBe('function')
  })

  it('verify if fetch is being called during fechProducts', async () => {
    expect.assertions(1);
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled()
  })

  it('verify if fetchProducts uses correct endpoint', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  })

  it('verify if fetchProducts has the same structure as computadorSearch', async () => {
    expect.assertions(1);
    const data = await fetchProducts('computador');
    expect(data).toEqual(computadorSearch)
  })

  it('verify if fetchProducts returns error message if no param is given', async () => {
    // expect.assertions(1);
    const data = await fetchProducts();
    expect(data).toEqual(new Error('You must provide an url'));
  })

});
// fail('Teste vazio');
