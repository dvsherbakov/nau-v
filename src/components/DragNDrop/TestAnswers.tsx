import React, { FC, useState } from 'react'
import { IAnswProps, TAnswer } from './types'

export const TestAnswers: FC<IAnswProps> = ({ answCandidates, setRes, answInitials }) => {
  const [ans, setAns] = useState<TAnswer[]>(answInitials)//(new Array(4).fill('Вставте ответ')) 
  //Array.from(Array(answCount).keys()).map((x)=>({id:x, text:'Вставте ответ'}))
  const [currAnsw, setCurAnsw] = useState<TAnswer>(answCandidates[0])

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, a: TAnswer) => {
    setCurAnsw(a)
  }

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const t = e.target as HTMLDivElement;
    t.style.background = '#CFCFCF'
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>, idx: number) => {
    e.preventDefault() 
    setAns((ans)=>ans.map((a, idm)=> idx===idm?{...currAnsw, comment: a.comment}:a))
    setRes(ans.map((a, idm)=> idx===idm?currAnsw.id:a.id))
    const t = e.target as HTMLDivElement;
    t.style.background = 'transparent'
  }

  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const t = e.target as HTMLDivElement;
   t.style.background = 'transparent'
  }

  return (
    <div className={'container'}>
      <div className={'drag-drop__anwes'}>
        {ans.map((el, idx) => (
          <div key={idx.toString()} 
          className={'drag-drop__anwer'}>
            {el.comment&&<div className={'drag-drop__comment'}>{el.comment}</div>}
          <div  className={'drag-drop__ans-text'}
            onDrop={(e: React.DragEvent<HTMLDivElement>) => {
              dropHandler(e, idx)
            }}
            onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
              dragOverHandler(e)
            }}
            onDragEnd={(e: React.DragEvent<HTMLDivElement>) => {
              dragEndHandler(e)
            }}
          >
            {el.text}
          </div>
          </div>
        ))}
      </div>
      <div className={'drag-drop__anwes'}>
        {answCandidates.map((ac) => (
          <div
            key={ac.id}
            className={'drag-drop__ac'}
            draggable={true}
            onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
              dragStartHandler(e, ac)
            }}
          >
            {ac.text}
          </div>
        ))}
      </div>
    </div>
  )
}
