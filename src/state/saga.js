import { all, put, takeEvery } from 'redux-saga/effects';
import { fetchCards } from "../api/endpoints"
import { actions } from '../state/reducer'

function* setCards() { 
    try {
      const data = yield fetchCards().then(dataAPI => dataAPI.data.cards || []); 
      yield put(actions.setCards(data)) 
      yield put(actions.setLoad(true))      
    } 
    catch (error) {
      console.log(error) 
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery("GET_CARDS", setCards)
    ]);
}