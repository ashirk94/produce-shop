import React, {useContext}  from 'react'
import { Card } from 'react-bootstrap'
import ThemeContext from '../contexts/ThemeContext'
import { formatCurrency } from '../utilities/formatCurrency'

export default function StoreItem(props) {
    const {theme} = useContext(ThemeContext)
  return (
    <Card>
        <Card.Img variant='top' src={props.imgUrl} alt='item' height='200px'/>
        <Card.Body className='d-flex flex-column' id={theme}>
            <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'></Card.Title>
            <span className='fs-2'>{props.name}</span>
            <span className='ms-2 text-muted'>{formatCurrency(props.price)}</span>
        </Card.Body>
    </Card>
  )
}
