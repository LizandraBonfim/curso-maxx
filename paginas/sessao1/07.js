const view /** HTML */ = `
<br>
<h2>Riscos seguráveis e não seguráveis</h2><br>

<p>Alguns riscos não seguráveis são importantes para a economia como um todo. Nesses casos, os governos costumam assumi-los, estabelecendo os chamados seguros sociais, de interesse geral. É o caso do seguro-desemprego e os sistemas estatais de previdência e assistência social. </p>
<p>No seguro-desemprego, observa-se concentração de riscos, porque o desemprego costuma evoluir em ondas periódicas que afetam grande número de trabalhadores ao mesmo tempo. </p>
<p>Nos sistemas de previdência e assistência social, o principal problema é a seleção adversa, ou seja, a maioria dos segurados constitui risco elevado e não suportaria prêmios fixados com parâmetros de mercado. </p>
<h3>Importância social e econômica do seguro</h3><br>
<p>Suponha que um segurado pague um prêmio de R$ 1.500,00 por uma apólice de seguro de automóveis contra roubo, colisão e danos a terceiros. </p>
<p>Se não acontecer o sinistro, o segurado não ficará triste por ter pago os R$ 1.500,00. Afinal, ele despendeu um valor relativamente pequeno que lhe permitiu se livrar de uma perda potencial grande. </p>
<p>De fato, a seguradora pode ter que pagar R$ 50.000,00 se houver uma colisão com perda total e, quem sabe, R$ 300 mil se da colisão resultar um ferimento traumático a terceiro. </p>
<p>O mesmo vale para outras situações de risco, como por exemplo, uma empresa que está realizando investimentos elevados e quer se precaver contra riscos de incêndio na nova planta. </p>
<p>Essa aritmética só é possível por que a seguradora sabe, de antemão, que apenas uma proporção do total de segurados será sinistrada e, portanto, demandará indenização. E, no processo do seguro, ganham tanto segurados quanto seguradoras. </p>
<p>Assim, a disponibilidade do seguro incentiva a economia, pois o consumidor segurado tem tranquilidade para adquirir bens de valor mais alto, e o empresário segurado, por sua vez, confiança para realizar investimentos que podem exigir recursos vultosos, seus e de terceiros. </p>
<p>Inversamente, sem seguro, é possível prever que diversas ações de consumo e investimento, principalmente as de maior valor e risco, não existiriam ou seriam em muito diminuídas, com prejuízos para a economia do pais. </p>
<h4>O que é e como são calculadas as reservas das seguradoras</h4>
<br>
<img src="http://www.tudosobreseguros.org.br/wp-content/uploads/2017/10/TSS_QUEMSOMOS_PROVIS%C3%95ES.jpg">
<br><br>
<h4>O que são reservas técnicas?</h4><br>
<p>As reservas técnicas, também chamadas de provisões técnicas são, simplificadamente, o quanto de dinheiro a seguradora precisa manter (reservar) em seu balanço de modo a arcar com os compromissos que deverá assumir com seus segurados. </p>
<p>O correto dimensionamento das provisões técnicas é de fundamental importância para a saúde financeira da seguradora. Se forem superdimensionadas, prejudicam a distribuição de lucros aos acionistas; se forem subdimensionadas, ameaçam a solvência das empresas. O atuário é o profissional responsável por seu cálculo. </p>

`;
let Session_07 = {
    render: async () => view,
    after_render: async () => { }
}

export default Session_07;