import React  from "react";
import Hook from "./Context/UseContextHook"
import UserContextProvider from './Context/UserContext'

const App = () => {

  return (
   <div style={{textAlign:"center"}}>
     <UserContextProvider>
        <Hook />
     </UserContextProvider>
   </div>
  );
};
export default App;