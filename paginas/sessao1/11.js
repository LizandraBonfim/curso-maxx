import { glossario } from './glossario.js';
import Utils from '../../scripts/utils.js';
const view /** HTML */ = `

<br>
<div class="textos">
<p><strong>a) Autosseguro: </strong> é o método pelo qual o indivíduo separa ou acumula um montante em dinheiro para compensar determinada perda potencial que pode sofrer no futuro. O autosseguro é um método pouco efetivo, pois a maioria das pessoas não ganha o suficiente para acumular, na quantidade e no tempo necessários, os montantes requeridos. Assim, acaba sendo um eufemismo para designar os indivíduos que não estão segurados. </p><br>

<p><strong>b) Mutualismo: </strong> é divisão das perdas entre os interessados. Historicamente, esse foi o começo do seguro: navegadores se reuniam e estimavam as perdas anuais no patrimônio conjunto (embarcações e suas cargas). Então, repartiam essa perda estimada entre eles, segundo a participação de cada um no patrimônio total. Atualmente, o mutualismo ainda é utilizado pelas seguradoras em alguns países, mas pouco usado pelos consumidores. Estes optam por não incorrer nos elevados custos de administração da modalidade, que exige conhecimento especializado. </p>
<br>
<p><strong>c) Seguro: </strong> é a opção moderna e mais usada de gerenciamento do risco. Envolve a transferência do risco de perda de uma entidade (empresa ou indivíduo) para outra entidade (seguradora) que assume os riscos e recebe em troca um  <spam ${Utils.htmlTooltip()}
title="${glossario.premio}"> prêmio </spam>. O conjunto dos prêmios de vários riscos, muitos sem sinistro, permite às seguradoras formar reservas para pagar os sinistros. </p>
</div>
`;
let Session_11 = {
    render: async () => view,
    after_render: async () => { }
}

export default Session_11;
