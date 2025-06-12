export const sendFormData = async (data) => {
    const response = await fetch('http://localhost:3001/usuarios', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Error al enviar los datos');
    }

    return await response.json();
};