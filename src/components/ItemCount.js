import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'


function Itemcount({stock, initial}) {

    const [ count, setCount ]  = useState(1)

            const handleCountS = () => {
                if (count >= initial && count < stock) {
                    setCount( count + 1 )
                }
                
            }
    
            const handleCountR = () => {
                if (count > initial) {
                    setCount( count - 1 )
                }
                

            }
            
            const onAdd = () => {
                    console.log(count);
            }
    return(
        <>
            <div className="container-fluid">
                <div className="row justify-content-center"> 
                    <div className="col-1">
                        <button onClick={handleCountR} className="btn btn-primary btn-sm">-</button>
                    </div>
                    <div className="col-1">
                        <label>{count}</label>
                    </div> 
                    <div className="col-1">
                        <button onClick={handleCountS} className="btn btn-primary btn-sm">+</button>
                    </div> 
                </div>
                <div className="row justify-content-center">
                    <div className="col-2"> 
                        <button onClick={onAdd} className="btn btn-primary btn-sm">Agregar al carrito</button>
                    </div>
                </div> 
            </div>
        </>

    );
}

export default Itemcount;


/* 
<button>+</button>
<div className=""></div> 

*/