(function () {
  const menuButton = document.querySelector('.api_mobile-menu-button');
  const closeButton = document.querySelector('.api_mobile-close-button');
  const menu = document.querySelector('.api_menu');
  const menuTitle = document.querySelectorAll('.api_menu-item--title');
  const subMenuItemActive = document.querySelectorAll('.api_menu-item--sub');

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

  const onMenuTitleClick = (evt) => {
    evt.currentTarget.classList.toggle('js-open');
  }

  menuButton.addEventListener('click', onMenuButtonClick);
  closeButton.addEventListener('click', onCloseButtonClick);
  menuTitle.forEach(item => {
    item.addEventListener('click', onMenuTitleClick);
  });

  subMenuItemActive.forEach(item => {
    if (item.classList.contains('api_menu-item--active')) {
      console.log(item.parentNode.previousElementSibling);
      item.parentNode.previousElementSibling.classList.add('js-open');
    }
  });
})();
