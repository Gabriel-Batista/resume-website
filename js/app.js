/*
*  strict mode helps us avoid some bad code practices such as:
*  ensuring we cannot use undeclared variables,
*  automatically create global variables,
*  or make improper assignments
*/
"use strict";


// Display contact page via JS HTML replacement & change active link
function getInTouch() {
  var el = document.getElementById('content');

  var newEl = document.createElement('div');
  newEl.setAttribute("id", "content");
  newEl.innerHTML = '<div class="jumbotron">' +
    '<h2 class="instagram-link">Instagram - @gBatista</h2>' +
    '<h2 class="twitter-link">Twitter - @gBatista</h2>' +
    '<h2 class="gmail-link">gBatista@gmail.com</h2>'
  '</div>';

  el.parentNode.replaceChild(newEl, el);

  var activeLink = document.getElementsByClassName("active");
  var newActiveLink = document.getElementById('contact-link');

  activeLink[0].setAttribute("class", "");
  newActiveLink.setAttribute("class", "active")
}
