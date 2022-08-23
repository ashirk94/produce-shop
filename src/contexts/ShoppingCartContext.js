import React, { createContext, useContext, useState } from 'react'
import ShoppingCart from '../components/ShoppingCart'
import {useLocalStorage} from '../hooks/useLocalStorage'

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
	return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
	const [cartItems, setCartItems] = useLocalStorage('shopping-cart', [])
	const [isOpen, setIsOpen] = useState(false)
    let cartQuantity = 0

    if (cartItems != null && cartItems.length > 0) {
        cartQuantity = cartItems.reduce(
            (quantity, item) => item.quantity + quantity,
            0
        )
    }


        //returns count of each type of item
	function getItemQuantity(id) {
        if (cartItems != null && cartItems.length > 0 && cartItems.find((item) => item.id === id) != null) {
            let cartItem = cartItems.find((item) => item.id === id)
            return cartItem.quantity 
        }
		else {
            return 0
        }
	}
	function increaseCartQuantity(id) {
		setCartItems((currItems) => {
			if (currItems.find((item) => item.id === id) == null) {
				return [...currItems, { id, quantity: 1 }]
			} else if (currItems != null && currItems.length > 0 ){
				return currItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 }
					} else {
						return item
					}
				})
			}
		})
	}
	function decreaseCartQuantity(id) {
		setCartItems((currItems) => {
			if (currItems != null && currItems.find((item) => item.id === id) === 1) {
				return currItems.filter((item) => item.id !== id)
			} else {
				return currItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 }
					} else {
						return item
					}
				})
			}
		})
	}
	function removeFromCart(id) {
		setCartItems((currItems) => {
			return currItems.filter((item) => item.id !== id)
		})
	}
	function openCart() {
		if (!isOpen) setIsOpen(true)
	}
	function closeCart() {
		if (isOpen) setIsOpen(false)
	}

	return (
		<ShoppingCartContext.Provider       
			value={{
				getItemQuantity,
				increaseCartQuantity,
				decreaseCartQuantity,
				removeFromCart,
				openCart,
				closeCart,
				cartQuantity,
				cartItems
			}}>
			{children}
            <ShoppingCart isOpen={isOpen}/>
		</ShoppingCartContext.Provider>
	)
}
