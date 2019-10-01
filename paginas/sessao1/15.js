import { glossario } from './glossario.js';
import Utils from '../../scripts/utils.js';
const view /** HTML */ = `

<h3>II. Correr o risco?</h3>
<div class="textos">
O indivíduo que decide correr o risco tem, por sua vez, três possibilidades de gerenciá-lo:
<br><p>
<br>a) <strong>Autosseguro</strong>: é o método pelo qual o indivíduo separa ou acumula um montante em dinheiro para compensar determinada perda potencial que pode sofrer no futuro. O autosseguro é um método pouco efetivo, pois a maioria das pessoas não ganha o suficiente para acumular, na quantidade e no tempo necessários, os montantes requeridos.
<br><br>b) <strong>Mutualismo</strong>: é divisão das perdas entre os interessados. Historicamente, esse foi o começo do seguro: navegadores se reuniam e estimavam as perdas anuais no patrimônio conjunto (embarcações e suas cargas). Então, repartiam essa perda estimada entre eles, segundo a participação de cada um no patrimônio total.
<br><br>c) <strong>Seguro</strong>: é a opção moderna e mais usada de gerenciamento do risco. Envolve a transferência do risco de perda de uma entidade (empresa ou indivíduo) para outra entidade (seguradora) que assume os riscos e recebe em troca um prêmio (GLOSSÁRIO). O conjunto dos prêmios de vários riscos, muitos sem sinistro, permite às seguradoras formar reservas para pagar os sinistros.
<br><br>O seguro envolve, ainda, a agregação do risco e divisão das perdas (ou mutualismo), pois as seguradoras agrupam riscos semelhantes em carteiras (GLOSSÁRIO) distintas, de modo a melhor estimar as respectivas perdas e prêmios de seguros. O risco é transferido, pois a seguradora tem de arcar com as indenizações referentes a determinada carteira, mesmo quando a soma dos prêmios recolhidos for inferior ao valor das indenizações. Se esse prejuízo ocorrer continuamente, a seguradora não está sendo bem conduzida: falha na aceitação (GLOSSÁRIO) e no apreçamento dos riscos.
</div>
</p>

`;
let Session_15 = {
    render: async () => view,
    after_render: async () => { }
}

export default Session_15;
