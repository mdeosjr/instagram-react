import Usuario from "./Usuario"
import Sugestao from './Sugestao'

export default function Sidebar() {
    const sugestoes = [
        {imagem:"./assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes"},
        {imagem:"./assets/img/chibirdart.svg", nome: "chibirdart"},
        {imagem:"./assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar"},
        {imagem:"./assets/img/adorable_animals.svg", nome: "adorable_animals"},
        {imagem:"./assets/img/smallcutecats.svg", nome: "smallcutecats"}
    ]
    
    return (
        <div class="sidebar">
            <div>
                <Usuario imagem="assets/img/catanacomics.svg" nick="catanacomics" nome="Catana"/>
                <div class="sugestoes">
                    <div class="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>
                    {sugestoes.map(sugestoes => <Sugestao imagem={sugestoes.imagem} nome={sugestoes.nome}/>)}
                </div>
                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                    Hashtags • Idioma
                </div>
                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>
    )
}