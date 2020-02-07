import axios from "axios"

/**
 * Fetch data for Cards
 * @constant
 * @type {array}
 */

export const fetchCards = () => {
    return axios.get('https://api.elderscrollslegends.io/v1/cards');
}
