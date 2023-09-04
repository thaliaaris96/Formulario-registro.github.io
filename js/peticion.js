
const btnRegistro = document.getElementById('btnRegistro')

btnRegistro.addEventListener('click', () => {
    const datos = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos),
    };

    fetch('https://jsonplaceholder.typicode.com/users.', options)
    
    .then(response => {
        if (!response.ok) {
            throw Error(response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log(datos); // Muestra la respuesta
    })
    .catch(error => {
        console.log('Error en la solicitud:', error);
    });
});