import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import FirebaseContext from '../../firebase/context'

const INITIAL_USERDATA = [
  {id: 1, name: 'テスト1', email: 'aaa@gmail.com'},
  {id: 2, name: 'テスト2', email: 'bbb@gmail.com'},
  {id: 3, name: 'テスト3', email: 'ccc@gmail.com'}
]

const User = ({ user }) => (
  <tr>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.email}</td>
  </tr>
)

const UsersPage = (props) => {
  const { firebase } = useContext(FirebaseContext)
  const [users, setUsers] = useState(INITIAL_USERDATA)
  
  useEffect(() => {
    return firebase.db.collection('users').onSnapshot(handleSnapshot)
  }, [])
  
  const handleSnapshot = (snapshot) => {
    const users = snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() }
    })
    setUsers(users)
  }
  

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ユーザー名</th>
            <th>メールアドレス</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <User key={idx} user={user} />
          ))}          
        </tbody>
      </table>

      <Link to="/users/new">ユーザー登録</Link>
    </>
  )
}

export default UsersPage