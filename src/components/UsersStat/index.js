import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../AuthContext'

export const UsersStat = () => {
  const { jwtApi } = useContext(AuthContext)

  useEffect(() => {
    const getAllUsers = async () => {
      const data = await jwtApi.GetUsers()
      console.log(data)
    }
    getAllUsers()
  }, [jwtApi])

  return (
    <div>
      <h1>Пользователи</h1>
    </div>
  )
}
