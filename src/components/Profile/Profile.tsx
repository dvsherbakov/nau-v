import React, { useEffect, useState } from 'react'
import Gravatar from 'react-gravatar'
import { useDispatch, useSelector } from 'react-redux'
import { selectors } from '../../features/auth/index'
import { getUsersThunk, updateFirstName } from '../../features/users/actions'
import { defGravatar } from '../types'
import { UserList } from '../UserList/UserList'
import { isFetched } from '../../features/users/selectors'

import './Profile.css'

const FirstNameChanger = () => {
  const [nameEditing, setNameEditing] = useState(false)
  const firstName = useSelector(selectors.getFirstName)
  const [name, setName] = useState(firstName)
  const dispatch = useDispatch()

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  return (
    <div
      onDoubleClick={() => {
        setNameEditing(!nameEditing)
      }}
    >
      {nameEditing ? (
        <input
          value={name}
          type="text"
          autoFocus
          className="profile_name-input"
          onChange={onChange}
          onBlur={() => {
            setNameEditing(false)
            dispatch(updateFirstName(name))
          }}
        />
      ) : (
        <div>{firstName}</div>
      )}
    </div>
  )
}

export const Profile = () => {
  const email = useSelector(selectors.getEmail)
  const fetched = useSelector(isFetched)

  const { lastName } = useSelector(selectors.getName)
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
        <FirstNameChanger />
        <div>{lastName}</div>
      </div>
      {fetched && <UserList />}
    </div>
  )
}
