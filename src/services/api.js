export async function getCategories() {
  try {
    const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
    const result = await fetch(URL);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getProductsFromCategoryAndQuery(categoryId = '', search = '') {
  const queryCategory = categoryId && `category=${categoryId}`;
  const queryInput = search && `q=${encodeURI(search)}`;
  const url = `https://api.mercadolibre.com/sites/MLB/search?${queryCategory}${queryCategory && queryInput && '&'}${queryInput}`;
  try {
    const result = await fetch(url);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getProductsByID(id) {
  try {
    const URL = `https://api.mercadolibre.com/items/${id}`;
    const result = await fetch(URL);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
}
