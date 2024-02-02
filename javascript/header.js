class Header extends HTMLElement {
    constructor() {
      super();
    }
  

    connectedCallback() {
    this.innerHTML = `
    <link href="stylesheet.css" rel="stylesheet">
      <header>
      <a href="https://altitudeaddict.com/">
    <img src="https://lh3.googleusercontent.com/pw/ABLVV86_pdC4kgBiA1VKXO8fQwCQH45JvPTnMXPzpOmbOaAPhkEFu7_Ey1WXKJ1uEu_TekJwn_XAUpKoSm8hRzCdoRC0Cid5oqtnPXlS9ylju4cRRo12voM6=w1920-h1080" style="width: 90%;">
    </a>  
    </header>
    `;
    }
}


 
 


  customElements.define('header-component', Header);