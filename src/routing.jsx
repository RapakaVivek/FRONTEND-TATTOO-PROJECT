import { useDispatch, useSelector } from "react-redux"
import App from "./App"
import { fetchCart } from "./authapis"
import { useEffect, useState } from "react"
import { setuser } from "./Components/CartComp"
import Login from "./Components/Login"


const Routing =  () =>{

  const dispatch = useDispatch()
const Api = useSelector((state)=>state.serverurl)
  const initialState =localStorage.getItem("authToken") ;
  const [statusresponse,setstatusresponse] = useState(false)

    useEffect(() =>{
      if(initialState){
        console.log("token",initialState)
      }
    },[])

    const profile = async () => {
   
      if (!initialState) {
        alert("No auth token found. Please log in.");
        return;
      }
    else{
      try {
        const res = await fetch(`${Api.url}/pro/profile`, {
          method: 'GET',  
          headers: {
            Authorization: `Bearer ${initialState}`,
          },
        });
        console.log('cov',res)
        if (res.ok) {
          const data = await res.json();
           let _id=data?.profile?._id;  
                  let name = data?.profile?.name;
                  let email = data?.profile?.email;
                  let phonenumber = data?.profile?.mobile;
                  console.log(_id,name,email,phonenumber)
                  setstatusresponse(true)
                   dispatch(setuser({_id,name,email,phonenumber}))
                   dispatch(fetchCart(Api.url,_id))
          // setPro(data);
          console.log('hi here',data)
          // console.log(data)
         
        } else {
          throw new Error("Failed to fetch profile data");
        }
      } catch (error) {
        console.log(error)
      }}
    };
     useEffect(()=>{
        console.log(initialState)
      },[])

      useEffect(() => {
        profile();
      }, []); 

 
      
      //  useEffect(() =>{
      //    dispatch(fetchCart())
      //  },[])

    return(
      <>
      
       {statusresponse && (<App/>) || (<Login/>)  }  
         
      </>
       
    )
}

export default Routing