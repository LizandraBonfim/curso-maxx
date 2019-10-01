import { glossario } from './glossario.js';
import Utils from '../../scripts/utils.js';
const view /** HTML */ = `

<br><h1>FUNDAMENTOS DO SEGURO</h1>

<ul>
<li ${Utils.htmlTooltip()}
title="${glossario.risco}">Risco </li>

<li>Gerenciar o risco</li>
<li>O que é prêmio de seguro?   </li>
<li>Como funcionam os seguros?</li>
<li>Riscos seguráveis e não seguráveis</li>
<li>Importância social e econômica do seguro</li>
</ul>


`;

let Session_08 = {
    render: async () => view,
    after_render: async () => { }
}
export default Session_08;