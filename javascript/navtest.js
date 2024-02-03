const navTemplate = document.createElement('template');

navTemplate.innerHTML = `
<link href="stylesheet.css" rel="stylesheet">
<ul>
<li><a class="active" href="https://altitudeaddict.com/">Home</a></li>
<li><a href="https://altitudeaddict.com/pages/climbingtrips/climbingtriphome.html">Climbing Trips</a></li>
<li><a href="https://altitudeaddict.com/pages/othertripreports/othertripreports.html">Other Trip Reports</a></li>
<li><a href="https://altitudeaddict.com/pages/forsale/forsale.html">Gear For Sale</a></li>
<li style="float:right"><a class="active" href="https://altitudeaddict.com/pages/contactme/contact.html">Contact</a></li>
</ul>
`;

document.querySelector('header').appendChild(navTemplate.content); 







const template = document.createElement('template');

template.innerHTML = `
<link href="stylesheet.css" rel="stylesheet">
<ul>
<li><a class="active" href="https://altitudeaddict.com/">Home</a></li>
<li><a href="https://altitudeaddict.com/pages/climbingtrips/climbingtriphome.html">Climbing Trips</a></li>
<li><a href="https://altitudeaddict.com/pages/othertripreports/othertripreports.html">Other Trip Reports</a></li>
<li><a href="https://altitudeaddict.com/pages/forsale/forsale.html">Gear For Sale</a></li>
<li style="float:right"><a class="active" href="https://altitudeaddict.com/pages/contactme/contact.html">Contact</a></li>
</ul>
`;

document.querySelector('header-component').appendChild(template.content); 

