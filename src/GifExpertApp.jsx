import { useState } from "react"
import swal from "sweetalert";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['one Punch']);

  const onAddCategory = (newCategory)=>{
    if(categories.includes(newCategory)){
      return swal('La categoria ya existe.!');
    } 
    setCategories([newCategory, ...categories]);
  }


  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
            //setCategories={ setCategories }
            onNewCategory={ onAddCategory }
        />

        {
          categories.map( category => 
            (
              <GifGrid 
                key={ category } 
                category={category} 
              />  
            ))
        }
          
     
    </>
    
  )
}
