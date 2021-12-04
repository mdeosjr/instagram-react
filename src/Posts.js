import Post from './Post';

export default function Posts() {
    const infoPost = [
        {topoImagem:"assets/img/meowed.svg", topoNome:"meowed", conteudoImagem:"assets/img/gato-telefone.svg", fundoImagem:"assets/img/respondeai.svg", fundoNome:"respondeai", fundoCurtidas:"outras 101.523 pessoas"},
        {topoImagem:"assets/img/barked.svg", topoNome:"barked", conteudoImagem:"assets/img/dog.svg", fundoImagem:"assets/img/adorable_animals.svg", fundoNome:"adorable_animals", fundoCurtidas:"outras 99.159 pessoas"}
    ]

    return (
        <div class="posts">
            {infoPost.map(infoPost => <Post topoImagem={infoPost.topoImagem} topoNome={infoPost.topoNome} conteudoImagem={infoPost.conteudoImagem} fundoImagem={infoPost.fundoImagem} fundoNome={infoPost.fundoNome} fundoCurtidas={infoPost.fundoCurtidas}/>)}
        </div>
    )
}