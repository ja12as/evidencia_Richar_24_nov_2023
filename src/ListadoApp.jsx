import { useState } from "react";
import { AgregarTarea } from "./components/AgregarTarea";

const Item = ({nombre, visto}) => {
    return(
        <li>
            {nombre}
            {/*operador terciario*/}
            {visto ? "✅":"❌"}
        </li>
    );
}
export const ListadoApp = () => {
    const addTask = ()=> {
        setArreglo ([...arreglo, {nombre:"", visto:false}]);
        console.log(arreglo);
    }
    let  listadoSecciones = [
        { id: 0, nombre: 'DOCUMENTACION', visto: true },
        { id: 1,nombre: 'ANALISIS', visto: false},
        { id: 2,nombre: 'LOGICA', visto: false},
        { id: 3,nombre: 'DESARROLLO', visto: false},
        { id: 4,nombre: 'UML', visto: true },
        { id: 5,nombre: 'MER', visto: false},
        { id: 6,nombre: 'API', visto: true },
        
    ];
    const[arreglo, setArreglo]= useState(listadoSecciones);
    console.log(arreglo);

    const onAgregarTarea = (val)=>{
        if (val < 1)return;
        const envio = {
            id: arreglo.length,
            nombre:val,
            visto:false
        };
        setArreglo([...arreglo, envio])
    }
    return (
        <>
        <h1>Listado de tarea</h1>
        <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
        <ol>
            {arreglo.map((item)=> (
                <Item key={item.id} nombre={item.nombre} visto={item.visto}/>
            ))}
        </ol>
        {/*  <ol>
            <Item nombre="DOCUMENTACION" visto={true}></Item>
        </ol> */}
        <button onClick={() => addTask()}>Agregar Tarea</button>
        </>
        
    )
}
