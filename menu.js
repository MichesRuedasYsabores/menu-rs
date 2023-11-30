/* document.addEventListener('DOMContentLoaded', () => {
    fetch('menu.json')
        .then(response => response.json())
        .then(menu => {
            const menuSection = document.getElementById('menu');
            menuSection.innerHTML = renderMenu(menu);
        });
});

function renderMenu(menu) {
    let html = '';
    for (const category in menu) {
        html += `<h2>${category}</h2>`;
        menu[category].forEach(item => {
            html += `<div class="menu-item">
                    <span>${item.name}</span>
                    <span>${item.price}</span>
                    <p>${item.description || ''}</p>
                 </div>`;
        });
    }
    return html;
}
 */



document.addEventListener('DOMContentLoaded', () => {
    const menu = {
      "Mojitos": [
        { "name": "Tradicional", "price": "$80.00", "description": "Limón, hiervabuena, azúcar, ron, agua mineral" },
        { "name": "Mango", "price": "$80.00", "description": "Mango, hiervabuena, azúcar, ron, agua mineral" },
        { "name": "Sandía", "price": "$70.00" }
      ],
      "Tequila": [
        { "name": "Palomas", "price": "$70.00", "description": "Tequila centenario, hielo, squirt, sal y limón" }
      ],
      "Snacks": [
        { "name": "Hamburguesa sencilla", "price": "$50.00" },
        { "name": "Hamburguesa hawaiana", "price": "$60.00" }
      ]
      // Agrega más categorías y productos según sea necesario
    };
  
    const menuSection = document.getElementById('menu');
    menuSection.innerHTML = renderMenu(menu);
  });
  
  function renderMenu(menu) {
    let html = '';
    for (const category in menu) {
      html += `<h2 class="subtitulos">${category}</h2>`;
      menu[category].forEach(item => {
        html += `<div class="menu-item">
                    <div class="item-info">
                      <span>${item.name}</span>
                      <span class="price">${item.price}</span>
                    </div>
                    <p class="descripcion">${item.description || ''}</p>
                 </div>
                 `;
      });
    }
    return html;
  }
  