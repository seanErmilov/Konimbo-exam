export function filterProdacts(products, filterBy) {
    return products.filter((product) => product.title.toLowerCase().includes(filterBy.title))
}