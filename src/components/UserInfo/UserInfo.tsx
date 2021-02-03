import React from 'react'
import { useSelector } from 'react-redux'
import { selectors } from '../../features/auth/index'
import { defGravatar } from '../types'
import Gravatar from 'react-gravatar'

import './userinfo.css'

export const UserInfo = () => {
  const isAuth = useSelector(selectors.isAuthenticate)
  const email = useSelector(selectors.getEmail)
  const defAvatars: Array<defGravatar> = [
    'identicon',
    'monsterid',
    'wavatar',
    'retro',
  ]
  const defAvatar: defGravatar =
    defAvatars[Math.floor(Math.random() * defAvatars.length)]

  return (
    <div className="user-info">
      {isAuth && (
        <Gravatar
          email={email}
          className="user-info__gravatar"
          size={40}
          default={defAvatar}
        />
      )}
      {!isAuth && <div>'DU'</div>}
    </div>
  )
}
