import React, { useState } from 'react'
import './styles.css'

type TCard = {
  id: number,
  order: number,
  text: string,
}

export const TestDragDrop = () => {
  const [cardList, setCardList] = useState<TCard[]>([
    { id: 1, order: 3, text: 'Карточка 3' },
    { id: 2, order: 1, text: 'Карточка 1' },
    { id: 3, order: 2, text: 'Карточка 2' },
    { id: 4, order: 4, text: 'Карточка 4' },
  ])
  // Drag events
  const dragStartHandler = (
    e: React.DragEvent<HTMLDivElement>,
    card: TCard
  ) => {
    console.log(card, e)
  }

  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('endHandler', e)
  }

  const dragLleaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('leave', e)
  }

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    //console.log('over', e)
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>, card: TCard) => {
    e.preventDefault()
    console.log('drop', e, card)
  }

  return (
    <div className={'container'}>
      <h1>Test Drag and Drop</h1>
      <div className={'drag-drop__list'}>
        {cardList.map((card) => (
          <div
            key={card.id}
            className={'drag-drop__card'}
            draggable={true}
            onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
              dragStartHandler(e, card)
            }}
            onDragLeave={(e: React.DragEvent<HTMLDivElement>) => {
              dragLleaveHandler(e)
            }}
            onDragEnd={(e: React.DragEvent<HTMLDivElement>) => {
              dragEndHandler(e)
            }}
            onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
              dragOverHandler(e)
            }}
            onDrop={(e: React.DragEvent<HTMLDivElement>) => {
              dropHandler(e, card)
            }}
          >
            {card.text}
          </div>
        ))}
      </div>
    </div>
  )
}
