import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setCart } from "../reduxapis";

const DesginModule = () => {
      const Api = useSelector((state)=>state.serverurl)
      const user = useSelector((state) =>state.users)
      useEffect(() =>{
        if(user){
            console.log('user de',user)
        }
      },[user])
    const [data, setdata] = useState([])

    useEffect(() => {
        fetch(`${Api}/api/designs`)
            .then(res => res.json())
            .then(json => console.log(json))
    }, [])

    const fetchdata = async () => {
        let response = await fetch(`${Api.url}/api/designs`)  
        let data = await response.json()
        console.log(data)
        setdata(data)
    }

    useEffect(() => {
        fetchdata()
    }, [])


    const dispatch = useDispatch();

    const cart = useSelector((state) => state.carts);

    useEffect(() => {
        console.log("cart");
        console.log(cart);
    }, [cart]);

    const handleaddtocart = async(designid) =>{
       
        let body ={
             user_id:user?._id,
            design_id:designid,
            quantity:1
        }
        const response = await fetch(`${Api.url}/cart/add`,{
            method:'POST',
            body:JSON.stringify(body),
            headers: {
                'Accept-Language': '',
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json()
        console.log(data.cart.items)
        dispatch(setCart(data.cart))
        console.log('cart',cart)
    }

    return (
        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center mb-4">
                <Link to="/cart">
                    <button className="btn  btn-outline-primary">
                        Cart <span className="badge bg-dark">{cart.length}</span>
                    </button>
                </Link>

             

            </div>

            <div className="row g-4">
                {data.map((item, index) => (
                        <div key={index} className="col-md-4 mt-5 ms-0">
                            <div className="card shadow-sm h-100">
                                <img
                                    src={item.image}
                                    className="card-img-top p-3"
                                    style={{ height: "400px",width:"350px",  }}
                                    alt={item.title}
                                />
                                <div className="card-body">

                                   <h2 className="card-text text-truncate text-dark fs-4" style={{textAlign:"left"}}>Name: {item.name}</h2>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="text-dark fw-bold">
                                            Price:   ${item.price.toFixed(2)}
                                        </span>

                                    </div>
                                    <div className=" ">
    
     <div>
                                            <button
                                                className="btn btn-danger text-white mt-2 w-100"
                                                onClick={() =>{
                                                    handleaddtocart(item._id)
                                                }}
                                                // onClick={() => {
                                                //     const itemToAdd = {
                                                //         id: item.design_id,
                                                //         title: item.name,
                                                //         price: item.price,
                                                //         image: item.image,
                                                //     };
                                                //     dispatch(addToCart(itemToAdd));
                                                //     console.log("Item added to cart:", itemToAdd);
                                                // }}
                                            >
                                                Add to Cart
                                            </button>
                                     
</div>


                                        <Link to="/selectProduct" state={{ id: item.design_id}}>
                                            <button className="btn btn-light  mt-3 w-100" style={{backgroundColor:'rgb(212, 207, 207)',fontWeight:'700'}}> 
                                                View Details
                                            </button>
                                        </Link>
                                   
                                    </div>







                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DesginModule;


