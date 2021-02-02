import React from 'react'
import Gravatar from 'react-gravatar'
import { useSelector } from 'react-redux'
import { selectors } from '../../features/auth/index'

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
  const email = useSelector(selectors.getEmail)
  const { firstName, lastName } = useSelector(selectors.getName)
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
        email={email}
        className="profile__gravatar"
        size={100}
        default={defAvatar}
      />
      <div className="profile__name-group">
        <div>{firstName}</div>
        <div>{lastName}</div>
      </div>
    </div>
  )
}
