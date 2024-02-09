// Function to get the correct base path based on the current page
const getBasePath = () => {
    const currentUrl = window.location.href;
    const baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));

    // Check if the page is in the root or a subdirectory
    const subdirectory = '/pages/'; // Adjust this based on your project structure
    const isRoot = currentUrl.endsWith('/index.html');

    if (isRoot) {
        return '';
    } else {
        const subdirectoryIndex = baseUrl.lastIndexOf(subdirectory);
        return subdirectoryIndex !== -1 ? baseUrl.substring(0, subdirectoryIndex) : baseUrl;
    }
};

const basePath = '/jordanallen213.github.io';
const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
    <header>
        <a href="https://altitudeaddict.com/">
            <img src="${basePath}/includes/photos/climbingphotos/eaglelake2023/butress.jpg" style="width: 90%;" alt="Description of your image">
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