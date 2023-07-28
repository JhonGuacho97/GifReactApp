import { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola Mundo')

    const handleInputChange = ({ target }) => {
        console.log(target.value);
        setInputValue(target.value)
    }

  return (
    <input 
    type="text"
    placeholder='Buscar...'
    value={inputValue}
    onChange={handleInputChange}
    />
  )
}
