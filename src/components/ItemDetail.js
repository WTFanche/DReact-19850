import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";
import Itemcount from "./ItemCount";



const AddCart = () => {
  return(
    <>
      <Link to="/cart" >
        <button className="btn btn-warning btn-sm">Finalizar compra</button>
      </Link>
      <br></br>
      <br></br>
      <Link to="/" >
        <button className="btn btn-info btn-sm">Seguir comprando</button>
      </Link>
    </>
  )
}
 


function ItemDetail({product}) {

  const [ buttonType, setButtonType ]  = useState("itemCount")

  const { addToCart } = useCartContext()
  
  const onAdd=(qty)=>{
    setButtonType("AddButton");
    addToCart({ ...product, cantidad: qty })
    console.log(qty);
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
          <Itemcount stock={5} initial={1} onAdd={onAdd}/>
        :
          <AddCart />
      } 
    </>
  )
}
  
export default ItemDetail;
  