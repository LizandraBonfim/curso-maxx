'use strict';

import Utils from './utils.js';
import Rotas from './rotas.js'
import Navegacao from './navegacao.js'

const botaoProximaPagina = document.getElementById("btnProximaPagina");
const botaoPaginaAnterior = document.getElementById("btnPaginaAnterior");

const registrarComportamentoDosBotoes = () => {

    botaoProximaPagina
        .onclick = Navegacao.irParaProximaPagina;

    botaoPaginaAnterior
        .onclick = Navegacao.irParaPaginaAnterior;
}

const mostrarOuEsconderBotao = () => {

    if (!Navegacao.temProximaPagina())
        btnProximaPagina.style.visibility = 'hidden';
    else
        btnProximaPagina.style.visibility = 'visible';


    if (!Navegacao.temPaginaAnterior()) 
        botaoPaginaAnterior.style.visibility = 'hidden';
    else
        botaoPaginaAnterior.style.visibility = 'visible';
    

}

// The router code. Takes a URL, checks against the list of supported 
// routes and then renders the corresponding content page.
const router = async () => {

    mostrarOuEsconderBotao();

    // Lazy load view element:    
    const content = null || document.getElementById('page_container');

    let parsedURL = Utils.getParsedUrl();

    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = Rotas[parsedURL] ? Rotas[parsedURL] : Error404;
    content.innerHTML = await page.render();
    await page.after_render();

}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
window.addEventListener('load', registrarComportamentoDosBotoes);

