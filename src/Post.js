export default function Post(props) {
    return (
        <div class="post">
            <Topo topoImagem={props.topoImagem} topoNome={props.topoNome}/>
            <div class="conteudo">
              <img src={props.conteudoImagem} alt=""/>
            </div>
            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>
              <Curtidas fundoImagem={props.fundoImagem} fundoNome={props.fundoNome} fundoCurtidas={props.fundoCurtidas}/>
            </div>
        </div>
    )
}

function Topo(props) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={props.topoImagem} alt=""/>
        {props.topoNome}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  )
}

function Curtidas(props) {
  return (
    <div class="curtidas">
      <img src={props.fundoImagem} alt=""/>
        <div class="texto">
          Curtido por <strong>{props.fundoNome}</strong> e <strong>{props.fundoCurtidas}</strong>
        </div>
    </div>
  )
}


