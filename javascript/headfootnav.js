const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<header>
<a href="https://altitudeaddict.com/">
<img src="https://lh3.googleusercontent.com/pw/ABLVV86_pdC4kgBiA1VKXO8fQwCQH45JvPTnMXPzpOmbOaAPhkEFu7_Ey1WXKJ1uEu_TekJwn_XAUpKoSm8hRzCdoRC0Cid5oqtnPXlS9ylju4cRRo12voM6=w1920-h1080" style="width: 90%;" alt="peak 6148 alaska seen from peak 5750">
</a>  
</header>
`;
document.body.prepend(headerTemplate.content); 

const navTemplate = document.createElement('template');
navTemplate.innerHTML = `
<ul>
<li><a class="active" href="https://altitudeaddict.com/">Home</a></li>
<li><a href="https://altitudeaddict.com/pages/climbingtrips/climbingtriphome.html">Climbing Trips</a></li>
<li><a href="https://altitudeaddict.com/pages/othertripreports/othertripreports.html">Other Trip Reports</a></li>
<li><a href="https://altitudeaddict.com/pages/forsale/forsale.html">Gear For Sale</a></li>
<li style="float:right"><a class="active" href="https://altitudeaddict.com/pages/contactme/contact.html">Contact</a></li>
</ul>
`;
document.querySelector('header').appendChild(navTemplate.content); 

const footerTemplate = document.createElement('template');
 footerTemplate.innerHTML = `
     <footer>
     <small>
     Copyright &copy; 2020-2024 Jordan Allen. All Rights Reserved.
     <a href="https://altitudeaddict.com/pages/contactme/contact.html" style="text-decoration:none; color: black;"><u>Contact</u></a>
     </small>
     </footer>
     `;
 document.body.appendChild(footerTemplate.content); 