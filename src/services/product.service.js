import http from "./axios";

export const productService = {
    getProduct,
    getProducts,
    getBrands,
    getCategories,
    getProductByBrand,
}

function getBrands() {
   return  http.get('brands');
}

function getCategories() {
    return http.get('categories');
}

function getProducts() {
    return http.get('products');
}

function getProduct(name) {
    return http.get('product/by-name/' + name);
}

function getProductByBrand(id) {
    return http.get('brands/' + id);
}



