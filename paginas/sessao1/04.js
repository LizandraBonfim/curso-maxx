const view /** HTML */ = `

<br><br><h1>Gerenciar o risco</h1><br><br>
      <p>A inevitável realidade do risco levou a humanidade a procurar gerenciar o risco. Existem duas atitudes básicas, a saber:        </p>
      <br><br><h2>I. Evitar o risco</h2><br><br>
      <p>É o caso do indivíduo que, planejando viajar de carro, ao observar os pneus gastos do seu automóvel, desiste de viajar. Reduzir o Risco no caso anterior, o indivíduo viaja, mas a uma velocidade baixa de modo a evitar ter de frear bruscamente e arriscar uma derrapagem perigosa.</p>

      <br><br><h2>II. Correr o risco</h2><br><br>
      <p>O indivíduo que decide correr o risco tem, por sua vez, três possibilidades de gerenciá-lo:</p>

      <p>a) Autosseguro: é o método pelo qual o indivíduo separa ou acumula um montante em dinheiro para compensar determinada perda potencial que pode sofrer no futuro. O autosseguro é um método pouco efetivo, pois a maioria das pessoas não ganha o suficiente para acumular, na quantidade e no tempo necessários, os montantes requeridos. Assim, acaba sendo um eufemismo para designar os indivíduos que não estão segurados. </p>
<p>b) Mutualismo: é divisão das perdas entre os interessados. Historicamente, esse foi o começo do seguro: navegadores se reuniam e estimavam as perdas anuais no patrimônio conjunto (embarcações e suas cargas). Então, repartiam essa perda estimada entre eles, segundo a participação de cada um no patrimônio total. Atualmente, o mutualismo ainda é utilizado pelas seguradoras em alguns países, mas pouco usado pelos consumidores. Estes optam por não incorrer nos elevados custos de administração da modalidade, que exige conhecimento especializado. </p>
<p>c) Seguro: é a opção moderna e mais usada de gerenciamento do risco. Envolve a transferência do risco de perda de uma entidade (empresa ou indivíduo) para outra entidade (seguradora) que assume os riscos e recebe em troca um prêmio (GLOSSÁRIO). O conjunto dos prêmios de vários riscos, muitos sem sinistro, permite às seguradoras formar reservas para pagar os sinistros. </p>
<p>O seguro envolve, ainda, a agregação do risco e divisão das perdas (ou mutualismo), pois as seguradoras agrupam riscos semelhantes em carteiras (GLOSSÁRIO) distintas, de modo a melhor estimar as respectivas perdas e prêmios de seguros. O risco é transferido, pois a seguradora tem de arcar com as indenizações referentes a determinada carteira, mesmo quando a soma dos prêmios recolhidos for inferior ao valor das indenizações. Se esse prejuízo ocorrer continuamente, a seguradora não está sendo bem conduzida: falha na aceitação (GLOSSÁRIO) e no apreçamento dos riscos. </p>

<br><br><h1>O que é prêmio de seguro?</h1><br><br>
<p>É a soma em dinheiro paga pelo segurado ao segurador para que este assuma a responsabilidade de indenizá-lo por determinado risco de perda. </p>
<p>O conjunto de prêmios pagos pelos segurados formam as provisões ou reservas que constituem os recursos que as seguradoras usam para pagar as indenizações. </p>
<p>A palavra vem do latim “praemium”, junção de “prae”, recompensa, com o verbo “emere”, obter. </p>

<br><br>
<p class="text-box animated infinite fadeIn slow">Atenção: da definição acima, decorre que “prêmio” no mercado de seguros nada tem a ver com outros significados da palavra como quantia em dinheiro ou bens paga aos vencedores de concurso ou loteria, honraria atribuída a pessoa que se destacou por mérito próprio ou compensação recebida por serviço prestado. </p>

`;


let Session_04 = {
    render: async () => view,
    after_render: async () => { }
}

export default Session_04;