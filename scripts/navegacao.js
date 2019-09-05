import Rotas from './rotas.js'
import Utils from './utils.js';

const obterIndiceDaPagina = () => Object.keys(Rotas).findIndex( x => x === Utils.getParsedUrl());
const obterNomePaginaPeloIndice = ( indice ) => Object.keys(Rotas)[indice];

const irParaProximaPagina = () => {    

    const proximaPagina = obterEmRelacao(1);

    // se não existe proxima pagina. Não faz nada
    if (!!!proximaPagina)
        return;
    
    // navega para a proxima pagina;
    location.hash = proximaPagina;
        
}

const irParaPaginaAnterior = () => {
    
    const proximaPagina = obterEmRelacao(-1);

    // se não existe proxima pagina. Não faz nada
    if (!!!proximaPagina)
        return;
    
    // navega para a proxima pagina;
    location.hash = proximaPagina;
}

const obterEmRelacao = ( indice ) => {

    const 
        indiceProximaPagina = obterIndiceDaPagina() + indice
    ,   proximaPagina = obterNomePaginaPeloIndice(indiceProximaPagina);
 
    return proximaPagina;

}

const temProximaPagina = () => !!obterEmRelacao(1);
const temPaginaAnterior = () => !!obterEmRelacao(-1);

const Navegacao = {
    irParaProximaPagina    :irParaProximaPagina
    ,irParaPaginaAnterior  :irParaPaginaAnterior
    ,temProximaPagina      :temProximaPagina
    ,temPaginaAnterior     :temPaginaAnterior
}

export default Navegacao;

