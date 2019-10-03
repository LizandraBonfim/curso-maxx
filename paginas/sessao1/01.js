const view /** HTML */ = `


<h1>BÁSICO DE SEGUROS</h1> 
<h3>HISTÓRIA DO SEGURO</h3>
<img src="Video/camelo.jpg">
<br> 
<p>A história do seguro remonta a séculos antes de Cristo, quando as caravanas atravessavam os desertos do Oriente para comercializar camelos.  Como alguns animais sempre morriam no caminho, os cameleiros firmaram um acordo no qual pagariam para substituir o camelo de quem o perdesse.</p>
<br><img src="Video/navagacao.jpg">
<br>
<p>No ramo da navegação, também foi adotado o princípio de seguro entre os fenícios, cujos barcos navegavam através dos mares Egeu e Mediterrâneo. Existia, entre os navegadores, um acordo que garantia a quem perdesse um navio a construção de outro, pago pelos demais participantes da mesma viagem. </p>


`;


let Session_01 = {
    render: async () => view,
    after_render: async () => { }
}

export default Session_01;