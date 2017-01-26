/**
* @Author: deepak
* @Date:   2017-01-14T19:46:57+11:00
* @Last modified by:   deepak
* @Last modified time: 2017-01-14T22:14:07+11:00
*/



class Name extends HTMLElement{

  constructor(){

    super();
    this._name = this.getAttribute('fname');
  }

  get name(){
    return this.getAttribute('fname');
  }

  set name(value){
    console.log(this.setAttribute('fname'));
    return this.setAttribute('fname',value);
  }


  fname(){
    var fnames = this.ffname();
    return this._name ;
  }



}

class Name2 extends Name {
  constructor(){
    super();
    console.log(this);
    this._name = "sam";

  }

  connectedCallback(){
    console.log(this._name);
  }

  ffname(){
    return this._name;
  }
}

//console.log(this.dataset.fname);
customElements.define('x-form', Name2);


//var n = new Name();
 // n.name;
//
// n.names = "deeasasasdpak";
//
// n.names;
//
