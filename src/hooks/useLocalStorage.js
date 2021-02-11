import {useState} from 'react'

// export default function useLocalStorage(key, initialValue){
//      const [storedValue, setStoredValue] = useState(() => {
//           const item = localStorage.getItem(key)

//           return item ? JSON.parse(item) : initialValue
//      })

//      const setValue = (value) => {
//           setStoredValue(value)
//           localStorage.setItem(key, JSON.stringify(value))
//      }

//      return [storedValue, setValue]
// }


const useLocalStorage = (key, initialValue) => {
     //1. when initializing our state see if our data exists in local storage.
     //2. if Data exists in localStorage, make that our initialValue
     //3. if Data does not exist on localStorage make our state = initialState and save initialState to localStorage
     //4. when setting data, save data to state, and save data to localStorage
     const [storedState, setStoredState] = useState(() => {
          if(localStorage.getItem(key)) {
               return JSON.parse(localStorage.getItem(key))
          } else {
               localStorage.setItem(key, initialValue)
               return initialValue
          }
     })

     const setState = value => {
          setStoredState(value)
          localStorage.setItem(key, JSON.stringify(value))
     }

     return([storedState, setState])
}

export default useLocalStorage