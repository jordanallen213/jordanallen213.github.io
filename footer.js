//const template = document.createElement('template');

//template.innerHTML = `
//<link href="stylesheet.css" rel="stylesheet">
//<footer>
//<small>
//Copyright &copy; 2024 Jordan Allen. All Rights Reserved.
//</small>
//</footer>
//`;

//document.body.appendChild(template.content); 


class customfooter extends HTMLElement {
    constructor() {
      super();
    }
  

    connectedCallback() {
    this.innerHTML = `
    <link href="stylesheet.css" rel="stylesheet">
    <footer>
    <small>
    Copyright &copy; 2024 Jordan Allen. All Rights Reserved.
    </small>
    </footer>
    `;
    }
}

  customElements.define('footer-component', customfooter);