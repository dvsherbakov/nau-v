import React from 'react'

import './style.css'

export const ClassFilter = (props) => {
  const ClassesClickHandler = (e) => {
    const newValue = {
      ...props.Classes[e.target.id],
      isSelected: !props.Classes[e.target.id].isSelected,
    }
    const newArray = [
      ...props.Classes.slice(0, +e.target.id),
      newValue,
      ...props.Classes.slice(+e.target.id + 1),
    ]
    props.SetClasses(newArray)
  }

  const TagsClickHandler = (e) => {
    const newValue = {
      ...props.Tags[e.target.id],
      isSelected: !props.Tags[e.target.id].isSelected,
    }
    const newArray = [
      ...props.Tags.slice(0, +e.target.id),
      newValue,
      ...props.Tags.slice(+e.target.id + 1),
    ]
    props.SetTags(newArray)
  }

  const filtress = props.Classes
    ? props.Classes.map((e, idx) => {
        return (
          <div
            id={e.id}
            key={idx}
            className={
              e.isSelected
                ? 'classfltr__item'
                : 'classfltr__item classfltr__unselected'
            }
            onClick={ClassesClickHandler}
          >
            {e.klass}
          </div>
        )
      })
    : []
  const tags = props.Tags
    ? props.Tags.map((e, idx) => {
        return (
          <div
            id={e.id}
            key={idx}
            className={
              e.isSelected
                ? 'tagsfltr__item'
                : 'tagsfltr__item classfltr__unselected'
            }
            onClick={TagsClickHandler}
          >
            {e.tag}
          </div>
        )
      })
    : []
  if (filtress || tags)
    return (
      <div className="classfltr">
        <div className="classfltr__cl-group">{filtress}</div>
        <div className="classfltr__tg-group">{tags}</div>
      </div>
    )
  else return null
}
