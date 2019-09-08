import { glossario } from './glossario.js';
import Utils from '../../scripts/utils.js';
const view = `
<h1>FUNDAMENTOS DO SEGURO</h1>
<br><br>

      <ul>
            <li ${Utils.htmlTooltip()}
            title="${glossario.cobertura}"
            >Risco  </li>

            <li ${Utils.htmlTooltip()}
            title="${glossario.cobertura}">Personagens do Seguro</li>

            <li>Gerenciar o risco</li>
            <li>O que é prêmio de seguro?</li>
            <li>Como funcionam os seguros?</li>
            <li>Riscos seguráveis e não seguráveis</li>
            <li>Importância social e econômica do seguro</li>
            
      </ul>
      <br><br>
      <h2>RISCO</h2>
      <br><br>
      <img src="http://www.tudosobreseguros.org.br/wp-content/uploads/2017/05/TSS_Home_Estar-Seguro_Fundamentos_Risco.jpg">
      <p>A vida é cheia de riscos! A rigor, o ser humano acorda pela manhã e não sabe como estará ao final do dia.</p>

      <p>No ditado popular, quem arrisca, petisca. Contudo, em muitos casos, ocorre o inverso: o risco causa perdas, de vidas ou de propriedades, cujo impacto financeiro é negativo. Assim, estritamente falando, risco é um evento ou condição incerta, isto é, que pode ou não ocorrer no futuro, e cuja ocorrência tem um efeito negativo e que pode ser expresso em termos monetários.</p>
<p>Esse evento pode ser totalmente incerto, como a queda de um raio, ou certo, mas acontecendo em data incerta, como a morte. O impacto financeiro de um sinistro (GLOSSÁRIO) pode atingir milhões de reais e levar a empresa que não se precaveu à falência, ou o indivíduo a perder parte substancial de um patrimônio que lhe exigiu anos para acumular. É nesse momento que o seguro se torna importante.</p>
<br><br>
<H2>ESTRUTURA DE MERCADO DE SEGUROS</H2>
<br><br>
<P>O Sistema Nacional de Seguros Privados, instituído pelo Decreto-Lei n.º 73, de 1966, e alterado por legislações posteriores, tem a seguinte composição.</P>

<ul>
    <li ${Utils.htmlTooltip()}
    title="${glossario.segurado}">Segurado </li>
    <li ${Utils.htmlTooltip()}
    title="${glossario.seguradora}">Seguradora </li>
    <li ${Utils.htmlTooltip()}
    title="${glossario.corretor}">Corretor de Seguros</li>
    <li ${Utils.htmlTooltip()}
    title="${glossario.preposto}">Preposto </li>
    <li ${Utils.htmlTooltip()}
    title="${glossario.beneficiario}">Beneficiário </li>
    <li ${Utils.htmlTooltip()}
    title="${glossario.estipulante}">Estipulante de Seguro</li>
    <li ${Utils.htmlTooltip()}
    title="${glossario.cosseguro}">Cosseguro </li>
    <li ${Utils.htmlTooltip()}
    title="${glossario.resseguro}">Ressegurador</li>
</ul>

<p>Além das instituições que compõe o Sistema Nacional de Seguros Privados, cabe destacar outras importantes entidades que integram o mercado de seguros, previdência complementar aberta e capitalização:</p>

<ul>
    <li ${Utils.htmlTooltip()}
    title="${glossario.CNSP}">Conselho Nacional de Seguros Privados – CNSP </li>
    <li ${Utils.htmlTooltip()}
    title="${glossario.SUSEP}">Superintendência de Seguros Privados – SUSEP</li>
    <li ${Utils.htmlTooltip()}
    title="${glossario.IRB}">IRB Brasil Resseguros S/A – IRB-Brasil Re</li>
    <li ${Utils.htmlTooltip()}
    title="${glossario.ANS}">Agência Nacional de Saúde Suplementar – ANS</li>
</ul>

<p>Partes do Seguro:</p>

<ul>
        <li ${Utils.htmlTooltip()}
        title="${glossario.cotacao}">Cotação </li>
        <li ${Utils.htmlTooltip()}
        title="${glossario.proposta}">Proposta </li>
        <li ${Utils.htmlTooltip()}
        title="${glossario.apolice}">Apólice </li>
        <li ${Utils.htmlTooltip()}
        title="${glossario.endosso}">Endosso </li>
        <li ${Utils.htmlTooltip()}
        title="${glossario.inspencaoRisco}">Inspeção de Risco / Vistoria Prévia </li>
        <li ${Utils.htmlTooltip()}
        title="${glossario.vistoriaMonitoramento}">Vistoria de Monitoramento </li>
        <li ${Utils.htmlTooltip()}
        title="${glossario.vistoriaSinistro}">Vistoria de Sinistro </li>
        <li ${Utils.htmlTooltip()}
        title="${glossario.lmi}">LMI / IS </li>
        <li ${Utils.htmlTooltip()}
        title="${glossario.cobertura}">Cobertura </li>
        <li ${Utils.htmlTooltip()}
        title="${glossario.ajusteReserva}">Ajuste de Reserva </li>
        <li ${Utils.htmlTooltip()}
        title="${glossario.localdeRisco}">Local de Risco </li>
        <li ${Utils.htmlTooltip()}
        title="${glossario.vigencia}">Vigência </li>
        <li ${Utils.htmlTooltip()}
        title="${glossario.premio}">Prêmio </li>
        <li ${Utils.htmlTooltip()}
        title="${glossario.sindicancia}">Sindicância</li>
        
</ul>
`;


let Session_03 = {
    render: async () => view,
    after_render: async () => { }
}

export default Session_03;