import './style.css'
import gsap from 'gsap';

let Firstpart = document.querySelector('#firstpart')

Firstpart.innerHTML = `
    <div class="firstlayer">
         <h2>negative.</h2>
         <div class="navbar">
           <a href="#">home</a>
           <a href="#">about us </a>
           <a href="#" class="playlist">playlist</a>
         </div>
    </div>

    <div class="firstparttext">
        <h1>Kendrick<br>Lamar</h1>
        <button type="button">explore</button>
    </div>

    <p class="info">Kendrick Lamar Duckworth is an American rapper, songwriter, and record producer.<br>
       He is regarded as one of the most skillful and successful hip hop artists<br> of his generation, with various media outlets<br> branding him the \`new king of hip hop\`</p>
`;

//adding GSAP animations
document.addEventListener('DOMContentLoaded',()=>{
  gsap.from(".firstparttext", {
    duration: 4,
    y: -50,
    opacity: 0,
    ease: "power1.out",
  });

  // the p text too
  gsap.from(".info", {
    duration: 4,
    y: -50,
    opacity: 0,
    ease: "power1.out",
  });

   gsap.from(".firstlayer", {
     duration: 4,
     y: -50,
     opacity: 0,
     ease: "power1.out",
   });

})




