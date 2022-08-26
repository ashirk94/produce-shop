import React from 'react'
import storeItems from '../../data/items.json'
import StoreItem from './StoreItem'

export default function Store() {
  return (
    <>
        <div>
        <h1>Store</h1>
        <div className='store'>
            {storeItems.map(item => (
                    <StoreItem key={item.id} {...item}/>
            ))}        
        </div>
        </div>
    </>
  )
}
