const footerTemplate = document.createElement('template');

 footerTemplate.innerHTML = `
     <link href="stylesheet.css" rel="stylesheet">
     <footer>
     <small>
     Copyright &copy; 2020-2024 Jordan Allen. All Rights Reserved.
     <a href="https://altitudeaddict.com/pages/contactme/contact.html" style="text-decoration:none; color: black;"><u>Contact</u></a>
     </small>
     </footer>
     `;
 
 document.body.appendChild(footerTemplate.content); 


  