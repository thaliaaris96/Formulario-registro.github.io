async function postJSON(data) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log("Exito al enviar registro:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        postJSON({
            nombre: document.getElementById('nombre').value,
            apellido: document.getElementById('apellido').value,
            date: document.getElementById('fechaNacimiento').value
        });
    });
});