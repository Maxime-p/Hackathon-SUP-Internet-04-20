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
//  toggleNarateur(status)          - boolean, optional arg

//                                                      //
//                                                      //
//////////////////////////////////////////////////////////

let isHightlight = sessionStorage.getItem("isHightlight") || false;
let fontSizeUp = sessionStorage.getItem("fontSizeUp") || 1;
let letterSpacing = sessionStorage.getItem("letterSpacing") || 1;
let narateur = false;


function highlightLink(status) {  // boolean
  isHightlight = status || isHightlight;
  if (status == false){isHightlight = false;}
  const links = document.querySelectorAll('a:not([passover])');
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
  const links = document.querySelectorAll('*:not([passover])');
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
  const links = document.querySelectorAll('*:not([passover])');
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

function toggleNarateur(status){
  narateur = status || !narateur;
  if (narateur){
    speak("Le narateur est activé sur ce site web !", null);
  } else {
    speak("Le narateur est desactivé sur ce site web !", null);
  }
}

var synth = window.speechSynthesis;
document.addEventListener('click', (e) => {
  if (narateur){
    e = e || window.event;
    if (e.target.tagName == "P" || e.target.tagName == "H1" || e.target.tagName == "H2" || e.target.tagName == "H3" || e.target.tagName == "H4" || e.target.tagName == "H5"){
      var target = e.target || e.srcElement,
      text = target.textContent || target.innerText;
      target.style.border = "yellow 3px solid";
      speak(text, target);
    }
  }
});

function speak(text, target){
  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    return;
  }
  if (text !== '') {
    var utterThis = new SpeechSynthesisUtterance(text);
    utterThis.onend = function (event) {
      console.log('SpeechSynthesisUtterance.onend');
      target.style.removeProperty('border');
    };
    utterThis.onerror = function (event) {
      console.error('SpeechSynthesisUtterance.onerror');
      target.style.removeProperty('border');
    };

    var voices = window.speechSynthesis.getVoices();
    for (const value of voices){
      if (value.lang == "fr-FR"){ //&& !value.name.includes("Microsoft") -- buger sur chrome :'(
        utterThis.voice = voices[voices.indexOf(value)];
        break;
      }
    }

   utterThis.pitch = 1;
   utterThis.rate = 1;
   synth.speak(utterThis);
  }
}
