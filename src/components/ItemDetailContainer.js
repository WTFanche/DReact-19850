import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetchB } from "../helpers/getFetch"
import ItemDetail from "./ItemDetail"



function ItemDetailContianer() {
    const [prod, setProd] = useState({})
    const { detailId } = useParams()
    const [load, setLoad] = useState(true)
    

    useEffect(()=>{

        gFetchB(detailId)
        .then( resp => setProd(resp))
        .catch(err => console.log(err))
        .finally(() => setLoad(false))
        },
        [detailId])
    
    

    return (
        <>
        {
            load ? <div className='container-fluid text-center'> <h3>Cargando...</h3></div>
            
            :

            <center>
                <ItemDetail product={prod}/>
            </center>
        }
        </>
    )
}

export default ItemDetailContianer
