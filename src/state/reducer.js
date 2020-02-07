// Initial State

const initialState = {
    cards: [],
    load:false
};
  
// Constants

const SET_CARDS = 'SET_CARDS';
const GET_CARDS = 'GET_CARDS';
const SET_LOAD = 'SET_LOAD';

// Actions

export const actions = {
    setCards: open => ({ type: SET_CARDS, payload: open }), 
    getCards: open => ({ type: GET_CARDS, payload: open }),
    setLoad: open => ({ type: SET_LOAD, payload: open })
}

// Reducer

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_CARDS:
            return { ...state, cards: payload };
        case SET_LOAD:
            return { ...state, load: payload };
        default:    
        return state;
    }
};