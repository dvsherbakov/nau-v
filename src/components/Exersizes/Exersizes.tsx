import React, { FC, useState, useEffect } from 'react'
import { Exersise } from './Exersise'
import { exersises } from './ExersisesList'
import ReactPaginate from 'react-paginate'

//import { IExersise } from './types'

type chPageType = {
  selected: number,
}

export const Exersizes: FC = () => {
  const [curEx, setCurEx] = useState([...exersises])
  const [pageNumber, setPageNumber] = useState(0)
  const [showFilter, setShowFilter] = useState(false)
  const [eTag, setTag] = useState('Все')
  const [eClass, setClass] = useState<number>(0)

  const exPerPage = 12
  const pagesVisited = pageNumber * exPerPage

  const dispEx = curEx.length ? 
    curEx
    .slice(pagesVisited, pagesVisited + exPerPage)
    .map((exersise) => <Exersise {...exersise} key={exersise.id} />) : 
    <div>Нет задач, удовлетворяющих условиям</div>

  function onlyUnique<T>(value: T, index: number, self: T[]) {
    return self.indexOf(value) === index
  }

  //var tmp: (string | number)[] = ['Все']
  const tags: string[] = ['Все']
    .concat(...exersises.map((e) => e.tags))
    .filter(onlyUnique)

  const classes: (string | number)[] = [0].concat(
    ...exersises.map((e) => e.klass).sort((a, b) => a - b),
  ).filter(onlyUnique)

  const onChangeFilterVisible = () => {
    setShowFilter(!showFilter)
  }

  const changePage = (data: chPageType) => {
    setPageNumber(data.selected)
  }

  const pageCount = Math.ceil(curEx.length / exPerPage)

  const changeTag = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    setTag(event.target.value as string)
  }

  const changeClass = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    setClass(+event.target.value|| 0)
  }

  useEffect(()=>{
    setCurEx(exersises
      .filter((elem)=>eTag==='Все'?true:elem.tags.includes(eTag))
      .filter((val)=>eClass===0?true:val.klass===eClass))
  }, [eTag, eClass])

  return (
    <div className="ex-form">
      <div className="ex-form__flex container">
        <div
          className={showFilter ? 'scroll-buttons__up' : 'scroll-buttons__down'}
          onClick={onChangeFilterVisible}
        ></div>
        {showFilter && (
          <div className="ex-form__flex">
            <select onChange={changeTag}>
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            <select onChange={changeClass}>
              {classes.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div className="exersises">{dispEx}</div>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        onPageChange={changePage}
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={5}
        breakLabel={'...'}
        containerClassName={'paginationBttns'}
        previousClassName={'previousBttn'}
        nextLinkClassName={'nextBttn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'pagnationActive'}
      />
    </div>
  )
}
