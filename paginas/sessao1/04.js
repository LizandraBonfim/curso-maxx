import Utils from '../../scripts/utils.js';


const view /** HTML */ = `

<br><h2>Seguros no Brasil</h2>
<p>O Decreto n° 4.270, de 1901, e seu regulamento anexo, conhecido como “Regulamento Murtinho”, normatizaram o funcionamento das companhias de seguros já existentes ou que viessem a se organizar no território nacional. </p>
<p>O Regulamento Murtinho criou a “Superintendência Geral de Seguros”, subordinada diretamente ao Ministério da Fazenda, e concentrou todas as questões atinentes à fiscalização de seguros, antes distribuídas entre diferentes órgãos. </p>
<p>Cabia à Superintendência a fiscalização preventiva, exercida por ocasião do exame da documentação da sociedade que requeria autorização para funcionar, e a repressiva, sob a forma de inspeção direta, periódica, das sociedades. </p>
<p class="textos">Em 1916 foi sancionada a Lei n° 3.071, que promulgou o “Código Civil Brasileiro”, com um capítulo específico dedicado ao “contrato de seguro”. Os preceitos formulados pelo Código Civil e pelo Código Comercial passaram a compor, em conjunto, o que se chama Direito Privado do Seguro. Esses preceitos fixaram os princípios essenciais do contrato e disciplinaram os direitos e obrigações das partes, de modo a evitar e dirimir conflitos entre os interessados. Foram esses princípios fundamentais que garantiram o desenvolvimento da instituição do seguro. </p>


`;


let Session_04 = {
    render: async () => view,
    after_render: async () => { }
}

export default Session_04;