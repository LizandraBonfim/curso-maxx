import { glossario } from './glossario.js';
import Utils from '../../scripts/utils.js';


const view /** HTML */ = `
<h2> RISCOS </h2>
<img src="http://www.tudosobreseguros.org.br/wp-content/uploads/2017/05/TSS_Home_Estar-Seguro_Fundamentos_Risco.jpg">
<p>A vida é cheia de riscos! A rigor, o ser humano acorda pela manhã e não sabe como estará ao final do dia. </p>
<p>No ditado popular, quem arrisca, petisca. Contudo, em muitos casos, ocorre o inverso: o risco causa perdas, de vidas ou de propriedades, cujo impacto financeiro é negativo. Assim, estritamente falando, risco é um evento ou condição incerta, isto é, que pode ou não ocorrer no futuro, e cuja ocorrência tem um efeito negativo e que pode ser expresso em termos monetários. </p>
<p>Esse evento pode ser totalmente incerto, como a queda de um raio, ou certo, mas acontecendo em data incerta, como a morte. O impacto financeiro de um <spam ${Utils.htmlTooltip()} title="${glossario.sinistro}">sinistro</spam>  pode atingir milhões de reais e levar a empresa que não se precaveu à falência, ou o indivíduo a perder parte substancial de um patrimônio que lhe exigiu anos para acumular. É nesse momento que o seguro se torna importante. </p>


`;


let Session_06 = {
    render: async () => view,
    after_render: async () => { }
}

export default Session_06;