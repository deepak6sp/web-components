/**
* @Author: deepak
* @Date:   2017-01-08T15:14:14+11:00
* @Last modified by:   deepak
* @Last modified time: 2017-01-08T15:15:35+11:00
*/



var doc = document.currentScript.ownerDocument;
class MyForm extends HTMLElement{
  createdCallback(){
    var root = this.createShadowRoot();
    var template = doc.querySelector("#formHolder");
    var clone = document.importNode(template.content, true);
    root.appendChild(clone);
  }
}
var form = document.registerElement("my-form", MyForm);
var myForm =  new form;
document.body.append(myForm);
