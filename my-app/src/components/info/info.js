import './info.css'
import MainList from '/workspaces/Artem/my-app/src/components/main/main.js'
import '../../content/imagesss/bmw_m8.jpg'
import { dataForList } from '/workspaces/Artem/my-app/src/content/mainData.js';

export default () =>{
    <section>
        <img src={bmw_m8.jpg} />
        <dl>
            {dataForList.map((item) => <MainList{...item} />)}
        </dl>

    </section>
}