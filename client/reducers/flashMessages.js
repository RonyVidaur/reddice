import { ADD_FLASH_MESSAGE } from '../actions/types'
import shortId from 'shortid'

export default (state = [], action ={}) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: shortId.generate(),
          type: action.message.type,
          text: action.message.text
        }
      ]

    default: return state
  }
}
