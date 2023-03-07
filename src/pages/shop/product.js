import React from 'react'

function Product(props) {
    const{ productName,price,productImage } = props.data;
  return (
    <div className='product'>
        
      <img src={productImage} alt=""/>
      <div className='description'>
        <p><b>{productName}</b></p>
    
      <p>Rs{price}</p>
      </div>
      <button className='addToCartBtn'>Add to cart</button>
    </div>

  )
}

export default Product
