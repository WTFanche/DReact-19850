import { useState } from "react";
import { Link } from "react-router-dom";
import Itemcount from "./ItemCount";



const AddCart = () => {
  return(
    <Link to="/cart" >
      <button className="btn btn-primary btn-sm">Ir al carrito</button>
    </Link>
  )
}



function ItemDetail({product}) {

  const [ buttonType, setButtonType ]  = useState("itemCount")
  
  const changeButton=()=>{
    setButtonType("AddButton")
  }

  return (
    <>
    <div className='container-fluid'>
      <div className='row justify-content-center'>
          <div>
              <img src={product.img} alt = 'imagen' className='img-fluid img2'/>
              <p>{product.name}</p>
              <p>{product.price}</p>
          </div>
      </div>
    </div>
    {
      buttonType === "itemCount" ?
        <Itemcount stock="5" initial="1" onAdd={changeButton}/>
      :
        <AddCart />
    } 
    </>
    )
}
  
export default ItemDetail;
  