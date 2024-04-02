let image1=document.getElementById('header');
image1.style.position='absolute';
image1.style.bottom='0';
image1.style.left='0';


let image2=document.createElement('img');
image2.src='dom.jpg';
image2.alt='hello..it rains over here:';
image2.style.position='absolute';
image2.style.top='0';
image2.style.right='0';

document.body.appendChild(image2);

let nav=document.getElementById("navigation");
nav.style.position='absolute';
nav.style.top='50%';
nav.style.left='50%';
let bullet=document.querySelector('ul');
bullet.style.listStyleType='circle';

