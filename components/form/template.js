/**
* @Author: deepak
* @Date:   2017-01-08T15:14:14+11:00
* @Last modified by:   deepak
* @Last modified time: 2017-01-14T19:46:39+11:00
*/





class MyForm extends HTMLElement{
  constructor(){
    super();
  }

  static get observedAttributes() { return ['fname']; }

  connectedCallback(){
    var shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `<form id="formHolder">
      <style>
      .fname{
        width:200px;
        height:30px;
        font-size:var(--main-font-size);
      }
      .colorRed{
        color:red;
      }
      </style>
      <h1>this is formholder</h1>
      <input class="fname colorRed" type="text" placeholder="fname type here"/>
      <input class="lastname" type="text" placeholder="lname type here"/>
    </form>`;
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr == 'fname') {
      this.textContent = `Hello, ${newValue}`;
    }
  }

  fname(){
    return this.fname;
  }
}


customElements.define('x-form', MyForm);


var mf = new MyForm();
