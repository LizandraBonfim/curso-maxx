import { glossario } from './glossario.js';
import Utils from '../../scripts/utils.js';
const view /** HTML */ = `

<br><p>O seguro envolve, ainda, a agregação do risco e divisão das perdas (ou mutualismo), pois as seguradoras agrupam riscos semelhantes em  <spam ${Utils.htmlTooltip()}
title="${glossario.carteira}"> carteiras</spam> distintas, de modo a melhor estimar as respectivas perdas e prêmios de seguros. O risco é transferido, pois a seguradora tem de arcar com as indenizações referentes a determinada carteira, mesmo quando a soma dos prêmios recolhidos for inferior ao valor das indenizações. Se esse prejuízo ocorrer continuamente, a seguradora não está sendo bem conduzida: falha na <spam ${Utils.htmlTooltip()}
title="${glossario.aceitacao}"> aceitação</spam> e no apreçamento dos riscos. </p>




`;
let Session_12 = {
    render: async () => view,
    after_render: async () => { }
}

export default Session_12;
