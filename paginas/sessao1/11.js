import { glossario } from './glossario.js';
import Utils from '../../scripts/utils.js';
const view /** HTML */ = `
<br><h3>O que é apólice?</h3><br>
<p>Apólice é um documento emitido pela seguradora, que formaliza a aceitação do risco, objeto do contrato de seguro. A apólice formaliza a transferência do risco do segurado para a seguradora. </p>
<img src="http://www.tudosobreseguros.org.br/wp-content/uploads/2017/05/TSS_Home_Estar-Seguro_Fundamentos_O-que-e-apolice.jpg">
<p>Nela devem estar discriminadas todas as condições contratuais, o bem ou a pessoa segurada, as coberturas de risco e as garantias contratadas, os estipulantes e beneficiários, o valor do prêmio, o prazo do contrato e as exclusões – isto é, as situações em que a indenização não é devida –, entre outras informações. </p>

<p>A emissão da apólice não dá, necessariamente, início à cobertura do bem. O bem estará coberto (segurado) assim que o risco tiver sido aceito pela seguradora. 
<br>



`;
let Session_11 = {
    render: async () => view,
    after_render: async () => { }
}

export default Session_11;
