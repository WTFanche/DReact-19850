import { useEffect, useState } from "react"
import { gFetchB } from "../helpers/getFetch"
import ItemDetail from "./ItemDetail"

function ItemDetailContianer() {
    const [prod, setProd] = useState({})
    
    useEffect(()=>{
        gFetchB("1")
        .then(prod => setProd(prod))
        .catch(err => console.log(err))
    }, [])
    
    return (
        <div>
            <ItemDetail product={prod} />
        </div>
    )
}

export default ItemDetailContianer
