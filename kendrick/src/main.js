import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

document.querySelector("#firstpart").innerHTML = `
  <div id="firstpart" class="firstpart">

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
           He is regarded as one of the most skillful and successfull hip hop artists<br> of his generation, with various media outlets<br> branding him the ``new king of hip hop'</p>
        
    </div>
`;

setupCounter(document.querySelector('#counter'))
