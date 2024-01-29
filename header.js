class Header extends HTMLElement {
    constructor() {
      super();
    }
  

    connectedCallback() {
    this.innerHTML = `
    <link href="stylesheet.css" rel="stylesheet">
      <header>
    <img src="https://lh3.googleusercontent.com/pw/ABLVV86b6jxXS45SCYu5zCRQTGGbNh20_SmgzW6bnXXQ0s-E0iHFfm7gV9JxbhOFKLSed2QTWByay1skwwNcuSPrCqyhHx5mEo7ntfOMTpAHX1wWZiOIlkOB=w1920-h1080" style="width: 90%;">
      </header>
    `;
    }
}


 
 


  customElements.define('header-component', Header);