import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetchB } from "../helpers/getFetch"
import ItemDetail from "./ItemDetail"



function ItemDetailContianer() {
    const [prod, setProd] = useState({})
    const { detailId } = useParams()
    

    useEffect(()=>{

        gFetchB(detailId)
        .then( resp => setProd(resp))
        .catch(err => console.log(err))
        },
        [detailId])
    
    

    return (
        <center>
            <ItemDetail product={prod}/>
        </center>
    )
}

export default ItemDetailContianer
