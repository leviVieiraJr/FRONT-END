function toggleMenu() {
  const menu = document.getElementById("menu")
  if (menu) {
    menu.classList.toggle("open")
  }
}

  
  function toggleSubmenu(event) {
    event.preventDefault(); // previne redirecionamento
    const submenu = event.target.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  }

  // Função para pegar parâmetros da URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Preencher os dados
document.addEventListener("DOMContentLoaded", function() {
  const nomeProduto = getQueryParam('nome');
  const precoAntigo = getQueryParam('precoAntigo');
  const precoNovo = getQueryParam('precoNovo');
  const imagem = getQueryParam('imagem');

  if (nomeProduto) {
    document.querySelector('.categoria-produto').textContent = nomeProduto;
  }
  if (precoAntigo) {
    document.querySelector('.preco-antigo').textContent = precoAntigo;
  }
  if (precoNovo) {
    document.querySelector('.preco-novo').textContent = precoNovo;
  }
  if (imagem) {
    document.querySelector('.imagem-produto img').src = './assets/' + imagem;
  }
});
  