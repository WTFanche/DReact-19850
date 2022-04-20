import { useCartContext } from "../CartContext/CartContext"

function CartTable() {
    const { cartList, deleteProd, totalPrice } = useCartContext()
    return(
      <>
        <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" className="text-center">Producto</th>
                <th scope="col" className="text-center">Cantidad</th>
                <th scope="col" className="text-center">Precio</th>
                <th scope="col" className="text-center"></th>
              </tr>
            </thead>
            <tbody>
              {cartList.map(prod => 
                <tr key={prod.id}>
                  <td className="text-center">
                      <h6>{prod.name}</h6>
                  </td>
                  <td className="text-center">
                    <p>{prod.cantidad}</p>
                  </td>
                  <td className="text-center"><p>${prod.price * prod.cantidad}</p></td>
                  <td>
                    <button onClick={() => deleteProd(prod.id)} className="delete btn btn-outline-danger btn-sm">X</button>
                  </td>
                </tr>  
              )}
            </tbody>
          </table>
          <div className="row justify-content-end">
            <div className="col-3">
                <p>Total: ${totalPrice()}</p>
            </div>
          </div>
      </>
    )
}


export default CartTable