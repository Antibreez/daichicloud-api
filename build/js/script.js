(function () {
  const menuButton = document.querySelector('.api_mobile-menu-button');
  const closeButton = document.querySelector('.api_mobile-close-button');
  const menu = document.querySelector('.api_menu');

  const openMenu = () => {
    if (!menu.classList.contains('js--show')) {
      menu.classList.add('js--show');
    }
  }

  const closeMenu = () => {
    if (menu.classList.contains('js--show')) {
      menu.classList.remove('js--show');
    }
  }

  const onMenuButtonClick = () => {
    openMenu();
  }

  const onCloseButtonClick = () => {
    closeMenu();
  }

  menuButton.addEventListener('click', onMenuButtonClick);
  closeButton.addEventListener('click', onCloseButtonClick);
})();
