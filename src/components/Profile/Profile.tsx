import React from 'react'
import Gravatar from 'react-gravatar'
import { useSelector } from 'react-redux'
import { selectors } from '../../features/auth/index'
import { defGravatar } from '../types'

import './Profile.css'

export const Profile = () => {
  const email = useSelector(selectors.getEmail)
  const { firstName, lastName } = useSelector(selectors.getName)
  const defAvatars: Array<defGravatar> = [
    'identicon',
    'monsterid',
    'wavatar',
    'retro',
  ]
  const defAvatar: defGravatar =
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
