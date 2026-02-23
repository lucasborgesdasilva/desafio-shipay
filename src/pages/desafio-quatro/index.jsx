import { getToken } from "./service/get-token";

export const fetchAllData = async () => {
  const token = await getToken();

  const fetchData = async ({feature}) => {
    const response = await fetch(`https://api.acme.com/${feature}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token.access_token}`
      }
    });

    if(!response) {
      console.log('Algo deu errado!');
    }

    return response.json();
  }

  const [categories, clients, products] = await Promise.allSettled([
    fetchData('categories'),
    fetchData('clients'),
    fetchData('products'),
  ]);

  console.log(categories, clients, products)
}