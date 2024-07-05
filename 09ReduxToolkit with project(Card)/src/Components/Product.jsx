import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'
import './Product.css' 

const Product = () => {
  const [products, getProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(result => getProducts(result))
  }, [])

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
