import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider( {children} ) {

    const [cartList, setCartList] = useState([])

    const addToCart=(item)=>{

        // ACA ES DONDE ME GENERA CONFUSION 
        //(tengo que llamarla con una arrow y pasar param?)

        /* const fProd = cartList.find(
            (cartList) => cartList.id === item.id
        )

        if (fProd) {

            fProd.cantidad + ????? no tengo este parametro aca, como lo traigo
            para luego llevarlo al onAdd?

            setCartList( [ ...cartList] )
        } else {
            setCartList( [ ...cartList, item ] )
        } */
        
        setCartList( [ ...cartList, item ] )
    }

    const deleteCart = ()=>{
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            deleteCart
        }}
        >
            { children }
        </CartContext.Provider>

    )
        
}

export default CartContextProvider