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

  /**
  * Load dispatch from Redux, [cars and load] from Store and create new State page to control paginate
  * @type {variable}
  */

  const dispatch = useDispatch();
  const {cards, load} = useSelector(state => state.cardApp);
  const [page, setPage] = useState(20);

  /**
  * Load data from API with useEffect in async mode
  * @type {function}
  */

  useEffect(() => {
    dispatch(actions.setLoad(false))
    dispatch(actions.getCards())
  }, [dispatch]) 


  /**
  * Set scroll events with useLayoutEffect
  * @type {function}
  */

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
      {load ? (
        <ul>{cards.slice(0, page).map(card => <Card key={card.id} card={card}/>)}</ul> 
      ) : (
        <div className="loading">Loading....</div>
      )}
    </div>
  )
}

export default CardsApp

