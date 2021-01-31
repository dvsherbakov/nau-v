import React, { useContext } from 'react'
import Gravatar from 'react-gravatar'
import { AuthContext } from '../AuthContext'

import './Profile.css'
type defGav =
  | 'identicon'
  | 'monsterid'
  | 'wavatar'
  | 'retro'
  | '404'
  | 'mm'
  | 'blank'
  | undefined

export const Profile = () => {
  const { jwtApi } = useContext<any>(AuthContext)
  const defAvatars: Array<defGav> = [
    'identicon',
    'monsterid',
    'wavatar',
    'retro',
  ]
  const defAvatar: defGav =
    defAvatars[Math.floor(Math.random() * defAvatars.length)]

  return (
    <div className="profile__personal-group">
      <Gravatar
        email={jwtApi.email}
        className="profile__gravatar"
        size={100}
        default={defAvatar}
      />
      <div>
        <h2>{jwtApi.firstName}</h2>
        <h2>{jwtApi.lastName}</h2>
      </div>
    </div>
  )
}
