import { glossario } from './glossario.js';
import Utils from '../../scripts/utils.js';
const view /** HTML */ = `

<br>
<img src="http://www.tudosobreseguros.org.br/wp-content/uploads/2017/05/TSS_Home_Estar-Seguro_Fundamentos_Risco-Seguraveis-e-nao-seguraveis.jpg">

 <p class="textos">Nenhuma seguradora vai se dispor a fazer seguro para esses riscos. Ao contrário, em todo o mundo, as seguradoras procuram excluir explicitamente das coberturas os danos resultantes desses eventos. Seja porque são de difícil previsão, seja porque podem ser muito afetados pelas ações do segurado, ou ainda, porque concentram fortemente os riscos. </p>
<p>Mais precisamente, as condições necessárias para que um risco seja segurável são as seguintes: </p>
<ul><ul>
<li>Grande número de eventos  <spam ${Utils.htmlTooltip()}
title="${glossario.leiDosGrandesNumeros}">(Lei dos Grandes Números)</spam> : Quanto maior o número de segurados, maior a estabilidade de resultados de sinistros que uma seguradora pode esperar.</li>
<br>
<li>Eventos independentes entre si (desconcentração de riscos):  Nenhuma seguradora formará uma carteira de seguro rural apenas numa região, ou de seguro de incêndio num mesmo prédio.</li>


</ul>
`;
let Session_19 = {
    render: async () => view,
    after_render: async () => { }
}

export default Session_19;
