import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthContext'

import './styles.css'

export const UsersStat = () => {
  const { jwtApi } = useContext(AuthContext)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getAllUsers = async () => {
      const data = await jwtApi.GetUsers()
      console.log(data)
      if (data) {
        setUsers(data)
      }
    }
    getAllUsers()
  }, [setUsers, jwtApi])

  const usersElement = users ? (
    users.map((user, index) => (
      <div key={index}>
        <div className="users-list__list-elemen">
          <span>{user.firstName}</span> <span>{user.lastName} </span>{' '}
          <span>{user.email}</span>
        </div>
      </div>
    ))
  ) : (
    <></>
  )

  return (
    <div className="users-list">
      <h1>Пользователи</h1>
      {usersElement}
    </div>
  )
}
