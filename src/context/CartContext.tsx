import { createContext, ReactNode, useReducer } from "react";
import { ItemCart } from "../pages/Home/_elements/WrapperCoffees";
import { valuesCoffees } from "../pages/Home/_elements/WrapperCoffees/valuesCoffee";
import { addItemToCheckout, handleAddItemCart, handleInputAddItemCart, handleRemoveItemCart, Quantity } from "../reducers/cart/actions";
import { cartReducer } from "../reducers/cart/reducer";

interface CartContextProviderProps {
    children: ReactNode
}

interface CartContextType {
    item: ItemCart[]
    itemCheckout: ItemCart[]
    handleItemCartAdd: (item: Quantity) => void
    handleItemCartRemove: (item: Quantity) => void
    handleInputAddItemWithInput: (item: Quantity) => void
    handleAddItemToCheckout: (item: ItemCart) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({
    children
}: CartContextProviderProps) {
    const [cartState, dispatch] = useReducer(cartReducer, { item: valuesCoffees, itemCheckout: [] })

    const { item, itemCheckout } = cartState

    const handleItemCartAdd = (item: Quantity) => {
        dispatch(handleAddItemCart({ ...item }))
    }

    const handleItemCartRemove = (item: Quantity) => {
        dispatch(handleRemoveItemCart({ ...item }))
    }

    const handleInputAddItemWithInput = (item: Quantity) => {
        dispatch(handleInputAddItemCart({ ...item }))
    }

    const handleAddItemToCheckout = (item: ItemCart) => {
        dispatch(addItemToCheckout({ ...item }))
    }

    return (
        <CartContext.Provider
            value={{
                item,
                itemCheckout,
                handleItemCartAdd,
                handleItemCartRemove,
                handleInputAddItemWithInput,
                handleAddItemToCheckout
            }}>
            {children}
        </CartContext.Provider>
    )
}