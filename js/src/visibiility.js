/*
https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
*/
function isVisible() {
  var hidden; 

  if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
    hidden = "hidden";
  } else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
  } else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
  }
 
  return document[hidden];
}

function bindVisibilityHandler(handler) {
  var visibilityChange; 
  if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
    visibilityChange = "visibilitychange";
  } else if (typeof document.msHidden !== "undefined") {
    visibilityChange = "msvisibilitychange";
  } else if (typeof document.webkitHidden !== "undefined") {
    visibilityChange = "webkitvisibilitychange";
  }
  
  document.addEventListener(visibilityChange, handler, false);
}

bindVisibilityHandler(function() {
  $('body').toggleClass('no-animation', isVisible());
});