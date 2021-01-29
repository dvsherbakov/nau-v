import React, { useContext } from 'react'
import gravatar from 'gravatar'
import { AuthContext } from '../AuthContext'

export const Profile = () => {
  const { jwtApi } = useContext<any>(AuthContext)
  const url = gravatar.url(
    jwtApi.email,
    { s: '100', r: 'x', d: 'retro' },
    false
  )
  return (
    <>
      <h1>ProfilePage</h1>
      <img
        alt="Зарегистрируйтесь на https://ru.gravatar.com/ для отображения аватарки"
        src={url}
      />
    </>
  )
}
