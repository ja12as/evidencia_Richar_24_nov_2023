import { useState } from "react";

export const AgregarTarea = ({agregarTarea}) => {
    const [inputValue,  setInputValue]= useState('');
    const onInputChange = (event) => {
        setInputValue(event.target.value);
        console.log(inputValue);
    }
    const onSubmit= (event) =>{
        event.preventdefault();
        agregarTarea(inputValue);
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Add Task" value={inputValue} onChange={onInputChange} />  

            </form>
        </>
    )
}
