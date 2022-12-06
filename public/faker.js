function renderProducts() {
    fetch('http://localhost:3000/api/faker-list')
        .then(response => response.json())
        .then(data => {
            const html = data.map((el, index) => {
                return `
                <tr>
                    <td>${el.name}</td>
                    <td>${el.price}</td>
                    <td><img src="${el.thumbnail}"></td>
                </tr>`
            }).join(" ");
            document.getElementById('tbodyList').innerHTML = html;
});
}

renderProducts();