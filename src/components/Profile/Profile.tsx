import React, { FC, useEffect, useState } from 'react'
import Gravatar from 'react-gravatar'
import { useDispatch, useSelector } from 'react-redux'
import { selectors } from '../../features/auth/index'
import { getUsersThunk, updateUser } from '../../features/users/actions'
import { defGravatar } from '../types'
import { UserList } from '../UserList/UserList'
import { isFetched } from '../../features/users/selectors'
import { IUpdateUser } from '../../features/users/types'

import './Profile.css'

enum TName  {
  firstName=1,
  lastName =2
}

type NameProps ={
  nType: TName
}

const NameChanger: FC<NameProps> = ({nType}:NameProps) => {
  const [nameEditing, setNameEditing] = useState(false)
  const firstName = useSelector(nType===TName.firstName ? selectors.getFirstName: selectors.getLastName)
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
            const updates: IUpdateUser = nType===TName.firstName ? { fistName: name }: {lastName: name} 
            dispatch(updateUser(updates))
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
        <NameChanger nType={TName.firstName} />
        <NameChanger nType={TName.lastName} />
      </div>
      {fetched && <UserList />}
    </div>
  )
}
