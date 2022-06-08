require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {

  it('verify if fetchItem is a function', () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function');
  })

  it('verify if fetchItem uses correct endpoint', async () => {
    expect.assertions(1);
    fetchItem('MLB1615760527');
    const result = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalledWith(result);
  })

  it('verify if fetchItem results same structure as "item"', async () => {
    expect.assertions(1);
    const result = await fetchItem('MLB1615760527');
    expect(result).toEqual(item);
  })
  
  it('verify if error ir returned when no param is given"', async () => {
    expect.assertions(1);
    const result = await fetchItem();
    expect(result).toEqual(Error('You must provide an url'));
  })


});
  // implemente seus testes aqui
//   fail('Teste vazio');
// });
