document.addEventListener('DOMContentLoaded', () => {

   highlightLink(sessionStorage.getItem("isHightlight") || false);
   modifyFontSize(sessionStorage.getItem("fontSizeUp") || 1);
   modifyLetterSpacing(sessionStorage.getItem("letterSpacing") || 1);

});
