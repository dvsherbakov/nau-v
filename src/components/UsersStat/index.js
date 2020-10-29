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
    users.map((user, index) => {
      const rowClassName =
        user.accepted > 20
          ? 'users-list__list-element users-list__bold'
          : 'users-list__list-element'

      return (
        <div key={index} className={rowClassName}>
          <span className="users-list__f-name">{user.firstName}</span>{' '}
          <span className="users-list__l-name">{user.lastName} </span>{' '}
          <span className="users-list__email">{user.email}</span>
        </div>
      )
    })
  ) : (
    <></>
  )

  return (
    <div className="users-list">
      <h1>Пользователи</h1>
      <div className="user-list__table">{usersElement}</div>
    </div>
  )
}
