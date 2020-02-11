import { useState, useEffect, useContext } from 'react'
import FirebaseContext from '../firebase/context'

const useValidation = (initialState, history) => {
  const [values, setValues] = useState(initialState)
  const { firebase } = useContext(FirebaseContext)

  const handleChange = (event) => {
    event.persist()

    setValues(prevValues => ({
      ...prevValues,
      [event.target.name]: event.target.value, 
    }))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()

    const { name, email } = values
    const newUser = { name, email }

    firebase.db.collection('users').add(newUser)
    history.push('/users')
  }

  return {
    handleChange,
    handleSubmit,
    values
  }
}

export default useValidation