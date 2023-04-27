import React from 'react'
import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <>

            <Card className='shadow-lg m-2 p-3 rounded' style={{ width: '18rem' }}>
                <Card.Img src={product.image} />
                <Card.Body>
                    <Card.Title>Title: {product.title}</Card.Title>
                    <Card.Title>Price: ${product.price}</Card.Title>
                    <Card.Text>
                        Description: {product.description.slice(0,10)}...
                    </Card.Text>
                 
                    <NavLink to={`product/${product.id}`}>
                        <button>Detail</button>
                    </NavLink>
                </Card.Body>

                
               
            </Card>
       
           
        </>
    )
}

export default ProductCard