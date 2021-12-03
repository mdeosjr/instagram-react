import Sidebar from './Sidebar'
import Stories from './Stories'
import Posts from './Posts'

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda"> 
                <Stories/>
                <Posts/>
            </div>
            <Sidebar/>
        </div>
    )
}