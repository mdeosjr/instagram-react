export default function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.imagem} alt=""/>
            </div>
            <div class="usuario">
                {props.usuario}
            </div> 
        </div>
    )
}