import { serverUrl, headersJSON } from './Shared';

class ProductsService {

    constructor() {}

    async getProductsList() {
        const res = await fetch(`${serverUrl}/products`);
        return await res.json();
    }

    async getProductsByCategory(category) {
        const response = await fetch(`${serverUrl}/getproductbycategory`, {
            method: 'POST',
            headers: headersJSON,
            body: JSON.stringify({
                category
            })
        });

        return await response.json();
    }

    async getProductById(id) {
        const response = await fetch(`${serverUrl}/getproductbyid`, {
            method: 'POST',
            headers: headersJSON,
            body: JSON.stringify({
                id
            })
        });

        return await response.json();
    }
}

export default new ProductsService();