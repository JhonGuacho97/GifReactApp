import {useState} from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

   const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

   const onAdd = () => {
         setCategories( [...categories, 'HunterXHunter'] );
    }

    return (

        <>
            <h1>GifExperst</h1>
            <hr />
            <AddCategory />
            <button onClick={onAdd}>Agregar</button>
            <ol>
                {
                    categories.map( category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>

    )
}
