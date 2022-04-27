import React, {useContext} from "react";         
import { UserContext } from "./UserContext"; 

function UseContextHook(){ 

    const [user, setUsers] = useContext(UserContext);

    const updateData = () => {
        setUsers(prevState=>{
            return{
                ...prevState,
                id: 2,
                name: 'John',
                age: 23,
                dept: 'Civil'
            }
        })
    }
    
    return(

        <div style={{textAlign:"center"}}>
            <h1>HOOKS </h1>
            <h2>useContext </h2>
            <h3>{user.id} || {user.name} || {user.age} || {user.dept} </h3>

            <button onClick={updateData}>Click to change data</button>
        </div>
    )
}
export default UseContextHook;

// useEffect - 27-04-2022
// this hook is used to use the context api. 
// props drilling : If you have four components , and you need to pass the data from one comp to second then to third then to fourth comp. But this data will be used only in first and fourth comp. So over here second and third comp is having or receiving props data which they are not even using. this is known as props drilling. 
// soultion of props drilling : Context API.
// Context API : Lets you store the data at a single place and then in whatsoever component you want to receive the data you need to make sure that the component is wrapped with the context api. 
// Now to use the context api data in the component you need useContext hook.