class Header extends HTMLElement {
    constructor() {
      super();
    }
  

    connectedCallback() {
    this.innerHTML = `
    <link href="stylesheet.css" rel="stylesheet">
      <header>
    <p>Jordan's Blog</p>
      </header>
    `;
    }
}


 
 


  customElements.define('header-component', Header);