import React from 'react'

import './style.css'

interface FilterEventTarget extends EventTarget {
  id: number;
}

interface FilterMouseEvent
  extends React.MouseEvent<HTMLDivElement, MouseEvent> {
  target: FilterEventTarget;
}

export type TagsType = { id: number, tag: string, isSelected: boolean }
export type KlassType = { id: number, klass: number, isSelected: boolean }
export type PropsClassFilterType = {
  Classes: KlassType[],
  SetClasses: React.Dispatch<React.SetStateAction<KlassType[]>>,
  Tags: TagsType[],
  SetTags: React.Dispatch<React.SetStateAction<TagsType[]>>,
}

export const ClassFilter = (props: PropsClassFilterType) => {
  const ClassesClickHandler = (e: FilterMouseEvent) => {
    const newValue: KlassType = {
      ...props.Classes[e.target.id],
      isSelected: !props.Classes[e.target.id].isSelected,
    }
    const newArray: KlassType[] = [
      ...props.Classes.slice(0, +e.target.id),
      newValue,
      ...props.Classes.slice(+e.target.id + 1),
    ]
    props.SetClasses(newArray)
  }

  const TagsClickHandler = (e: FilterMouseEvent) => {
    const newValue: TagsType = {
      ...props.Tags[e.target.id],
      isSelected: !props.Tags[e.target.id].isSelected,
    }
    const newArray: TagsType[] = [
      ...props.Tags.slice(0, +e.target.id),
      newValue,
      ...props.Tags.slice(+e.target.id + 1),
    ]
    props.SetTags(newArray)
  }

  const filtress = props.Classes
    ? props.Classes.map((e: any, idx: number) => {
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
    ? props.Tags.map((e: TagsType, idx: number) => {
        return (
          <div
            id={e.id.toString()}
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
