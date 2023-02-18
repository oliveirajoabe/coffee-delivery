import { Minus, Plus } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import * as S from "./styles"

interface Props {
    initialValueQuantity: string
    id: number
}
export const InputWithButtons = ({ initialValueQuantity, id }: Props) => {
    const { handleItemCartAdd, handleItemCartRemove, handleInputAddItemWithInput } = useContext(CartContext)

    const handleAddItem = () => {
        handleItemCartAdd({ quantity: initialValueQuantity, id })
    }

    const handleRemoveItem = () => {
        handleItemCartRemove({ quantity: initialValueQuantity, id })
    }

    const handleInput = (e: any) => {
        const value = (e.target.value).replace(/\D/g, '')
        handleInputAddItemWithInput({ quantity: value, id })
    }

    return (
        <S.WrapperInputAddQuantity>
            <Minus
                size={20}
                weight="fill"
                className='icon'
                onClick={handleRemoveItem}
            />
            <S.InputStyles
                type="number"
                value={initialValueQuantity}
                onChange={handleInput} />
            <Plus
                size={20}
                weight="fill"
                className='icon'
                onClick={handleAddItem}
            />
        </S.WrapperInputAddQuantity>
    )
}