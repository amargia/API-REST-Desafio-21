const socket = io.connect();

const renderProducts = () => {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = '';

    fetch('lista-productos')
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                productsContainer.innerHTML += `
                <div class="card">
                    <img src="${element.thumbnail}" class="card-img-top" alt="imagen ${element.name}">
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">${element.price}</p>
                        <p class="card-text">${element.description}</p>
                    </div>
                </div>`              
            });
        })
        .catch(error => console.log(error));
}

function renderMessages(data) {
    const html = data
        .map((elem, index) => {
            return (`
                <div>
                    <p class="text">${elem.email}</p>:
                    <p class="text">${elem.fecha}</p>
                    <p class="text">${elem.mensaje}</p>
                </div>`);
        })
        .join(" ");

    document.getElementById("mensajes").innerHTML = html;
}

function addMessage(i) {
    const mensaje = {
        email: document.getElementById("mail").value,
        mensaje: document.getElementById("mensaje").value,
        fecha: new Date().toLocaleString()
    };
    socket.emit("new-message", mensaje);
    return false;
}

socket.on("productos", function() { renderProducts() });
socket.on("messages", function(data) { renderMessages(data)});