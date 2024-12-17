import { Navigate, useLocation } from "react-router-dom";


const Protectedroute = ({children}) =>{
     const initialState =localStorage.getItem("authToken") ;
     const location = useLocation()
     console.log('protected route',initialState)
     if(!initialState){
        return <Navigate to="/login" state={{from:location}}   replace />;    
     }
   return children
}

export default Protectedroute