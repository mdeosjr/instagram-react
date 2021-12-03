import Story from './Story'

export default function Stories() {
    const story = [
        {imagem:"public/assets/img/9gag.svg", usuario: "9gag"},
        {imagem:"public/assets/img/meowed.svg", usuario: "9gag"},
        {imagem:"public/assets/img/barked.svg", usuario: "barked"},
        {imagem:"public/assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet"},
        {imagem:"public/assets/img/wawawicomics.svg", usuario: "wawawicomics"},
        {imagem:"public/assets/img/respondeai.svg", usuario: "respondeai"},
        {imagem:"public/assets/img/filomoderna.svg", usuario: "filomoderna"},
        {imagem:"public/assets/img/memeriagourmet.svg", usuario: "memeriagourmet"}                                              
    ];

    return (
        <div class="stories">
            {story.map(story => <Story imagem={story.imagem} usuario={story.usuario}/>)}
        </div>
    )
}