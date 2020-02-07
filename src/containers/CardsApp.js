import React, { useState, useEffect, useLayoutEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from '../state/reducer'
import { debounce } from "../data/utils"
import Card from "../components/Card"
import "../styles/index.css";

/**
 * Component CardsApp, Main Component where start app CardApp
 * @constant
 * @type {function}
 * @returns {JSX}
 */
const CardsApp = () => {

  const data = useSelector(state => state.cardApp);
  const dispatch = useDispatch();
  const [page, setPage] = useState(20);

  useEffect(() => {
    dispatch(actions.setLoad(false))
    dispatch(actions.getCards())
  }, [dispatch]) 

  useLayoutEffect(() => {
    const handleScroll = () => {
      if((window.innerHeight * 2 + window.scrollY) > document.body.clientHeight) {
        setPage(page + 40)
      }
    } 
    window.addEventListener('scroll', debounce(handleScroll, 300))
    return _ => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [page]) 

  return (
    <div className="cardApp">
      {data.load ? (
        <ul>{data.cards.slice(0, page).map(card => <Card key={card.id} card={card}/>)}</ul> 
      ) : (
        <div className="loading">Loading....</div>
      )}
    </div>
  )
}

export default CardsApp

