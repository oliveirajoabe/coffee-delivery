import { ItemCart } from "../../pages/Home/_elements/WrapperCoffees"

export enum ActionsTypes {
    ADD_ITEM_CART = "ADD_ITEM_CART",
    REMOVE_ITEM_CART = "REMOVE_ITEM_CART",
    ADD_ITEM_WITH_INPUT = "ADD_ITEM_WITH_INPUT",
    ADD_TO_CART = "ADD_TO_CART"
}

export interface Quantity {
    quantity: string
    id: number
}

export function handleAddItemCart(item: Quantity) {
    return {
        type: ActionsTypes.ADD_ITEM_CART,
        payload: { item }
    }
}

export function handleRemoveItemCart(item: Quantity) {
    return {
        type: ActionsTypes.REMOVE_ITEM_CART,
        payload: { item }
    }
}

export function handleInputAddItemCart(item: Quantity) {
    return {
        type: ActionsTypes.ADD_ITEM_WITH_INPUT,
        payload: { item }
    }
}

export function addItemToCheckout(item: ItemCart) {
    return {
        type: ActionsTypes.ADD_TO_CART,
        payload: { item }
    }
}