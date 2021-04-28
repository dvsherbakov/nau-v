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
  const [currentCard, setCurrentCard] = useState<TCard>(cardList[0])

  // Drag events
  const dragStartHandler = (
    e: React.DragEvent<HTMLDivElement>,
    card: TCard
  ) => {
    setCurrentCard(card)
  }

  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('endHandler', e)
    const t = e.target as HTMLDivElement;
    t.style.background = '#FFFFFF'
  }

  const dragLleaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const t = e.target as HTMLDivElement;
    t.style.background = '#FFFFFF'
  }

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const t = e.target as HTMLDivElement;
    t.style.background = '#CFCFCF'
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>, card: TCard) => {
    e.preventDefault()
    const t = e.target as HTMLDivElement;
    t.style.background = '#FFFFFF'
    setCardList(cardList.map((c):TCard=>{
      if (c.id===card.id) return {...c, order: currentCard.order}
      if (c.id===currentCard.id) return {...c, order: card.order}
      return c
    })
    )
  }

  const sortCard = (a:TCard, b: TCard) => a.order-b.order

  return (
    <div className={'container'}>
      <h1>Test Drag and Drop</h1>
      <div className={'drag-drop__list'}>
        {cardList.sort(sortCard).map((card) => (
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
