import { useState } from "react"
import { AddCategory, GridGif} from "./components"

export const GifEpertApp = () => {

    const [categories, setCategories] = useState([])


    const onAddCatergory = (newCategory) =>{
        
        if(categories.includes(newCategory)) return;
        console.log(newCategory);
        setCategories([newCategory, ...categories])
    }
    
  return (
    <>
        <h1>Gif Expert</h1>
        
        <AddCategory 
            onNewCategory={onAddCatergory}
        />

            {
                categories.map((category) =>(
                       <GridGif 
                            key={category}
                            category={category}
                       />
                    )
                )
            }
    </>
  )
}
