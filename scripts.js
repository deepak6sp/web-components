/**
* @Author: deepak
* @Date:   2017-01-06T23:09:56+11:00
* @Last modified by:   deepak
* @Last modified time: 2017-01-07T20:40:17+11:00
*/

/*
class MyForm extends HTMLElement{
  constructor() {
    super();
  }
  createdCallback(){
    let template = `
    <style>
      :host{
        --main-font-size : 30px;
      }
      .fname{
        width:200px;
        height:30px;
        font-size:var(--main-font-size);
      }
      .colorRed{
        color:red;
      }
    </style>
    <form id="form">
      <input class="fname colorRed" type="text" placeholder="fname type here"/>
    </form>`
    this.createShadowRoot().innerHTML = template;
  }

}

var form = document.registerElement("my-form", MyForm);
var myForm =  new form;
document.body.append(myForm);

//customElements.define('my-button', MyButton);
