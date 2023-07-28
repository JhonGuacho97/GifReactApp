import { getGifs } from "../helpers/gifs";
import { useState, useEffect } from 'react';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImage  = await getGifs(category);
        setImages(newImage);
    }

    useEffect(() => {
        getImages();
    }, [category])

    return (
        <div>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map(({ id, title, url }) => (
                        <div key={id} className="card">
                            <img src={url} alt={title} />
                            <p>{title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
