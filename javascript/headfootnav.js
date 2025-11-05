const basePath = '/jordanallen213.github.io';
const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
    <header>
        <a href="https://altitudeaddict.com/">
            <img src="${basePath}/includes/photos/sitephotos/banner.jpg" style="width: 90%;" alt="peak 6148 seen from peak 5750 in the alaska range"
            fetchpriority="high">
        </a>  
    </header>
`;
document.body.prepend(headerTemplate.content);

const navTemplate = document.createElement('template');
navTemplate.innerHTML = `
<ul>
<li><a class="active" href="https://altitudeaddict.com/">Home</a></li>
<li><a href="https://altitudeaddict.com/pages/climbingtrips/climbingtriphome.html">Climbing Trips</a></li>
<li><a href="https://altitudeaddict.com/pages/skiing/skiinghome.html">Ski Trips</a></li>
<li><a href="https://altitudeaddict.com/pages/othertripreports/othertripreports.html">Other Trips</a></li>
<!--<li><a href="https://altitudeaddict.com/pages/flyfishing/flyfishinghome.html">Fly Fishing</a></li>-->
<li><a href="https://altitudeaddict.com/pages/usefullinks/usefullinks.html">Useful Links</a></li>
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