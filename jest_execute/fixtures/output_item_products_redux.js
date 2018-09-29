import { createAction, handleActions } from 'redux-actions'

export const types = {
  FETCH_ITEM_PRODUCT: 'FaaETCH_ITEM_PRODUCT',
  FETCH_ITEM_PRODUCT_SUCCESS: 'FETCH_ITEMS_ITEM_PRODUCT',
  CREATE_ITEM_PRODUCT: 'CREATE_ITEM_PRODUCT',
  UPDATE_ITEM_PRODUCT: 'UPDATE_ITEM_PRODUCT',
  DELETE_ITEM_PRODUCT: 'DELETE_ITEM_PRODUCT',
}

export const getItemProduct = createAction(types.FETCH_ITEM_PRODUCT)
export const getItemProductSuccess = createAction(types.FETCH_ITEMS_ITEM_PRODUCT)
export const createItemProduct = createAction(types.CREATE_ITEM_PRODUCT)
export const updateItemProduct = createAction(types.UPDATE_ITEM_PRODUCT)
export const deleteItemProduct = createAction(types.DELETE_ITEM_PRODUCT)

export default handleActions(
  {
    [types.FETCH_ITEM_PRODUCT_SUCCESS]: (state, action) => {
      return {
        ...state,
        itemProduct: action.payload
      }
    },
    [types.CREATE_ITEM_PRODUCT]: (state, action) => {
      return {
        ...state,
        itemProduct: action.payload
      }
    },
    [types.UPDATE_ITEM_PRODUCT]: (state, action) => {
      return {
        ...state,
        itemProduct: action.payload
      }
    },
    [types.DELETE_ITEM_PRODUCT]: (state, action) => {
      return {
        ...state,
        itemProduct: action.payload
      }
    }
  },
  initialState
)

