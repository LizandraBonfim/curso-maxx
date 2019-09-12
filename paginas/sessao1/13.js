import { glossario } from './glossario.js';
import Utils from '../../scripts/utils.js';
const view /** HTML */ = `


<br><h1>O que é prêmio de seguro?</h1><br>
<p>É a soma em dinheiro paga pelo segurado ao segurador para que este assuma a responsabilidade de indenizá-lo por determinado risco de perda. </p>
<p>O conjunto de prêmios pagos pelos segurados formam as provisões ou reservas que constituem os recursos que as seguradoras usam para pagar as indenizações. </p>
<p>A palavra vem do latim “praemium”, junção de “prae”, recompensa, com o verbo “emere”, obter. </p>


<p class="text-box animated infinite fadeIn slow">Atenção: da definição acima, decorre que “prêmio” no mercado de seguros nada tem a ver com outros significados da palavra como quantia em dinheiro ou bens paga aos vencedores de concurso ou loteria, honraria atribuída a pessoa que se destacou por mérito próprio ou compensação recebida por serviço prestado. </p>



`;
let Session_13 = {
    render: async () => view,
    after_render: async () => { }
}

export default Session_13;
