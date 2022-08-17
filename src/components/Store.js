import React from 'react'
import { Col, Row } from 'react-bootstrap'
import storeItems from '../data/items.json'
import StoreItem from './StoreItem'

export default function Store() {
  return (
    <div>
        <h1>Store</h1>
        <Row>
            {storeItems.map(item => (
                <Col key={item.id}>
                    <StoreItem {...item}/>
                    </Col>
            ))}        
        </Row>
    </div>
  )
}
