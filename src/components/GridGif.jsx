import { UseFetchGifs } from "../hooks/UseFetchGifs";
import { GifItem } from "./GifItem";

export const GridGif = ({category}) => {

const {images, isLoading} = UseFetchGifs(category);

 return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {isLoading && <h2>Cargando...</h2>}

                { images.map( (images) =>(
                    <GifItem key={images.id}
                    {...images}
                    />
                ))}
            </div>
            
        </>
    )
}
