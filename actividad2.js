/*Cas 1.1: Cas 1.1: Fragment de codi on aparegui la sentència de creació
d'una variable amb l'operador var.
Línia 24
asigna el valor window a la variable creada win*/

var win = window;

/*Cas 1.2: Fragment de codi on aparegui la sentència condicional if
acompanyada del bloc else.
Linea 192 a 196
El condicional if apareix a la linia 192 i el el bloc else apareix a la linea 194
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/if...else
 */ 

  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(doc.createTextNode(rule));
  }

/*Cas 1.3: Fragment de codi on aparegui la sentència iterativa for i on es faci servir una variable per a iterar.
Linea 38 a 58
La sentencia que executa la iteració for apareix a la linia 44 amb la variable i que es crea a la linea 41 del codi 
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n
 */ 

function extend() {
  var obj, name, copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length;

  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
      for (name in obj) {
        copy = obj[name];

        if (target === copy) {
          continue;
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
} 
/*Cas 1.4: Fragment de codi on aparegui la sentència iterativa for...in.
Linea 652 a 663
L'event que executa la iteració for apareix a la linia 653
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n
 */ 

  function updateOptions (obj) {
    for (var key in obj) {
      if (!carousel) {
        if (key === 'slideBy') { obj[key] = 'page'; }
        if (key === 'edgePadding') { obj[key] = false; }
        if (key === 'autoHeight') { obj[key] = false; }
      }

      // update responsive options
      if (key === 'responsive') { updateOptions(obj[key]); }
    }
  }

/*Cas 1.5: Fragment de codi on aparegui la sentència de creació
d'una funció emprant l'operador function.
Linea 2422 a 2424
L'element function apareix a la linia 2422
https://developer.mozilla.org/en-US/docs/Glossary/Function
 */ 

  function getLowerCaseNodeName (el) {
    return el.nodeName.toLowerCase();
  }

/*Cas 1.6: Fragment de codi on aparegui la sentència de retorn d'un
resultat emprant l'operador return.
Linea 2422 a 2424
L'element return apareix a la linia 2423
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/return
 */ 

 function getLowerCaseNodeName (el) {
    return el.nodeName.toLowerCase();
  }

/*Cas 1.7: Fragment de codi on aparegui la sentència de captura
d'errors try acompanyada del bloc catch.
Linea 64 a 69
L'element return apareix a la linia 2423
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 */

  function setLocalStorage(storage, key, value, access) {
  if (access) {
    try { storage.setItem(key, value); } catch (e) {}
  }
  return value;
  }


/*Cas 1.8: Fragment de codi on aparegui la sentència iterativa while.
Linea 897 a 901
L'element while apareix a la linia 899
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/while
 */

  function getCurrentSlide () {
    var tem = carousel ? index - cloneCount : index;
    while (tem < 0) { tem += slideCount; }
    return tem%slideCount + 1;
  }

/* Cas 2.1 fragment tipus de dadas number,
línies de la 38 a 57.
La funció s'associa a l'esdeveniment a la la línia
41 amb "1" */

function extend() {
var obj, name, copy,
target = arguments[0] || {},
i = 1,
length = arguments.length;

for (; i < length; i++) {
if ((obj = arguments[i]) !== null) {
for (name in obj) {
copy = obj[name];

if (target === copy) {
continue;
} else if (copy !== undefined) {
target[name] = copy;
}
}
}
}
return target;
}

// 2.2 Tipo de dato boolean
// Se ejecutará "toogleAutoplay" si se cumple "autoUserPaused". En caso contrario no se ejecuta.
// Linia 2844 - 2852

function toggleAutoplay () {
if (animating) {
stopAutoplay();
autoplayUserPaused = true;
} else {
startAutoplay();
autoplayUserPaused = false;
}
}

/* 2.3 Fragment de codi on aparegui el tipus de dada array.
Lineas desde 427 a 431. El objeto array aparece en la linea 429 "['touchstart', 'touchmove']"
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
https://classroom.google.com/c/NDAzNzUyNDk0NTRa/m/NjAxNDUzNzAxODRa/details */


function addEvents(el, obj, preventScrolling) {
for (var prop in obj) {
var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? passiveOption : false;
el.addEventListener(prop, obj[prop], option);
}


//2.4 Tipo de dato STRING
//className obtiene y establece el valor del atributo class del elemento especificado
//En este caso dos datos string "tns-t-subp2" y "tns-t-ct"
// Linia 159-160

function percentageLayout() {
var doc = document,
body = getBody(),
docOverflow = setFakeBody(body),
wrapper = doc.createElement('div'),
outer = doc.createElement('div'),
str = '',
count = 70,
perPage = 3,
supported = false;

wrapper.className = "tns-t-subp2";
outer.className = "tns-t-ct";

for (var i = 0; i < count; i++) {
str += '<div></div>';
}

// Caso 2.5: Fragmento de código donde aparezca el tipo de dato object.
// En este ejemplo podemos ver un objeto típico con el nombre "KEYS". Tiene propiedades del 
// objeto ("ENTER", "SPACE", etc.)
// y las propiedades tienen valores ("13", "32") .
// Linia 547-552

KEYS = {
ENTER: 13,
SPACE: 32,
LEFT: 37,
RIGHT: 39
}
  
// 3.1 Operación suma
//En este caso (linea 2534) crea una variable "1", cuyo valor es la concatenación de los valores de number y items
// Linia 2533-2551

function animateSlide (number, classOut, classIn, isOut) {
var l = number + items;
if (!loop) { l = Math.min(l, slideCountNew); }

for (var i = number; i < l; i++) {
var item = slideItems[i];

// set item positions
if (!isOut) { item.style.left = (i - index) * 100 / items + '%'; }

if (animateDelay && TRANSITIONDELAY) {
item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
}
removeClass(item, classOut);
addClass(item, classIn);

if (isOut) { slideItemsOut.push(item); }
}
}

/*Caso 3.2: Fragmento de código donde aparezca la operación de concatenación
de strings.

Vemos el ejemplo de concatenación de string en la línea 127 a la 128.
Tenemos la variable vals donde visualizamos las tres concatenaciones "['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],"

En el fragmento de codigo entre las lineas 126 hasta la 138, 

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/concat
*/

try {
    var str = '(10px * 10)',
        vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
        val;
    for (var i = 0; i < 3; i++) {
      val = vals[i];
      div.style.width = val;
      if (div.offsetWidth === 100) { 
        result = val.replace(str, ''); 
        break;
      }
    }
  } catch (e) {}

/* Cas 3.3: fragment lógica OR,
línies de la 26 a 30.
La funció s'associa a l'esdeveniment a les línies
27,28,29 i 30 amb || */

var raf = win.requestAnimationFrame
|| win.webkitRequestAnimationFrame
|| win.mozRequestAnimationFrame
|| win.msRequestAnimationFrame
|| function(cb) { return setTimeout(cb, 16); };
  
// Caso 3.4: Fragmento de código donde aparezca la operación lògica de negación.
// Linea 664, se expresa negación con el símbolo ! y la expresión dentro de un condicional
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operadores_l%C3%B3gicos

 if (*!carousel*) { updateOptions(options); }


/* Cas 3.5 fragment asignació,
La funció s'associa a l'esdeveniment a la la línia
24 amb "=" */
var win = window;


/* Cas 3.6: fragment autoincrementació,
línies de la 330 a 336.
La funció s'associa a l'esdeveniment a la línia
332 amb ++ */

function arrayFromNodeList (nl) {
var arr = [];
for (var i = 0, l = nl.length; i < l; i++) {
arr.push(nl[i]);
}
return arr;
}

/* Cas 3.7: fragment ternaria,
línies de la 375 a 386.
La funció s'associa a l'esdeveniment a la línia
384 amb ? */

var doc = document,
body = getBody(),
docOverflow = setFakeBody(body),
el = doc.createElement('p'),
has3d,
cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';


/* Cas 3.8: fragment operació "major o igual que"
Línies de la 1943 a 1949.
La funció apareix a la línia 1946 amb l'element ">=" dins d'un condicional if  */

  function setBreakpointZone () {
    breakpointZone = 0;
    for (var bp in responsive) {
      bp = parseInt(bp); // convert string to number
      if (windowWidth >= bp) { breakpointZone = bp; }
    }
  }

/* 4.1: Fragmento de código donde aparezca el acceso a una propiedad de un objeto.
        Aqui estamos accediendo (linea 50) a la propiedad tndId del objeto Window, y además le estamos asignando un valor
        LINEA 49-54        
*/
function getSlideId() {
  var id = window.tnsId;
  window.tnsId = !id ? 1 : id + 1;
  
  return 'tns' + window.tnsId;
}

//4.2 Acceso a una posición de un array
//En este objeto, en la linea 790, accedemos a la posición "touchmove" del array, para asignarle la cualidad descrita al "touchEvents"
//Linias 788-793

touchEvents = {
'touchstart': onPanStart,
'touchmove': onPanMove,
'touchend': onPanEnd,
'touchcancel': onPanEnd
}
  
//4.3 Acceso a un elemento del DOM
//Em la linea 220 tenemos un "querySelector", el cual devuelve el primer elemento "head" de Document
//Lineas 206 a 223

function createStyleSheet (media) {
var style = document.createElement("style");
if (media) { style.setAttribute("media", media); }
document.querySelector('head').appendChild(style);
return style.sheet ? style.sheet : style.styleSheet;
}

/* 4.4: Fragmento de código donde aparezca el acceso a un objecte del BOM */
//https://www.w3schools.com/js/js_timing.asp
//LÍNEA 2366-2394

function updateGallerySlidePositions () {
var l = index + Math.min(slideCount, items);
for (var i = slideCountNew; i--;) {
var item = slideItems[i];

if (i >= index && i < l) {
// add transitions to visible slides when adjusting their positions
addClass(item, 'tns-moving');

item.style.left = (i - index) * 100 / items + '%';
addClass(item, animateIn);
removeClass(item, animateNormal);
} else if (item.style.left) {
item.style.left = '';
addClass(item, animateNormal);
removeClass(item, animateIn);
}

// remove outlet animation
removeClass(item, animateOut);
}

//ACCEDIENDO AL BOOM
//Ejecuta una función, después de esperar un número
//específico de milisegundos.
// removing '.tns-moving'
setTimeout(function() {
forEach(slideItems, function(el) {
removeClass(el, 'tns-moving');
});
}, 300);
}

//5.1 Us de Objeto Global del lenguaje
//En la fila 559, creamos la variable "uid" para asignarle la hora y fecha de hoy según la hora local.
//Filas 556-583

if (localStorageAccess) {
var browserInfo = navigator.userAgent;
var uid = new Date;

try {
tnsStorage = win.localStorage;
if (tnsStorage) {
tnsStorage.setItem(uid, uid);
localStorageAccess = tnsStorage.getItem(uid) == uid;
tnsStorage.removeItem(uid);
} else {
localStorageAccess = false;
}
if (!localStorageAccess) { tnsStorage = {}; }
} catch(e) {
localStorageAccess = false;
}

if (localStorageAccess) {
if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function(item) { tnsStorage.removeItem(item); });
}
localStorage['tnsApp'] = browserInfo;
}
}

//5.2 Uso objeto que representa la pestaña del navegador
//registra un evento a la ventana del navegador (window). El evento a escuchar es "test".
//Filas 417 a 424

try {
var opts = Object.defineProperty({}, 'passive', {
get: function() {
supportsPassive = true;
}
});
window.addEventListener("test", null, opts);
}
  
/* 6.1: Fragmento de código donde se modifique la página web (documento
HTML) cambiando una propiedad de una etiqueta (element) */

// LÍNEA 1475-1477
//Cambiamos la propiedad de .tns-nav

navContainer = outerWrapper.querySelector('.tns-nav');
navItems = navContainer.children;
}


/* 6.2: Fragmento de código donde se modifique la página web (document
HTML) utilitzant un mètode de la propietat d'una etiqueta (element) */
//LÍNEA 2815-2818
//Cambiamos las propiedades de la etiqueta "autoplayButton" cambiando su contenido HTML interno utilizando el metodo "innerHtml". Ponemos nuevas propiedades dento de "accion" y "txt"
function updateAutoplayButton (action, txt) {
setAttrs(autoplayButton, {'data-action': action});
autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
}


/* 6.3 Fragmento de código donde se modifique la página web
(documento HTML) eliminando una etiqueta (element) */

// LÍNEA 1906 -1911
//https://developer.mozilla.org/es/docs/Web/API/Element/removeAttribute


function unfreezeSlider() {
if (!frozen) { return; }

// Restaura el borde interno para navegadores modernos
if (edgePadding && CSSMQ) { innerWrapper.style.margin = ''; }

// Eliminar la clase tns-transparent para diapositivas clonadas //
if (cloneCount) {
var str = 'tns-transparent';
for (var i = cloneCount; i--;) {
if (carousel) { removeClass(slideItems[i], str); }
removeClass(slideItems[slideCountNew - i - 1], str);
}
}


/* 6.4 Fragmento de código donde se modifique la página web (documento
HTML) añadiendo una etiqueta (element) */

// LÍNEA 971-977

//Se ha creado un elemento div en una variable div
function getClientWidth (el) {
var div = doc.createElement('div'), rect, width;
el.appendChild(div);
rect = div.getBoundingClientRect();
width = rect.right - rect.left;
div.remove();
return width || getClientWidth(el.parentNode);
}
