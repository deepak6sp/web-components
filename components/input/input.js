/**
* @Author: deepak
* @Date:   2017-01-26T21:07:13+11:00
* @Last modified by:   deepak
* @Last modified time: 2017-01-26T22:17:28+11:00
*/

import css from "./input.css";
console.log(css);
// Create a class for the element
class XInput extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    var shadow = this.attachShadow({mode: 'open'});

    var link  = document.createElement('style');
    link.innerHTML = "@import 'input.css'";

    shadow.appendChild(link);
    // Create a standard img element and set it's attributes.
    var input = document.createElement('input');
    input.classList.add("text");
    shadow.appendChild(input);



  }
}

// Define the new element
customElements.define('x-input', XInput);
