const template = document.createElement('template');

template.innerHTML = `
<link href="stylesheet.css" rel="stylesheet">
<ul>
<li><a class="active" href="https://jordanallen213.github.io/">Home</a></li>
<li><a href="https://jordanallen213.github.io/pages/climbingtrips/climbingtriphome.html">Climbing Trips</a></li>
<li><a href="https://jordanallen213.github.io/pages/othertripreports/othertripreports.html">Other Trip Reports</a></li>
<li><a href="https://jordanallen213.github.io/pages/forsale/forsale.html">Gear For Sale</a></li>
<li style="float:right"><a class="active" href="https://jordanallen213.github.io/pages/contactme/contact.html">Contact Me</a></li>
</ul>
`;

document.querySelector('header-component').appendChild(template.content); 