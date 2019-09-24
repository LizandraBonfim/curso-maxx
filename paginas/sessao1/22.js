import { glossario } from './glossario.js';
import Utils from '../../scripts/utils.js';
const view /** HTML */ = `

<br><ul>
<li class"textos">Experiência suficiente (cálculo correto de probabilidades): pode ser que os eventos sejam independentes e que haja grande número de interessados no seguro, mas se houver grande imprevisibilidade, como nos casos de guerras ou atentados terroristas, o seguro não será feito, ou estes riscos serão excluídos da apólice, que é o mais provável. O mesmo acontece se não houver suficiente experiência pregressa, que permita aos <spam ${Utils.htmlTooltip()}
title="${glossario.atuaria}">atuários</spam>  o cálculo mais correto da probabilidade de perda.</li>
<br>
<li class"textos">Baixa incidência de <spam ${Utils.htmlTooltip()}
title="${glossario.riscoMoral}">“Risco moral”</spam> : é a possibilidade de uma pessoa ou empresa, depois de estar segura, comportar-se diferentemente do que faria se estivesse inteiramente exposta ao risco. O caso típico é o do indivíduo que fez seguro contra roubo de automóvel e, depois disso, tornou-se menos vigilante com seu carro. Ele age assim porque as consequências negativas do roubo não serão suas, mas de responsabilidade da companhia de seguros. O “risco moral” está relacionado à chamada assimetria de informação – as seguradoras têm dificuldade de saber de antemão como reagirão seus segurados depois de contratado o seguro. De certa maneira, o risco moral existe em maior ou menor grau em todas as carteiras de seguros, mas nos casos mais extremos, em que a mudança de comportamento é previsível, pode inviabilizar o seguro.</li>

</ul>



`;
let Session_22 = {
    render: async () => view,
    after_render: async () => { }
}

export default Session_22;
