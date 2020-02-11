import React, { useState } from 'react'
import useValidation from '../useValidation'

const INITIAL_STATE = {
  name: '',
  email: ''
}

const UserForm = (props) => {
  const { handleSubmit, handleChange, values } = useValidation(INITIAL_STATE, props.history)

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ユーザー名</label>
        <input type="text" name="name" onChange={handleChange} value={values.name} />
      </div>
      <div>
        <label>メールアドレス</label>
        <input type="text" name="email" onChange={handleChange} value={values.email} />
      </div>

      <button type="submit">登録</button>
    </form>
  )
}

export default UserForm