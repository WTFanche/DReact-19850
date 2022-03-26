import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../helpers/getFetch';
import ItemList from './ItemList';




function ItemListContainer() {
    
    const [prods, setProds] = useState([])
    const [load, setLoad] = useState(true)

    const { id } = useParams()

    useEffect(() => {

        if (id) {
            // inicio promesa
            getFetch
            .then( resp => setProds(resp.filter(prod=> prod.category === id)))
            .catch(err => console.log(err))
            .finally(() => setLoad(false))
            // fin promesa
        
        } else {
            // inicio promesa
            getFetch
            .then( resp => setProds(resp))
            .catch(err => console.log(err))
            .finally(() => setLoad(false))
            // fin promesa
        }
    }, [id])
    
    
    return(
        <>
                {load ? <div className='container-fluid text-center'> <h3>Cargando...</h3></div> 
                    :
                        <ItemList prods={prods} />    
                }
        </>

    );
}

export default ItemListContainer;