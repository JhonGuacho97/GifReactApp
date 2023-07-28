import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

   const [categories, setCategories] = useState(['One Punch']);

   const addCategory = ( newAddCategory ) => {

    if(categories.includes(newAddCategory)) return;
    setCategories([newAddCategory , ...categories])

   }

    return (

        <>
            <h1>GifExperst</h1>
            <hr />
            <AddCategory newAddCategory={addCategory} />
            <ol>
                {
                    categories.map( category =>
                    (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>

    )
}
