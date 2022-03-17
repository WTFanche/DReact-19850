import img from '../Media/toall2.jpeg';


function Item({prod}) {
    return (
    <div className='container-fluid'>
        <div className='row justify-content-center'>
            <div key={prod.id}className='col-md-3'>                        
                <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {`${prod.name} - ${prod.price}`}
                    </div>
                    <div className="card-body">
                        <img src={img} alt='imagen' className='w-50'/>                                                          
                    </div>
                    <div className="card-footer">  
                        <button className="btn btn-outline-primary btn-block">
                            detalle del producto
                        </button>                                                       
                    </div>
                </div>
            </div>
        </div>  
        </div>  
        
    )
}

export default Item;
