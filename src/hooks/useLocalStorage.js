import {useEffect, useState} from 'react'

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        if (typeof window === "undefined") {
            return initialValue;
          }
          try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
          } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
          }
})
useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))}, [key, value])
return [value, setValue]
}
