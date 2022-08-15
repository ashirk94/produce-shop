import React from 'react'
import { Card } from 'react-bootstrap'

export default function StoreItem(props) {
  return (
    <Card>
        <Card.Img variant='top' src={props.imgUrl} alt='item' height='200px'/>
    </Card>
  )
}
