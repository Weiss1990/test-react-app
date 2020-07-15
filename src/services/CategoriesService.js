import { serverUrl, headersJSON } from './Shared';

class CategoriesService {
    constructor() {}

    async getCategoriesList() {
        const res = await fetch(`${serverUrl}/categories`);
        return await res.json();
    }
}

export default new CategoriesService();