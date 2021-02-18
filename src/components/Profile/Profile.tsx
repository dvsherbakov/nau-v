import React, { useEffect } from 'react'
import Gravatar from 'react-gravatar'
import { useDispatch, useSelector } from 'react-redux'
import { selectors } from '../../features/auth/index'
import { getUsersThunk } from '../../features/users/actions'
import { defGravatar } from '../types'
import { UserList } from '../UserList/UserList'
import { isFetched } from '../../features/users/selectors'

import './Profile.css'

export const Profile = () => {
  const email = useSelector(selectors.getEmail)
  const fetched = useSelector(isFetched)

  const { firstName, lastName } = useSelector(selectors.getName)
  const defAvatars: Array<defGravatar> = [
    'identicon',
    'monsterid',
    'wavatar',
    'retro',
  ]

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersThunk())
  }, [dispatch])

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
      {fetched && <UserList />}
    </div>
  )
}
