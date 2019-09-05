const view = `
<h1>FUNDAMENTOS DO SEGURO</h1>

      <ul>
            <li class="cursor-dedinho" 
                data-toggle="popover" 
                title="GLOSSÁRIO"                 
                data-content="Aqui vai algum tipo de conteúdo. Muito da hora, né?!" 
            >Risco (GLOSSÁRIO) </li>

            <li class="cursor-dedinho" 
                data-toggle="popover" 
                title="GLOSSÁRIO"                 
                data-content="Aqui vai algum tipo de conteúdo. Muito da hora, né?!" 
            >Personagens do Seguro</li>

            <li>Gerenciar o risco</li>
            <li>O que é prêmio de seguro?</li>
            <li>Como funcionam os seguros?</li>
            <li>Riscos seguráveis e não seguráveis</li>
            <li>Importância social e econômica do seguro</li>
            
      </ul>
      <h2>RISCO</h2>
      <img src="http://www.tudosobreseguros.org.br/wp-content/uploads/2017/05/TSS_Home_Estar-Seguro_Fundamentos_Risco.jpg">
      <p>A vida é cheia de riscos! A rigor, o ser humano acorda pela manhã e não sabe como estará ao final do dia.</p>

      <p>No ditado popular, quem arrisca, petisca. Contudo, em muitos casos, ocorre o inverso: o risco causa perdas, de vidas ou de propriedades, cujo impacto financeiro é negativo. Assim, estritamente falando, risco é um evento ou condição incerta, isto é, que pode ou não ocorrer no futuro, e cuja ocorrência tem um efeito negativo e que pode ser expresso em termos monetários.</p>
<p>Esse evento pode ser totalmente incerto, como a queda de um raio, ou certo, mas acontecendo em data incerta, como a morte. O impacto financeiro de um sinistro (GLOSSÁRIO) pode atingir milhões de reais e levar a empresa que não se precaveu à falência, ou o indivíduo a perder parte substancial de um patrimônio que lhe exigiu anos para acumular. É nesse momento que o seguro se torna importante.</p>

<H2>ESTRUTURA DE MERCADO DE SEGUROS</H2>
<P>O Sistema Nacional de Seguros Privados, instituído pelo Decreto-Lei n.º 73, de 1966, e alterado por legislações posteriores, tem a seguinte composição.</P>

<ul>
    <li>Segurado (GLOSSÁRIO)</li>
    <li>Seguradora (GLOSSÁRIO)</li>
    <li>Corretor de Seguros (GLOSSÁRIO)</li>
    <li>Preposto (GLOSSÁRIO)</li>
    <li>Beneficiário (GLOSSÁRIO)</li>
    <li>Estipulante de Seguro (GLOSSÁRIO)</li>
    <li>Cosseguro (GLOSSÁRIO)</li>
    <li>Ressegurador (GLOSSÁRIO)</li>
</ul>

<p>Além das instituições que compõe o Sistema Nacional de Seguros Privados, cabe destacar outras importantes entidades que integram o mercado de seguros, previdência complementar aberta e capitalização:</p>

<ul>
    <li>Conselho Nacional de Seguros Privados – CNSP (GLOSSÁRIO)</li>
    <li>Superintendência de Seguros Privados – SUSEP (GLOSSÁRIO)</li>
    <li>IRB Brasil Resseguros S/A – IRB-Brasil Re (GLOSSÁRIO)</li>
    <li>Agência Nacional de Saúde Suplementar – ANS (GLOSSÁRIO)</li>
</ul>

<p>Partes do Seguro:</p>

<ul>
        <li>Cotação (GLOSSÁRIO)</li>
        <li>Proposta (GLOSSÁRIO)</li>
        <li>Apólice (GLOSSÁRIO)</li>
        <li>Endosso (GLOSSÁRIO)</li>
        <li>Inspeção de Risco / Vistoria Prévia (GLOSSÁRIO)</li>
        <li>Vistoria de Monitoramento (GLOSSÁRIO)</li>
        <li>Vistoria de Sinistro (GLOSSÁRIO)</li>
        <li>LMI / IS (GLOSSÁRIO)</li>
        <li>Cobertura (GLOSSÁRIO)</li>
        <li>Ajuste de Reserva (GLOSSÁRIO)</li>
        <li>Local de Risco (GLOSSÁRIO)</li>
        <li>Vigência (GLOSSÁRIO)</li>
        <li>Prêmio (GLOSSÁRIO)</li>
        <li>Sindicância (GLOSSÁRIO)</li>
        
</ul>
`;


let Session_03 = {
    render: async () => view,
    after_render: async () => { }
}

export default Session_03;