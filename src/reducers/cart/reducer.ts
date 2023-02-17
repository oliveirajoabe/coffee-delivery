import { ActionsTypes } from "./actions"
import { produce } from "immer"
import { ItemCart } from "../../pages/Home/_elements/WrapperCoffees"

interface CartState {
    item: ItemCart[]
    itemCheckout: ItemCart[]
}

export function cartReducer(state: CartState, action: any) {
    switch (action.type) {
        case ActionsTypes.ADD_ITEM_CART: {
            const localeIndex = action.payload.item.id
            return produce(state, (draft) => {
                draft.item[localeIndex].quantity = String(Number(action.payload.item.quantity) + 1)
            })
        }

        case ActionsTypes.REMOVE_ITEM_CART: {
            const localeIndex = action.payload.item.id
            return produce(state, (draft) => {
                draft.item[localeIndex].quantity =
                    Number(state.item[localeIndex].quantity) <= 0 ? "0" : String(Number(action.payload.item.quantity) - 1)
            })
        }

        case ActionsTypes.ADD_ITEM_WITH_INPUT: {
            const localeIndex = action.payload.item.id
            return produce(state, (draft) => {
                draft.item[localeIndex].quantity = action.payload.item.quantity
            })
        }

        case ActionsTypes.ADD_TO_CART: {
            const indexItemCheckout = state.itemCheckout.findIndex(item => {
                return item.id === action.payload.item.id
            })
            const indexItem = state.item.findIndex(item => {
                return item.id === action.payload.item.id
            })
            return produce(state, (draft) => {
                if (indexItemCheckout !== -1) {
                    draft.itemCheckout[indexItemCheckout].quantity = action.payload.item.quantity
                    draft.item[indexItem].quantity = action.payload.item.quantity
                } else {
                    draft.itemCheckout.push(action.payload.item)
                }
            })
        }

        default:
            return state
    }
}