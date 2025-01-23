import { useState, useEffect} from "react";
import { AddCategory, GifGrid } from "./components/";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Demon slayer',]);

   const onAddCategory = (NewCategory) =>{
    if (categories.includes(NewCategory)) return;

    setCategories([NewCategory, ...categories])

   }

return (
    <>

    <h1>GiftExpertApp</h1>

   
   <AddCategory 
 
    onNewCategory = { event => onAddCategory(event)} 
   />

   
    
  
    {
    categories.map(( category) => (
 
    <GifGrid
     key={category}
     category={ category }
     />
        
    ))

    }


    
    </>
);

}