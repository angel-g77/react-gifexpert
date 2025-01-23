import { useState } from "react"

 
 export const AddCategory = ({onNewCategory}) => {
    
const [InputValue, setInputValue] = useState('Demon slayer ');    
    

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }


    const onSubmit = (event) =>{
        event.preventDefault();
        if(InputValue.trim().length <= 1 ) return;

        onNewCategory (InputValue.trim());
        setInputValue('');
    }
    return(
        <form onSubmit={(event)=> onSubmit(event)}>

        <input 
         type="text"
         placeholder="Buscar gift"      
        value={InputValue}
        onChange = {onInputChange} 
        />

        </form>
         
        
    )
 }