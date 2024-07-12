import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap'; 
import { remove } from './store/cartSlice';

const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    // dispatch a remove action
    dispatch(remove(id));
  };

  const cards = products.map(product => (
    <div className="col-md-12" key={product.id}>
      <Card style={{ width: '18rem', marginBottom: '10px' }} className='h-100'>
        <div className="text-center">
          <Card.Img 
            variant="top" 
            src={product.image} 
            alt={product.title}
            style={{ width: '100px', height: '130px' }}
          />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>NPR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: 'white' }}>
          <Button 
            variant="danger" 
            className="m-auto" 
            onClick={() => removeToCart(product.id)}
          >
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div className='row'>
      {cards}
    </div>
  );
};

export default Cart;
