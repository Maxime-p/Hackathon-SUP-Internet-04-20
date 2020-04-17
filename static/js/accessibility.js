//////////////////////////////////////////////////////////
//                                                      //
//                   By Crocrodail <3                   //
//                                                      //
//////////////////////////////////////////////////////////
//                                                      //
//                        DOC                           //

//  highlightLink(status)           - boolean, optional arg
//  modifyFontSize(status)          - integer ( 1/2/3/4/5 ), optional arg
//  modifyLetterSpacing(status)     - float ( 1/.../5 ), optional arg

//                                                      //
//                                                      //
//////////////////////////////////////////////////////////

let isHightlight = sessionStorage.getItem("isHightlight") || false;
let fontSizeUp = sessionStorage.getItem("fontSizeUp") || 1;
let letterSpacing = sessionStorage.getItem("letterSpacing") || 1;


function highlightLink(status) {  // boolean
  isHightlight = status || isHightlight;
  if (status == false){isHightlight = false;}
  const links = document.querySelectorAll('a');
  links.forEach((item, i) => {
    if (!isHightlight){
      item.style.removeProperty('color');
      item.style.removeProperty('text-decoration');
      item.style.removeProperty('background-color');
    } else {
      item.style.textDecoration = "underline";
      item.style.backgroundColor = "black";
      item.style.color = "yellow";
    }
  });
  sessionStorage.setItem("isHightlight", isHightlight);
  isHightlight = !isHightlight;
}

function modifyFontSize(status) { // integer ( 1/2/3/4/5 )
  fontSizeUp = status || fontSizeUp;
  const links = document.querySelectorAll('*');
  links.forEach((item, i) => {
    if (fontSizeUp == 1) {
      item.style.removeProperty('font-size');
    } else{
      item.style.removeProperty('font-size');
      item.style.fontSize = `${parseFloat(getComputedStyle(item).getPropertyValue('font-size')) * '1.'+fontSizeUp}px`;
    }
  });
  sessionStorage.setItem("fontSizeUp", fontSizeUp);
  if (fontSizeUp >= 5) { fontSizeUp = 0; }
  fontSizeUp++;
}

function modifyLetterSpacing(status) { // float ( 1/.../5 )
  letterSpacing = status || letterSpacing;
  const links = document.querySelectorAll('*');
  links.forEach((item, i) => {
    if (letterSpacing == 1) {
      item.style.removeProperty('letter-spacing');
    } else{
      item.style.letterSpacing = `${letterSpacing*1.5}px`;
    }
  });
  sessionStorage.setItem("letterSpacing", letterSpacing);
  if (letterSpacing >= 5) { letterSpacing = 0;}
  letterSpacing++;
}
