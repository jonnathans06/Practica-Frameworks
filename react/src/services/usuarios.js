const API_URL = 'https://jsonplaceholder.typicode.com/users';

export async function obtenerUsuarios() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error('No se pudieron obtener los usuarios');
    }

    return await response.json();
}
