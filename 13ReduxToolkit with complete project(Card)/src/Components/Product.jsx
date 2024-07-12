import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'
import './Product.css' 
import { useDispatch, useSelector } from 'react-redux'
import { add } from './store/cartSlice'
import { getProducts } from './store/ProductSlice'
import { Alert } from 'react-bootstrap'
import StatusCode from './store/utils/StatusCode'

const Product = () => {
  // const [products, getProducts] = useState([])
  const dispatch = useDispatch();
  const {data: products, status} = useSelector(state => state.products);


  useEffect(() => {
  
    //dispatch an action for fetchProducts(api)

    dispatch(getProducts());
  }, []);

  if (status === StatusCode.LOADING ){
    return <p>Loading...</p>
  }

  if (status === StatusCode.ERROR){
    return <Alert variant='danger'>Something went wrong! Please try again later</Alert>
  }
  const addToCart = (product) => {
    //dispatch an add action
    dispatch(add(product))

  }

  const cards = products.map(product => (
    <div className="col-md-3 mb-4" key={product.id}>

      <Card style={{ width: '18rem', marginBottom: '10px' }} className='h-100'>
        <div className="text-center">
        <Card.Img variant="top" src={product.image} alt={product.title}
        style={{width: '100px', height: '130px'}}
        />
        </div>
      
        <Card.Body className="d-flex flex-column">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>NPR: {product.price}</Card.Text>
        </Card.Body>

        <Card.Footer style={{backgroundColor: 'white'}}>
        <Button variant="primary" className="m-auto" 
        onClick={() => addToCart (product)}
        >Add To Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ))

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="row">
        {cards}
      </div>
    </div>
  )
}

export default Product
