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
  