import { useState } from "react"
import UserList from "./components/UserList"


const UserApp = () => {
    const [endPoint, setEndPoint] = useState("users");
    const handlerFecth = () =>{
        setEndPoint("posts");
    }
    return (
        <>
        <UserList endPoint={endPoint}></UserList>
        <button onClick={handlerFecth}>Users</button>
        </>
    )
}

export default UserApp
