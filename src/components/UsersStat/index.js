import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthContext'
import { UserTestStat } from '../UserTestStat/UserTestStat'
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
      console.log(user, index)
      const oddColor = index % 2 === 0 ? '' : ' users-list__odd-color'
      const rowClassName =
        user.accepted > 20
          ? `users-list__list-element users-list__bold`
          : `users-list__list-element`

      return (
        <div key={index} className={rowClassName}>
          <span className={`users-list__f-name${oddColor}`}>
            {user.firstName || 'John'}
          </span>{' '}
          <span className={`users-list__l-name${oddColor}`}>
            {user.lastName || 'Doe'}{' '}
          </span>{' '}
          <span className={`users-list__email${oddColor}`}>
            {user.email || 'nomail@nomail.au'}
          </span>
          <UserTestStat result={user.tResult} />
        </div>
      )
    })
  ) : (
    <></>
  )

  return (
    <div className="users-list">
      <h1>Пользователи</h1>
      <div className="user-list__table-header">
        <span className="users-list__f-name">Имя</span>{' '}
        <span className="users-list__l-name">Фамилия</span>{' '}
        <span className="users-list__email">email</span>
      </div>
      <div className="user-list__table">{usersElement}</div>
    </div>
  )
}
