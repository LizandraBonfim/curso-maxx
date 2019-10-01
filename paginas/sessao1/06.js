import { glossario } from './glossario.js';
import Utils from '../../scripts/utils.js';
const view /** HTML */ = `

<br><br>
<p>Além das instituições que compõe o Sistema Nacional de Seguros Privados, cabe destacar outras importantes entidades que integram o mercado de seguros, previdência complementar aberta e capitalização:</p>
<br>
<ul>
<li ${Utils.htmlTooltip()}
title="${glossario.cnsp}">Conselho Nacional de Seguros Privados – CNSP </li>
<li ${Utils.htmlTooltip()}
title="${glossario.susep}">Superintendência de Seguros Privados – SUSEP</li>
<li ${Utils.htmlTooltip()}
title="${glossario.IRB}">IRB Brasil Resseguros S/A – IRB-Brasil Re</li>
<li ${Utils.htmlTooltip()}
title="${glossario.ANS}">Agência Nacional de Saúde Suplementar – ANS</li>
</ul>



`;
let Session_06 = {
    render: async () => view,
    after_render: async () => { }
}

export default Session_06;
