import { glossario } from './glossario.js';
import Utils from '../../scripts/utils.js';
const view /** HTML */ = `

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


let Session_07 = {
    render: async () => view,
    after_render: async () => { }
}

export default Session_07;