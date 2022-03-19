import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { getFetch } from '../helpers/getFetch';
import Itemcount from './ItemCount';
import ItemDetailContianer from './ItemDetailContainer';
import ItemList from './ItemList';



function ItemListContainer() {
    
    const [prods, setProds] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
        // inicio promesa
        getFetch
        .then( resp => setProds(resp))
        .catch(err => console.log(err))
        .finally(() => setLoad(false))
        // fin promesa
    }, [])
    
    
    return(
        <>
                {load ? <div className='container-fluid text-center'> <h3>Cargando...</h3></div> 
                    :
                        <ItemList prods={prods} />
                }
                <Itemcount stock="5" initial="1"/>
                <ItemDetailContianer />
        </>

    );
}

export default ItemListContainer;