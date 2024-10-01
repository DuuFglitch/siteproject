let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = document.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');

let active = 0;
let lastPosition = items.length - 1;

// Função para atualizar o item ativo
function updateItem(newActive) {
    let itemOld = container.querySelector('.item.active');
    let dotOld = indicator.querySelector('li.active');

    itemOld.classList.remove('active');
    dotOld.classList.remove('active');

    items[newActive].classList.add('active');
    dots[newActive].classList.add('active');

    // Atualiza a propriedade CSS --calculation
    container.style.setProperty('--calculation', newActive < active ? -1 : 1); // Define -1 se for para a esquerda, 1 se for para a direita

    active = newActive; // Atualiza o índice ativo
}

// Evento de clique para o botão "anterior"
prevButton.onclick = () => {
    const newActive = active === 0 ? lastPosition : active - 1; // Atualiza o índice ativo
    updateItem(newActive); // Chama a função para atualizar o item
};

// Evento de clique para o botão "próximo"
nextButton.onclick = () => {
    const newActive = active === lastPosition ? 0 : active + 1; // Atualiza o índice ativo
    updateItem(newActive); // Chama a função para atualizar o item
};
