document.addEventListener('DOMContentLoaded', () => {

  const btnMenu = document.querySelector('.logo');
  const btnClose = document.querySelector('.close');
  const menu = document.querySelector('.content-menu');
  const btnHighLightLink = document.querySelector('#btn-highlightLink');
  const btnFontSize = document.querySelector('#btn-fontSizeUp');
  const btnLetterSpacing = document.querySelector('#btn-letterSpacing');
  const btnToggleNarateur = document.querySelector('#btn-toggleNarateur');

  highlightLink(sessionStorage.getItem("isHightlight") || false);
  modifyFontSize(sessionStorage.getItem("fontSizeUp") || 1);
  modifyLetterSpacing(sessionStorage.getItem("letterSpacing") || 1);

  btnMenu.addEventListener('click', (e) => {

    if (menu.style.visibility == "hidden"){
      menu.style.visibility = "visible";
    } else {
      menu.style.visibility = "hidden";
    }

  });


  btnHighLightLink.addEventListener('click', (e) => {

    highlightLink();

  });

  btnFontSize.addEventListener('click', (e) => {

    modifyFontSize();

  });

  btnLetterSpacing.addEventListener('click', (e) => {

    modifyLetterSpacing();

  });

  btnToggleNarateur.addEventListener('click', (e) => {

    toggleNarateur();

  });

});
