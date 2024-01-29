const template = document.createElement('template');

template.innerHTML = `
<link href="stylesheet.css" rel="stylesheet">
<ul>
<li><a class="active" href="https://jordanallen213.github.io/">Home</a></li>
<li><a href="https://jordanallen213.github.io/pages/bydate.html">Climbing Trips</a></li>
<li><a href="https://jordanallen213.github.io/pages/backpacking.html">Backpacking Trips</a></li>
<li><a href="https://jordanallen213.github.io/pages/rivertrips.html">River Trips</a></li>
<li style="float:right"><a class="active" href="https://jordanallen213.github.io/pages/contact.html">Contact Me</a></li>
</ul>
`;

document.querySelector('h1').appendChild(template.content);