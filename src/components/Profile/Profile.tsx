import React from 'react'
import gravatar from 'gravatar'

export const Profile = () => {
  const url = gravatar.url(
    'dvsherbakov@gmail.com',
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
