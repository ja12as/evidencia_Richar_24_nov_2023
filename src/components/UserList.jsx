import { useEffect } from "react";
import { useState } from "react"


const UserList = ({endPoint}) => {

    const[data, setData]= useState([]);
    const fetchData = async () =>{
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
            const data = await response.json();
            console.log(data);
            setData(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect( () => {
        fetchData();
    }, [endPoint])

    return (
        <>
            <h1>Listado de Ususario</h1>
            <ol>
                {endPoint == "users"
                ? data.map((item) => <li key={item.id}>{item.name} {item.username}</li>)
                : data.map((item) => <li key={item.id}>{item.body}</li>)}
            </ol>
        </>
    )
}

export default UserList
