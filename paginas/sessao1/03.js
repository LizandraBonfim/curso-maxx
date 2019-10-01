import Utils from '../../scripts/utils.js';
const view = `

<br><h2>Seguros no Brasil</h2><br>
<p>A atividade seguradora no Brasil teve início com a abertura dos portos ao comércio internacional, em 1808. A primeira sociedade de seguros a funcionar no país foi a “Companhia de Seguros BOA-FÉ”, em 24 de fevereiro daquele ano, que tinha por objetivo operar no seguro marítimo. </p>
<img src="Video/ima.png">
<p>Com o advento da Lei n° 556, de 1850 (Código Comercial Brasileiro), houve o aparecimento de inúmeras seguradoras, que passaram a operar não só com o seguro marítimo, expressamente previsto na legislação, mas também com o seguro terrestre e o seguro de vida, este proibido antes por razões religiosas. </p>
<p>Por volta de 1862, surgem as primeiras sucursais de seguradoras sediadas no exterior. Ocorre que tais empresas transferiam para suas matrizes os prêmios cobrados, provocando indesejável evasão de divisas. Assim, visando a proteger os interesses econômicos do país, foi promulgada, em 1895, a Lei n° 294, determinando que suas reservas técnicas fossem constituídas e tivessem seus recursos aplicados no Brasil, para fazer frente aos riscos aqui assumidos. </p>

`;


let Session_03 = {
    render: async () => view,
    after_render: async () => { }
}

export default Session_03;