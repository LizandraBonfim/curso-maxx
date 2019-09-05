const view /** HTML */ = `

<h1>Como funcionam os seguros?</h1> <br>
<p>O seguro é um contrato entre um indivíduo ou uma empresa (segurado) e uma seguradora. O segurado paga um preço chamado “prêmio” e a companhia, em troca, compromete-se pagar a eventual perda financeira correspondente, durante o período da apólice. </p>
<h3>O que é apólice?</h3><br>
<p>Apólice é um documento emitido pela seguradora, que formaliza a aceitação do risco, objeto do contrato de seguro. A apólice formaliza a transferência do risco do segurado para a seguradora. </p>
<p>Nela devem estar discriminadas todas as condições contratuais, o bem ou a pessoa segurada, as coberturas de risco e as garantias contratadas, os estipulantes e beneficiários, o valor do prêmio, o prazo do contrato e as exclusões – isto é, as situações em que a indenização não é devida –, entre outras informações. </p>
<img src="http://www.tudosobreseguros.org.br/wp-content/uploads/2017/05/TSS_Home_Estar-Seguro_Fundamentos_O-que-e-apolice.jpg">
<p>A emissão da apólice não dá, necessariamente, início à cobertura do bem. O bem estará coberto (segurado) assim que o risco tiver sido aceito pela seguradora. </p>
<p>Essa operação poderá resultar na emissão de um contrato de seguro ou certificado de cobertura. A apólice será enviada posteriormente. Ao receber a apólice, é importante que o segurado verifique se as condições ali contidas são as mesmas que informou ao corretor de seguros quando assinou o contrato. </p>
<p>A origem do termo vem do francês “police” e do italiano “polizza”, ambos tendo por origem o latim “pollicitatio” ou promessa, no caso, de pagar indenização por perda que teve como contrapartida o pagamento anterior de um prêmio. </p>
<h3>O princípio da boa-fé</h3><br>
<p>O seguro é um contrato inevitavelmente especulativo. A seguradora recebe as informações do segurado e, com base nelas, traça um perfil do risco e calcula a perda esperada e o prêmio. </p>
<p>Se o segurado omite informações que agravariam o risco, ameaçando de prejuízo a seguradora, ele falta com o princípio da boa-fé. O mesmo ocorre se a empresa, aproveitando-se do desconhecimento da maioria dos segurados a respeito das tecnicalidades do mercado, deliberadamente usa de terminologias vagas na apólice de modo a, por exemplo, esconder certas exclusões. </p>
<p>Nesses casos, a lei diz que o contrato é nulo. A lei impõe aos contratantes o dever de obedecer ao princípio da boa-fé, pois, na falta dele, o acúmulo de prejuízos de parte a parte levaria a suspeitas generalizadas e, no limite, à inviabilização do próprio mercado. </p>
<p>Note-se que esse princípio é aplicável a todos os contratos e transações. Ele proíbe o agente de esconder da outra parte o que sabe confidencialmente, para induzi-la a um negócio que não ocorreria ou ocorreria de modo diverso se essa parte tivesse acesso à informação sonegada. E vice-versa. </p>

`;


let Session_05 = {
    render: async () => view,
    after_render: async () => { }
}

export default Session_05;