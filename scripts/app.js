'use strict';

import Session_01 from '../paginas/sessao1/01.js';
import Session_02 from '../paginas/sessao1/02.js';
import Session_03 from '../paginas/sessao1/03.js';
import Session_04 from '../paginas/sessao1/04.js';
import Session_05 from '../paginas/sessao1/05.js';
import Session_06 from '../paginas/sessao1/06.js';
import Session_07 from '../paginas/sessao1/07.js';
import Session_08 from '../paginas/sessao1/08.js';
import Session_09 from '../paginas/sessao1/09.js';





import Utils from './utils.js';


// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/'             : Session_01
    , '/session_02'      : Session_02
    , '/session_03'      : Session_03
    , '/session_04'      : Session_04
    , '/session_05'      : Session_05
    , '/session_06'      : Session_06
    , '/session_07'      : Session_07
    , '/session_08'      : Session_08
    , '/session_09'      : Session_09



    // , '/p/:id'      : PostShow
    // , '/register'   : Register
};


// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

    console.log('carreguei');

    // Lazy load view element:
    //const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
    //const footer = null || document.getElementById('footer_container');
    
    // Render the Header and footer of the page
    //header.innerHTML = await Navbar.render();
    //await Navbar.after_render();
    //footer.innerHTML = await Bottombar.render();
    //await Bottombar.after_render();


    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    console.log(routes[parsedURL])
    
    
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
  
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
