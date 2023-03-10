import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {savedItemsActions} from '../store/savedItems/savedItems.slice'

const allActions = {
  ...savedItemsActions
}

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(allActions, dispatch)
}