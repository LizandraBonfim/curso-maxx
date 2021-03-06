import { glossario } from './glossario.js';
import Utils from '../../scripts/utils.js';
const view /** HTML */ = `
<H2>ESTRUTURA DE MERCADO DE SEGUROS</H2>
<br>
<P>O Sistema Nacional de Seguros Privados, instituído pelo Decreto-Lei n.º 73, de 1966, e alterado por legislações posteriores, tem a seguinte composição.</P>


<img src="Video/estrutura.png">

<ul>
<li ${Utils.htmlTooltip()}
title="${glossario.segurado}">Segurado </li>
<li ${Utils.htmlTooltip()}
title="${glossario.seguradora}">Seguradora </li>
<li ${Utils.htmlTooltip()}
title="${glossario.corretorDeSeguros}">Corretor de Seguros</li>
<li ${Utils.htmlTooltip()}
title="${glossario.preposto}">Preposto </li>
<li ${Utils.htmlTooltip()}
title="${glossario.beneficiario}">Beneficiário </li>
<li ${Utils.htmlTooltip()}
title="${glossario.estipulanteDoSeguro}">Estipulante de Seguro</li>
<li ${Utils.htmlTooltip()}
title="${glossario.cosseguro}">Cosseguro </li>
<li ${Utils.htmlTooltip()}
title="${glossario.ressegurador}">Ressegurador</li>
</ul>


`;
let Session_05 = {
    render: async () => view,
    after_render: async () => { }
}

export default Session_05;