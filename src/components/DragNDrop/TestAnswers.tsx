import React, { FC, useState } from 'react'
import { IAnswProps, TAnswer } from './types'

export const TestAnswers: FC<IAnswProps> = ({ answCandidates, answCount }) => {
  const [ans, setAns] = useState<TAnswer[]>(Array.from(Array(answCount).keys()).map((x)=>({id:x, text:'Вставте ответ'})))//(new Array(4).fill('Вставте ответ'))
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
    const tmp = ans.map((a, idm)=>{
      if (idx===idm) 
      { 
        return currAnsw
      } 
      else return a})
    setAns(tmp)
  }

  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const t = e.target as HTMLDivElement;
    t.style.background = '#FFFFFF'
  }

  return (
    <div className={'container'}>
      <div>Тут долджен быть текст вопроса, и если надо, рисунок, под ним - области для перетаскивания ответа, под которыми собственно варианты ответов, варианты нужно перетащить в соответствующие области</div>
      <div className={'drag-drop__anwes'}>
        {ans.map((el, idx) => (
          <div
            key={idx.toString()}            
            className={'drag-drop__anwer'}
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
