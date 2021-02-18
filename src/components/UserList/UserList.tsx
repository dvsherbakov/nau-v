import React, { FC, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { getUsers } from '../../features/users/selectors'
import { IFullUserInfo } from '../../features/auth/types'
import Gravatar from 'react-gravatar'
import { defGravatar } from '../types'

import './userlist.css'

const UserItem: FC<IFullUserInfo> = (user) => {
  const defAvatars: Array<defGravatar> = [
    'identicon',
    'monsterid',
    'wavatar',
    'retro',
  ]
  const defAvatar: defGravatar =
    defAvatars[Math.floor(Math.random() * defAvatars.length)]

  return (
    <Fragment>
      <Gravatar
        email={user.email}
        className="userlist__gravatar"
        size={48}
        default={defAvatar}
      />
      <div>{user.firstName}</div>
      <div>{user.lastName}</div>
    </Fragment>
  )
}

export const UserList = () => {
  const users = useSelector(getUsers)

  return (
    <Fragment>
      <div className="userlist">
        <h4>Список пользователей</h4>
        <div className="userlist__list">
          {users.map((usr) => (
            <div key={usr.id}>
              <UserItem {...usr} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  )
}
