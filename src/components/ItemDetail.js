
function ItemDetail({product}) {
    return (
      <div className='container-fluid'>
        <div className='row justify-content-center'>
            <div>
                <img src={product.img} alt = 'imagen' className='img-fluid img2'/>
                <p>{product.name}</p>
                <p>{product.price}</p>
            </div>
        </div>
      </div>
    )
  }
  
export default ItemDetail;
  